import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';


test('the header renders with the correct text', () => {
  render(<App />);
  const headerEl = screen.getByRole('heading');
  expect(headerEl.textContent).toBe('Test Website');
});

test('button changes color when clicked', () => {
  render(<App />);
  const colorBtn = screen.getByRole('button');

  userEvent.click(colorBtn);

  expect(colorBtn).toHaveStyle({backgroundColor: 'blue'})
  
  expect(colorBtn.textContent).toBe('Change Color');
});


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/going home/i);
//   expect(linkElement).toBeInTheDocument();
// });
