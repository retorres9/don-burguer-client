import { LoginPipe } from './login/login.pipe';

describe('LoginPipe', () => {
  it('create an instance', () => {
    const pipe = new LoginPipe();
    expect(pipe).toBeTruthy();
  });
});
