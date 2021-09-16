import { render, screen } from '@testing-library/react';
import App from './App';


it('render the field with label having the special characters', () => {
  render(<App />);
  expect(screen.getByTestId('foo')).toHaveTextContent('About(En)'); // works
  expect(screen.getByLabelText('About(En)')).toBeInTheDocument();
  expect(screen.getByLabelText(/about\(en\)/i)).toBeInTheDocument();
  // expect(screen.getByLabelText(/About(En)/u)).toBeInTheDocument(); // not working
});