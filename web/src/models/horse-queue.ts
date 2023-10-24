import { QueueGraphData } from './queue-graph-data';
import { QueueInformation } from './queue-information';
import { QueueOptions } from './queue-options';
import { QueueStatistics } from './queue-statistics';

export interface QueueConsumer {
    type: string;
    name: string;
    id: string;
    subscriptionDate: number;
    currentlyProcessing: boolean;
    processingDeadline: number;
    consumes: number;
    acks: number;
    ackTimeouts: number;
}

export interface HorseQueue {
    stats: QueueStatistics;
    info: QueueInformation;
    graph?: QueueGraphData[];
    options?: QueueOptions;
    consumers: QueueConsumer[];
}

export interface HorseQueueSummary {
    name: string;
    type: string;
    status: string;
}