window.ResizeObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

export default {};
