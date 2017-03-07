import React, { Component } from 'react';
import { connect } from 'react-redux'


import AutoScalingText from './AutoScalingText'

class CalculatorDisplay extends Component {
  render() {

    return (
      <div className="calculator-display">
        <AutoScalingText>{ this.props.SCREEN   }</AutoScalingText>
      </div>
    );
  }
}

const mapStateToProps = ( { calculator } ) => {
  const { SCREEN } = calculator
  return {
    SCREEN,
  };
};

export default connect(mapStateToProps, null)(CalculatorDisplay);
