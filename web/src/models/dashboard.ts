
import { MessageGraphData } from './message-graph-data';
import { QueueGraphData } from './queue-graph-data';
import { QueueOptions } from './queue-options';
import { ServerOptions } from './server-options';
import { ServerStatistics } from './server-statistics';

export interface Dashboard {

    server: ServerStatistics;
    queueMessages: QueueGraphData;
    otherMessages: MessageGraphData;
    serverOptions: ServerOptions;
    queueOptions: QueueOptions;
    channelCount: number;
    queueCount: number;
    channelPublished: number;
    channelReceived: number;
    nodeState: string;
    mainNodeHost: string;
}
