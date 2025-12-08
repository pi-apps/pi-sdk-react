import React from 'react';
import PiSdkComponent from '../PiSdkComponent';

// Mock the pi-sdk-js module and Pi global
jest.mock('pi-sdk-js', () => {
  return class PiSdkBaseMock {
    static connected = false;
    static log = jest.fn();
    static error = jest.fn();
    static version = '2.0';
    static get_connected = () => PiSdkBaseMock.connected;
    static get_user = () => null;
    async connect() { PiSdkBaseMock.connected = true; return Promise.resolve(); }
    initializePiSdkBase() {} // Added to fix the test
  };
});

describe('PiSdkComponent', () => {
  let piComponent;

  beforeEach(() => {
    piComponent = new PiSdkComponent({});
  });

  it('should initialize the component and bind methods', () => {
    expect(typeof piComponent.is_connected_to_pi).toBe('function');
    expect(typeof piComponent.connect).toBe('function');
  });

  it('should report not connected by default', () => {
    expect(piComponent.is_connected_to_pi()).toBe(false);
  });

  it('should set connected to true after calling connect', async () => {
    await piComponent.connect();
    expect(piComponent.is_connected_to_pi()).toBe(true);
  });
});
