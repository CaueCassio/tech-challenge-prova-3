const request = require('supertest');
const app = require('../src/app');

describe('Teste da API', () => {
  it('Deve retornar status 200 na rota raiz', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('API funcionando');
  });
});