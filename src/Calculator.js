import React, { Component } from 'react';
import { connect } from 'react-redux'
import CalculatorKey from './CalculatorKey';
import './Calculator.css';
import * as actions from './actions';



// container
class CalculatorDisplay extends React.Component {
  render() {
    const { value, ...props } = this.props;
    return (
      <div {...props} className="calculator-display">
        {this.props.children}
      </div>
    );
  }
}

class Calculator extends Component {
  onClearAll() {
    // call action
    this.props.clearKeyPressed();
  }

  onIputDigit(digit) {
    this.props.inputDigit(digit);
  }

  onInputDot() {
    this.props.inputDot();
  }

  onToggleSign() {
    this.props.toggleSign();
  }
  onInputPercentage() {
    this.props.inputPercentage();
  }
  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay >
          {this.props.calculator.SCREEN}
        </CalculatorDisplay>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <CalculatorKey className="key-clear" onPress={() => { this.onClearAll() }}>AC</CalculatorKey>
              <CalculatorKey className="key-sign" onPress={() => { this.onToggleSign(); }}>±</CalculatorKey>
              <CalculatorKey className="key-percent" onPress={() => { this.onInputPercentage(); }}>%</CalculatorKey>
            </div>
            <div className="digit-keys">
              <CalculatorKey className="key-0" onPress={() => { this.onIputDigit(0); }}>0</CalculatorKey>
              <CalculatorKey className="key-dot" onPress={() => { this.onInputDot(); }}>●</CalculatorKey>
              <CalculatorKey className="key-1" onPress={() => { this.onIputDigit(1); }}>1</CalculatorKey>
              <CalculatorKey className="key-2" onPress={() => { this.onIputDigit(2); }}>2</CalculatorKey>
              <CalculatorKey className="key-3" onPress={() => { this.onIputDigit(3); }}>3</CalculatorKey>
              <CalculatorKey className="key-4" onPress={() => { this.onIputDigit(4); }}>4</CalculatorKey>
              <CalculatorKey className="key-5" onPress={() => { this.onIputDigit(5); }}>5</CalculatorKey>
              <CalculatorKey className="key-6" onPress={() => { this.onIputDigit(6); }}>6</CalculatorKey>
              <CalculatorKey className="key-7" onPress={() => { this.onIputDigit(7); }}>7</CalculatorKey>
              <CalculatorKey className="key-8" onPress={() => { this.onIputDigit(8); }}>8</CalculatorKey>
              <CalculatorKey className="key-9" onPress={() => { this.onIputDigit(9); }}>9</CalculatorKey>
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

const mapStateToProps = ( state ) => {
  return {
    calculator: state.calculator,
  };
};
export default connect(mapStateToProps, actions)(Calculator);
