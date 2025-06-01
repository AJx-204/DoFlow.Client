import React from 'react';

const Loader = ({
  size = '22px',
  borderSize = '2px',
  color = 'border-gray-500', 
}) => {
    
  return (
    <div
      className={`animate-spin rounded-full border-t-transparent bg-transparent ${color}`}
      style={{
        width: size,
        height: size,
        borderWidth: borderSize,
      }}
    />
  );
};

export default Loader;
