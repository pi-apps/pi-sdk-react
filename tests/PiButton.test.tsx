import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PiButton from '../PiButton';
import '@testing-library/jest-dom';

describe('PiButton', () => {
  it('renders a disabled button if not connected', () => {
    jest.spyOn((PiButton.prototype as any), 'is_connected_to_pi').mockReturnValue(false);
    const TypedPiButton = PiButton as unknown as React.ComponentType<any>;
    const { getByText } = render(<TypedPiButton />);
    const button = getByText(/buy/i);
    expect(button).toBeDisabled();
  });

  it('renders an enabled button if connected', () => {
    jest.spyOn((PiButton.prototype as any), 'is_connected_to_pi').mockReturnValue(true);
    const TypedPiButton = PiButton as unknown as React.ComponentType<any>;
    const { getByText } = render(<TypedPiButton />);
    const button = getByText(/buy/i);
    expect(button).not.toBeDisabled();
  });

  it('runs buy() on click when connected', () => {
    jest.spyOn((PiButton.prototype as any), 'is_connected_to_pi').mockReturnValue(true);
    const buySpy = jest.spyOn((PiButton.prototype as any), 'buy').mockImplementation(() => {});
    const TypedPiButton = PiButton as unknown as React.ComponentType<any>;
    const { getByText } = render(<TypedPiButton />);
    const button = getByText(/buy/i);
    fireEvent.click(button);
    expect(buySpy).toHaveBeenCalled();
  });
});
