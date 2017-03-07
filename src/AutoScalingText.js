import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class AutoScalingText extends Component {
  componentDidUpdate() {
    const { scale } = this.props;

    const node = this.node;
    const parentNode = node.parentNode;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale)
      return

    if (actualScale < 1) {
      this.onChangeScreenScale(actualScale);
    } else if (scale < 1) {
      this.onChangeScreenScale(1);
    }
  }

  onChangeScreenScale(actualScale) {
    this.props.changeScreenScale(actualScale)
  }

  render() {
    const scale = this.props.screenScale;
    return (
      <div
        className="auto-scaling-text"
        style={{ transform: `scale(${scale},${scale})` }}
        ref={node => this.node = node}
      >{this.props.children}</div>
    );
  }
}


const mapStateToProps =  ({ calculator }) => {
  const { screenScale } = calculator;
  return {
    screenScale,
  };
};

export default connect(mapStateToProps, actions)(AutoScalingText);
