import { ServerNode } from './server-node';

export interface ServerOptions {
    name: string;
    type: string;
    nodeHosts: string[];
    queueLimit: number;
    routerLimit: number;
    nodes: ServerNode[];
}
