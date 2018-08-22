import React from 'react';

const ColoredLine = ({ color, width, height }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      width: width,
      height: height
    }}
  />
);

export default ColoredLine;