import React, { useState } from 'react';

const Calculator = ({ onClose }) => {
  const [value, setValue] = useState('');

  const handleClick = (buttonValue) => {
    if (buttonValue === '=') {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue('Error');
      }
    } else if (buttonValue === 'C') {
      setValue('');
    } else {
      setValue(value + buttonValue);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-64 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Calculator</h2>
          <button onClick={onClose} className="text-red-600">X</button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={value}
            readOnly
            className="w-full p-2 border rounded text-right"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-gray-200 p-4 rounded hover:bg-gray-300"
            >
              {btn}
            </button>
          ))}
          {['4', '5', '6', '*'].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-gray-200 p-4 rounded hover:bg-gray-300"
            >
              {btn}
            </button>
          ))}
          {['1', '2', '3', '-'].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-gray-200 p-4 rounded hover:bg-gray-300"
            >
              {btn}
            </button>
          ))}
          {['0', '.', '=', '+'].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-gray-200 p-4 rounded hover:bg-gray-300"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={() => handleClick('C')}
            className="bg-red-600 text-white p-4 rounded col-span-2 hover:bg-red-700"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
