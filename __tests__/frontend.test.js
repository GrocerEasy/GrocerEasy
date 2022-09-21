import { render, screen } from '@testing-library/react';
import App from '../src/App';
import Item from '../src/components/Item';

test('add button has correct initial color', () => {
  render(<Item />);
  const colorButton = screen.getByRole('button', { className: 'addItem' });

  expect(colorButton).toHaveStyle({ background: 'green' });
});

test('button has correct initial text', () => {});

test('button turns blue when clicked', () => {});
