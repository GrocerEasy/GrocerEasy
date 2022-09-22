import colors from 'colors';
import supertest from 'supertest';


describe('test the /api route', () => {
  describe('get the /api/test route', () => {
    describe('given the test fails', () => {
      it('should return a 404'.green, async () => {
        // expect(true).toBe(true);

        await supertest().get('/api/test').expect(200);
      });
    });
  });
});
