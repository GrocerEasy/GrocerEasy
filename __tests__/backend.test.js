// import colors from 'colors';
const request = require('supertest');
const server = 'http://localhost:3000';

describe('test the /api route', () => {
  describe('get the test route', () => {
    describe('given the test succeeds', () => {
      it('should return a 200', async () => {
        // expect(true).toBe(true);

        await request(server).get('/api/test').expect(200);
      });
    });
  });
});
