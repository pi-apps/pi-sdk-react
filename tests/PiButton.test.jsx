import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PiButton from '../PiButton';
import '@testing-library/jest-dom';

describe('PiButton', () => {
  it('renders a disabled button if not connected', () => {
    jest.spyOn(PiButton.prototype, 'is_connected_to_pi').mockReturnValue(false);
    const { getByText } = render(<PiButton />);
    const button = getByText(/buy/i);
    expect(button).toBeDisabled();
  });

  it('renders an enabled button if connected', () => {
    jest.spyOn(PiButton.prototype, 'is_connected_to_pi').mockReturnValue(true);
    const { getByText } = render(<PiButton />);
    const button = getByText(/buy/i);
    expect(button).not.toBeDisabled();
  });

  it('runs buy() on click when connected', () => {
    jest.spyOn(PiButton.prototype, 'is_connected_to_pi').mockReturnValue(true);
    const buySpy = jest.spyOn(PiButton.prototype, 'buy').mockImplementation(() => {});
    const { getByText } = render(<PiButton />);
    const button = getByText(/buy/i);
    fireEvent.click(button);
    expect(buySpy).toHaveBeenCalled();
  });
});
