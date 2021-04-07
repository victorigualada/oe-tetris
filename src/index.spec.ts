import { ExampleComponent } from './index';

describe('ExampleComponent test', () => {
  it('should return hello world', () => {
    expect(ExampleComponent.app()).toEqual('Hello World!');
  });
});
