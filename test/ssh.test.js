'use strict';

const mock = require('egg-mock');

describe('test/ssh.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/ssh-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, ssh')
      .expect(200);
  });
});
