import { sharedAuthLib } from './shared-auth-lib';

describe('sharedAuthLib', () => {
  it('should work', () => {
    expect(sharedAuthLib()).toEqual('shared-auth-lib');
  });
});
