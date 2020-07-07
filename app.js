'use strict';

const NodeSSH = require('node-ssh');

class EggSSH extends NodeSSH {

  constructor(initConfig) {
    super();
    this.config = initConfig;
  }

  async autoConnect(config) {
    if (!super.isConnected()) {
      await super.connect({ ...this.config, ...config });
    }
    return this;
  }

  async autoConnectExecCommand(givenCommand, options, config) {
    await this.autoConnect(config);
    return super.execCommand(givenCommand, options);
  }
}


module.exports = app => {
  app.beforeStart(async () => {
    const { ssh: sshConfig = {} } = app.config;
    app.coreLogger.info('ssh connect start create');
    app.ssh = new EggSSH(sshConfig);
  });
};
