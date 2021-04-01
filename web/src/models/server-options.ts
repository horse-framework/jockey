import { ServerNode } from './server-node';

export interface ServerOptions {
    name: string;
    type: string;
    nodeHosts: string[];
    autoQueueCreation: boolean;
    queueLimit: number;
    routerLimit: number;
    nodes: ServerNode[];
}