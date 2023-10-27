import { QueueOptions } from '../app/queue/models/queue-options';
import { CountRecord } from './message-count';
import { ServerOptions } from './server-options';
import { ServerStatistics } from './server-statistics';

export interface Dashboard {

    server: ServerStatistics;
    serverOptions: ServerOptions;
    queueOptions: QueueOptions;
    channelCount: number;
    queueCount: number;
    nodeState: string;
    mainNodeHost: string;

    channels: CountRecord;
    queues: CountRecord;
    queueStore: CountRecord;
}
