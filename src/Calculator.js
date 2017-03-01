import React, { Component } from 'react';
import CalculatorKey from './CalculatorKey';
import './CalculatorKey.css';

class CalculatorDisplay extends React.Component {
  render() {
    const { value, ...props } = this.props
    return (
      <div {...props} className="calculator-display">
        1234567
      </div>
    )
  }
}


class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay />
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <CalculatorKey className="key-clear" >AC</CalculatorKey>
              <CalculatorKey className="key-sign" >±</CalculatorKey>
              <CalculatorKey className="key-percent" >%</CalculatorKey>
            </div>
            <div className="digit-keys">
              <CalculatorKey className="key-0">0</CalculatorKey>
              <CalculatorKey className="key-dot">●</CalculatorKey>
              <CalculatorKey className="key-1">1</CalculatorKey>
              <CalculatorKey className="key-2">2</CalculatorKey>
              <CalculatorKey className="key-3">3</CalculatorKey>
              <CalculatorKey className="key-4">4</CalculatorKey>
              <CalculatorKey className="key-5">5</CalculatorKey>
              <CalculatorKey className="key-6">6</CalculatorKey>
              <CalculatorKey className="key-7">7</CalculatorKey>
              <CalculatorKey className="key-8">8</CalculatorKey>
              <CalculatorKey className="key-9">9</CalculatorKey>
            </div>

          </div>
          <div className="operator-keys">
            <CalculatorKey className="key-divide">÷</CalculatorKey>
            <CalculatorKey className="key-multiply">×</CalculatorKey>
            <CalculatorKey className="key-subtract">-</CalculatorKey>
            <CalculatorKey className="key-add">+</CalculatorKey>
            <CalculatorKey className="key-equal">=</CalculatorKey>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
