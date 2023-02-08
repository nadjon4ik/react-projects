import { render, screen } from '@testing-library/react';
import Post from './Post';

test('renders learn react link', () => {
  render(<Post />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
