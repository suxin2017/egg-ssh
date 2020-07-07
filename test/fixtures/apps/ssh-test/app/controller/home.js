'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.ssh.autoConnectExecCommand('expr 1 + 1');
    this.ctx.body = result.stdout;
  }
}

module.exports = HomeController;
