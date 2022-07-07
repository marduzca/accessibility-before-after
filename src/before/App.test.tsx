import React from 'react';
import { render, screen } from '@testing-library/react';
import NonAccessibleApp from './NonAccessibleApp';

test('renders learn react link', () => {
  render(<NonAccessibleApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
