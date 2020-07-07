import NodeSSH, {ConfigGiven, ExecOptions} from 'node-ssh';
import SSH from "node-ssh";

interface EggSSH extends NodeSSH {

    constructor(initConfig: ConfigGiven)

    autoConnect(config?: ConfigGiven): EggSSH

    autoConnectExecCommand(givenCommand: string, options?: ExecOptions, config?: ConfigGiven): Promise<SSH.ExecResult>
}

declare module 'egg' {

    // extend app
    interface Application {
        ssh: EggSSH;
    }

    // extend your config
    interface EggAppConfig {
        ssh: NodeSSH.ConfigGiven;
    }
}