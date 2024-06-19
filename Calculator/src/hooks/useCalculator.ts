import {useRef, useState} from 'react';

enum Operators {
  addition,
  subtraction,
  multiplication,
  divide,
}

const useCalculator = () => {
  const [numState, setNumState] = useState('0');
  const [previousNumberState, setPreviousNumberState] = useState('0');
  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumState('0');
    setPreviousNumberState('0');
  };

  const buildNumber = (num: string) => {
    if (numState.includes('.') && num === '.') {
      return;
    }

    if (numState.startsWith('0') || numState.startsWith('-0')) {
      if (num === '.') {
        setNumState(numState + num);
      } else if (num === '0' && numState.includes('.')) {
        setNumState(numState + num);
      } else if (num !== '0' && !numState.includes('.')) {
        setNumState(num);
      } else if (num === '0' && !numState.includes('.')) {
        setNumState(numState);
      } else {
        setNumState(numState + num);
      }
    } else {
      setNumState(numState + num);
    }
  };

  const changeValue = () => {
    if (numState.includes('-')) {
      setNumState(numState.replace('-', ''));
    } else {
      setNumState('-' + numState);
    }
  };

  const deleteSingle = () => {
    let negative = '';
    let temNum = numState;

    if (numState.includes('-')) {
      negative = '-';
      temNum = numState.substring(1);
    }

    if (temNum.length > 1) {
      setNumState(negative + temNum.slice(0, -1));
    } else {
      setNumState('0');
    }
  };

  const numToPrevious = () => {
    if (numState.endsWith('.')) {
      setPreviousNumberState(numState.slice(0, -1));
    } else {
      setPreviousNumberState(numState);
    }
    setNumState('0');
  };

  const additionAction = () => {
    numToPrevious();
    lastOperation.current = Operators.addition;
  };

  const subtractionAction = () => {
    numToPrevious();
    lastOperation.current = Operators.subtraction;
  };

  const multiplyAction = () => {
    numToPrevious();
    lastOperation.current = Operators.multiplication;
  };

  const divideAction = () => {
    numToPrevious();
    lastOperation.current = Operators.divide;
  };

  const calculate = () => {
    const num = Number(numState);
    const prevNum = Number(previousNumberState);

    if (num === 0) {
      return;
    }

    switch (lastOperation.current) {
      case Operators.addition:
        setNumState(`${num + prevNum}`);
        break;
      case Operators.subtraction:
        setNumState(`${prevNum - num}`);
        break;
      case Operators.multiplication:
        setNumState(`${num * prevNum}`);
        break;
      case Operators.divide:
        setNumState(`${prevNum / num}`);
        break;
    }

    setPreviousNumberState('0');
  };

  return {
    digits: {
      actual: numState,
      previous: previousNumberState,
    },
    actions: {
      clear,
      buildNumber,
      changeValue,
      deleteSingle,
      additionAction,
      subtractionAction,
      multiplyAction,
      divideAction,
      calculate,
    },
  };
};

export default useCalculator;
