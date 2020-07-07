'use strict';

const mock = require('egg-mock');
const assert = require('power-assert');

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

  it('Get / expect 2', () => {
    return app.httpRequest().get('/').expect(200)
      .expect('2');
  });

  it('should ssh exec expr and result equal 2', async () => {
    const result = await app.ssh.autoConnectExecCommand('expr 1 + 1');
    assert(result.stdout === '2');
  });

  it('should ssh disposed', async () => {
    app.ssh.dispose();
    assert(app.ssh.isConnected() === false);
  });

  it('should ssh is connected', async () => {
    await app.ssh.autoConnect();
    assert(app.ssh.isConnected() === true);
  });

});
