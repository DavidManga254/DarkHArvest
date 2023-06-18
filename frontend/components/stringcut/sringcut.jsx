import React, { useState } from 'react';

const TruncatedText = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedText = expanded
    ? text
    : text.slice(0, maxLength) + (text.length > maxLength ? '...' : '');

  const showToggle = text.length > maxLength;

  return (
    <div>
      <div className='text-white'
        dangerouslySetInnerHTML={{
          __html: truncatedText
        }}
      />
      {showToggle && (
        <button className='text-rateColor' onClick={toggleExpand}>
          {expanded ? 'Less' : 'More...'}
        </button>
      )}
    </div>
  );
};

export default TruncatedText;
