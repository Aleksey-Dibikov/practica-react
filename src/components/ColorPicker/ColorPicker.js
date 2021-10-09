import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const { activeOptionIdx } = this.state;

    const optionClasses = ['ColorPicker__option'];

    if (index === activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { makeOptionClassName, setActiveIdx } = this;

    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Choosed color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
