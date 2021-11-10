import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import * as actions from '../../redux/counter/counter-actions';
import './Counter.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.counterValue,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment(1)),
    onDecrement: () => dispatch(actions.decrement(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// class Counter extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;
//     const { handleIncrement, handleDecrement } = this;

//     return (
//       <div className="Counter">
//         <Value value={value} />
//         <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
//       </div>
//     );
//   }
// }

// export default Counter;
