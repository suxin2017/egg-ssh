# egg-ssh

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-ssh.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-ssh
[travis-image]: https://img.shields.io/travis/eggjs/egg-ssh.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-ssh
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-ssh.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-ssh?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-ssh.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-ssh
[snyk-image]: https://snyk.io/test/npm/egg-ssh/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-ssh
[download-image]: https://img.shields.io/npm/dm/egg-ssh.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-ssh

一款基于node-ssh,它基于ssh2的egg链接ssh的插件。
主要api参考[node-ssh](https://www.npmjs.com/package/node-ssh)

拓展API

```

class EggSSH extends NodeSSH{
    
    constructor(config:Config)

    // 自动连接
    autoConnect(config?:Config):Promise<EggSSH>
    
    // 自动连接并执行命令
    autoConnectExecCommand(givenCommand: string,
        options?:SSHExecCommandOptions,
        config?:Config):Promise<SSHExecCommandResponse>
}

```

## Install

```bash
$ npm i egg-ssh --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.ssh = {
  enable: true,
  package: 'egg-ssh',
};
```

## Configuration

链接配置参考
[node-ssh](https://www.npmjs.com/package/node-ssh)

```js
// {app_root}/config/config.default.js
exports.ssh =  {
    host: '127.0.0.1',
    port: '22',
    username: 'root',
    password: 'root',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

ssh 会挂载到app上，可以通过this.app.ssh进行api调用
```js
// 例如
// app/controller/home.js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.ssh.autoConnectExecCommand('expr 1 + 1');
    this.ctx.body = result.stdout;
  }
}

module.exports = HomeController;

```

## Questions & Suggestions

Please open an issue [here](https://github.com/AngelName/egg-ssh/issues).

## License

[MIT](LICENSE)
