const assert = require('assert');
const app = require('../../src/app');

describe('\'api\' service', () => {
  it('registered the service', () => {
    const service = app.service('api');

    assert.ok(service, 'Registered the service');
  });
});
