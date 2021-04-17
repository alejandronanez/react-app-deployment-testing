import { fireEvent, render, screen } from '@testing-library/react';
import { Banner } from './Banner';

describe('Banner Component', () => {
  test('the switch should start off', () => {
    render(<Banner />);
    expect(screen.getByText(/switch is/i)).toHaveTextContent(/off/i);
  });
  test('clicking the button should toggle the switch', () => {
    render(<Banner />);
    const bannerLabel = screen.getByText(/switch is/i);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(bannerLabel).toHaveTextContent(/on/i);
    fireEvent.click(button);
    expect(bannerLabel).toHaveTextContent(/off/i);
  });
});
