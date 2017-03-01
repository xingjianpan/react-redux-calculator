import React from 'react';
import PointTarget from 'react-point';
import './CalculatorKey.css';

const CalculatorKey = (props) => {
  const { onPress, className } = props
  return (
    <PointTarget onPoint={onPress}>
      <button className={`calculator-key ${className}`}>{props.children}</button>
    </PointTarget>
  );
};

export default CalculatorKey;
