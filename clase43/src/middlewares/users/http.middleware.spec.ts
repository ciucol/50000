import { HttpMiddleware } from './http.middleware';

describe('UsersMiddleware', () => {
  it('should be defined', () => {
    expect(new HttpMiddleware()).toBeDefined();
  });
});
