import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PiButton from '../PiButton';
import '@testing-library/jest-dom';
import PiSdkBase from 'pi-sdk-js';

describe('PiButton (functional)', () => {
  let connectMock: jest.SpyInstance;
  let createPaymentMock: jest.SpyInstance;

  beforeEach(() => {
    // Mock connect to always call onConnection and resolve
    connectMock = jest.spyOn(PiSdkBase.prototype, 'connect').mockImplementation(function (this: any) {
      if (this.onConnection) this.onConnection();
      return Promise.resolve();
    });
    createPaymentMock = jest.spyOn(PiSdkBase.prototype, 'createPayment').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders a disabled button if not connected', async () => {
    // Simulate never connecting: do not call onConnection
    connectMock.mockImplementationOnce(() => Promise.resolve());
    const { findByText } = render(<PiButton />);
    const button = await findByText(/buy/i);
    expect(button).toBeDisabled();
  });

  it('renders an enabled button if connected', async () => {
    const { findByText } = render(<PiButton />);
    const button = await findByText(/buy/i);
    expect(button).not.toBeDisabled();
  });

  it('runs createPayment on click when connected', async () => {
    const { findByText } = render(<PiButton />);
    const button = await findByText(/buy/i);
    expect(button).not.toBeDisabled();
    fireEvent.click(button);
    expect(createPaymentMock).toHaveBeenCalled();
  });
});
