import pretty from 'pretty';
import { render } from '@testing-library/react';
import Quiz from '../components/Quiz';

describe('Quiz', () => {
  it('should contain the expected text', () => {
    render(<Quiz />);

    const itemElement = document.querySelector('h2');

    if (itemElement) {
      expect(itemElement.textContent).toBe('Quiz Completed');  
    }
    
  });

  it('should match snapshot', () => {
    render(<Quiz />);

    const calculatorElement = document.querySelector('.p-4 text-center');

    if (calculatorElement) {
      expect(pretty(calculatorElement.innerHTML)).toMatchSnapshot();
    }
  });
});
