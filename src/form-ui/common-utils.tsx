import React, { useMemo, useCallback } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import isoweek from 'dayjs/plugin/isoweek';
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(isoweek);

export function isEmptyValue(value: any) {
  return !value && value !== 0 || (Array.isArray(value) && value.length === 0);
}

// 默认时间格式
const DEFAULT_FORMAT_TIME = 'HH:mm:ss';
// 默认日期格式
const DEFAULT_FORMATS: Record<string, string> = {
  date: 'YYYY-MM-DD',
  week: 'gggg-[W]W', // 输出: 2025-W37
  month: 'YYYY-MM',
  quarter: 'YYYY-[Q]Q', // 输出: 2025-Q3
  year: 'YYYY',
};

// 判断是否为空值
const isEmptyDateValue = (val: any): boolean =>
  val == null || val === '' || (Array.isArray(val) && val.length === 2 && !val[0] && !val[1]);

/**
 * antd中某些组件的onChange并不是直接返回value,而是e.target.value
 */
export const withValueChangeHandler = <T extends { onChange?: (...args: any[]) => void }>(
  Component: React.ComponentType<T>
) => {
  return (props: Omit<T, 'onChange'> & { onChange?: (value: any) => void }) => {
    const handleChange = (e: React.ChangeEvent<{ value: any }>) => {
      props.onChange?.(e.target.value);
    };
    // 使用类型断言处理组件props类型
    return <Component {...(props as T)} onChange={handleChange} />;
  };
};

/**
 * date日期选择器兼容
 */
export const withDayjsTransformAntdDate = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const { value, onChange, picker, ...restProps } = props;
    // 根据 picker 类型决定如何解析 value
    const parsedValue = useMemo(() => {
      if (!value) return undefined;
      if (picker === 'week') {
        const [year, weekStr] = value.split('-');
        const weekNumber = parseInt(weekStr, 10);
        if (year && !isNaN(weekNumber)) {
          return dayjs().year(parseInt(year, 10)).week(weekNumber).startOf('week');
        }
      } else if (picker === 'month') {
        return dayjs(value, 'YYYY-MM'); // 支持 "2025-03"
      } else if (picker === 'quarter') {
        return dayjs(value, 'YYYY-[Q]Q'); // 支持 "2025-Q2"
      } else if (picker === 'year') {
        return dayjs(value, 'YYYY');
      } else {
        // 默认按日期处理
        return dayjs(value);
      }
      return undefined;
    }, [value, picker]);
    const handleChange = useCallback(
      (dayjsDate: Dayjs | null, dateString: string) => {
        if (!dayjsDate || !dayjsDate.isValid()) {
          onChange?.(null);
          return;
        }
        let formattedValue: string;
        if (picker === 'week') {
          // 提取年份和周数，格式化为 "2025-32"
          const year = dayjsDate.year();
          const week = dayjsDate.week(); // 注意：week() 返回的是第几周
          formattedValue = `${year}-${week}`;
        } else if (picker === 'month') {
          formattedValue = dayjsDate.format('YYYY-MM');
        } else if (picker === 'quarter') {
          formattedValue = dayjsDate.format('YYYY-Q');
        } else if (picker === 'year') {
          formattedValue = dayjsDate.format('YYYY');
        } else {
          formattedValue = dayjsDate.format('YYYY-MM-DD');
        }
        onChange?.(formattedValue);
      },
      [onChange, picker]
    );
    return <Component {...restProps} picker={picker} value={parsedValue} onChange={handleChange} />;
  };
};

/**
 * dateRangePicker兼容
 */
export const withDayjsTransformAntdDateRangePicker = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const { value, onChange, format, picker = 'date', ...restProps } = props;
    // 确定 format：优先使用传入的 format，否则根据 picker 使用默认
    const resolvedFormat = format || DEFAULT_FORMATS[picker] || DEFAULT_FORMATS.date;
    // 解析 value: [string, string] → [Dayjs | null, Dayjs | null] 或 null
    const parsedValue = useMemo((): [Dayjs | null, Dayjs | null] | null => {
      if (isEmptyDateValue(value)) {
        return null;
      }
      if (!Array.isArray(value)) {
        return null;
      }
      const [startStr, endStr] = value;
      if (isEmptyDateValue([startStr, endStr])) {
        return null;
      }
      // 根据 picker 类型解析字符串为 Dayjs 对象
      const parseValue = (str: string | null | undefined, type: string): Dayjs | null => {
        if (!str) return null;
        switch (type) {
          case 'week': {
            // 匹配: 2025-W37, 2025-37, 2025W37
            const match = str.match(/^(\d{4})-?W?(\d+)$/i);
            if (!match) return null;
            const year = parseInt(match[1], 10);
            const week = parseInt(match[2], 10);
            return dayjs().year(year).week(week).startOf('week');
          }
          case 'month':
            return dayjs(str, 'YYYY-MM', true);
          case 'quarter': {
            // 匹配: 2025-Q3, 2025Q3, 2025-3, 20253
            const match = str.match(/^(\d{4})-?Q?([1-4])$/i);
            if (!match) return null;
            const year = parseInt(match[1], 10);
            const quarter = parseInt(match[2], 10);
            const month = (quarter - 1) * 3; // Q1 → 0月, Q2 → 3月, ...
            return dayjs(`${year}-${String(month + 1).padStart(2, '0')}-01`, 'YYYY-MM-DD', true);
          }
          case 'year':
            return dayjs(str, 'YYYY', true);
          case 'date':
          default:
            return dayjs(str, resolvedFormat, true);
        }
      };
      const start = parseValue(startStr, picker);
      const end = parseValue(endStr, picker);
      const isValidStart = start && start.isValid();
      const isValidEnd = end && end.isValid();
      if (!isValidStart && !isValidEnd) {
        return null;
      }
      return [isValidStart ? start : null, isValidEnd ? end : null];
    }, [value, picker, resolvedFormat]);
    // 处理 onChange: [Dayjs, Dayjs] | null → [string, string] 或 null
    const handleChange = useCallback(
      (dates: [Dayjs | null, Dayjs | null] | null, dateStrings: [string, string]) => {
        if (!dates || (!dates[0] && !dates[1])) {
          onChange?.(null);
          return;
        }
        const [start, end] = dates;
        const formatValue = (dayjsObj: Dayjs | null, type: string): string => {
          if (!dayjsObj || !dayjsObj.isValid()) return '';
          switch (type) {
            case 'week':
              return `${dayjsObj.year()}-W${dayjsObj.week()}`; // → 2025-W37
            case 'month':
              return dayjsObj.format('YYYY-MM'); // → 2025-06
            case 'quarter': {
              const year = dayjsObj.year();
              const quarter = Math.floor(dayjsObj.month() / 3) + 1; // 1-4
              return `${year}-Q${quarter}`; // → 2025-Q3
            }
            case 'year':
              return dayjsObj.format('YYYY'); // → 2025
            case 'date':
            default:
              return dayjsObj.format(resolvedFormat);
          }
        };
        const formatted: [string, string] = [formatValue(start, picker), formatValue(end, picker)];
        if (!formatted[0] && !formatted[1]) {
          onChange?.(null);
        } else {
          onChange?.(formatted);
        }
      },
      [onChange, picker, resolvedFormat]
    );
    return (
      <Component
        {...restProps}
        picker={picker}
        format={resolvedFormat}
        value={parsedValue}
        onChange={handleChange}
        allowClear={restProps.allowClear ?? true}
      />
    );
  };
};

/**
 * timer选择器兼容
 */
export const withDayjsTransformAntdTime = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const { value, onChange, format = DEFAULT_FORMAT_TIME, ...restProps } = props;
    // 解析 value：字符串 → dayjs
    const parsedValue = useMemo(() => {
      if (!value) return undefined;
      const stringValue = String(value).trim();
      if (!stringValue) return undefined;
      // 使用指定 format 解析，开启严格模式避免模糊解析
      const parsed = dayjs(stringValue, format, true);
      // 只有在格式匹配且有效时才返回
      return parsed.isValid() ? parsed : undefined;
    }, [value, format]);
    // 处理 onChange：dayjs → 字符串
    const handleChange = useCallback(
      (time: Dayjs | null, timeString: string) => {
        if (!time || !time.isValid()) {
          onChange?.(null);
          return;
        }
        // 根据format输出字符串
        const formatted = time.format(format);
        onChange?.(formatted);
      },
      [onChange, format]
    );
    return <Component {...restProps} format={format} value={parsedValue} onChange={handleChange} />;
  };
};

/**
 * timerPicker选择器兼容
 */
export const withDayjsTransformAntdTimeRange = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const { value, onChange, format = DEFAULT_FORMAT_TIME, ...restProps } = props;
    // 解析 value: [string, string] → [Dayjs, Dayjs]
    const parsedValue = useMemo(() => {
      if (!value || !Array.isArray(value)) return undefined;
      const [startStr, endStr] = value;
      if (!startStr && !endStr) return undefined;
      const start = startStr ? dayjs(startStr, format, true) : null;
      const end = endStr ? dayjs(endStr, format, true) : null;
      const isValidStart = start && start.isValid();
      const isValidEnd = end && end.isValid();
      if (!isValidStart && !isValidEnd) return undefined;
      return [isValidStart ? start : null, isValidEnd ? end : null] as [Dayjs | null, Dayjs | null];
    }, [value, format]);
    // 处理 onChange: [Dayjs, Dayjs] → [string, string]
    const handleChange = useCallback(
      (times: [Dayjs, Dayjs] | null, timeStrings: [string, string]) => {
        if (!times) {
          onChange?.(null);
          return;
        }
        const [start, end] = times;
        const formatted: [string, string] = [
          start?.isValid() ? start.format(format) : '',
          end?.isValid() ? end.format(format) : '',
        ];
        // 可选：如果都为空，返回 null
        if (!formatted[0] && !formatted[1]) {
          onChange?.(null);
        } else {
          onChange?.(formatted);
        }
      },
      [onChange, format]
    );
    return <Component {...restProps} format={format} value={parsedValue} onChange={handleChange} />;
  };
};

/**
 * 向组件中注入props
 */
export const withInjectedProps = (injectedProps: Record<string, any>) => {
  return (Component: React.ComponentType<any>) => {
    const WrappedComponent = React.forwardRef<any, any>((props, ref) => {
      const mergedProps = { ...injectedProps, ...props };
      return <Component ref={ref} {...mergedProps} />;
    });
    WrappedComponent.displayName = `WithInjectedProps(${Component.displayName || Component.name})`;
    return WrappedComponent;
  };
};
