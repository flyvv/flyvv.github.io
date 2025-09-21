import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const SyntaxCodeBlock = ({ code, language = 'jsx' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ margin: '16px 0' }}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          padding: '8px 12px',
          background: '#2f2f2f',
          color: 'white',
          border: 'none',
          borderRadius: '4px 4px 0 0',
          cursor: 'pointer'
        }}
      >
        {isExpanded ? '▼ 隐藏代码' : '▶ 显示代码'}
      </button>
      
      {isExpanded && (
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{ 
            margin: 0,
            borderRadius: '0 0 4px 4px',
            padding: '16px',
            fontSize: '14px'
          }}
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
};
