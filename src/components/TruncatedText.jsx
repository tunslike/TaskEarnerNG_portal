import React from 'react'

const TruncatedText = ({ text = 'This is a default text, all tasks must come with text', maxLength = 100 }) => {
    
    if (!text) return null; // Return nothing if no text is provided
  
    // If text is shorter than or equal to maxLength, return it as-is
    if (text.length <= maxLength) {
      return <span>{text}</span>;
    }
  
    // Otherwise, truncate and add ellipsis
    const truncated = text.substring(0, maxLength) + '...';
    return <span>{truncated}</span>;
  };

  export default TruncatedText;
