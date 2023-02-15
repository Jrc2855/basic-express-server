'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('API Server', () => {
  it('should handle invalid requests', async () => {
    const response = await request.get('/invalid');
    expect(response.status).toEqual(404);
  });

  it('handles the root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('What a fine day for Development');
  });

  it('handles \'/person\' route without query param correctly', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });

  it('handles \'/person\' route with query param correctly', async () => {
    const response = await request.get('/person').query({personName:'John'});

    expect(response.body.message).toEqual("SERVER ERROR: Please enter a name.");
  });
});