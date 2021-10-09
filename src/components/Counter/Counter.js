import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    const { handleIncrement, handleDecrement } = this;

    return (
      <div className="Counter">
        <Value value={value} />
        <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
      </div>
    );
  }
}

export default Counter;
