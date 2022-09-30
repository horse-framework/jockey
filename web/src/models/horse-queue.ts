import { QueueGraphData } from './queue-graph-data';
import { QueueInformation } from './queue-information';
import { QueueOptions } from './queue-options';
import { QueueStatistics } from './queue-statistics';

export interface HorseQueue {
    stats: QueueStatistics;
    info: QueueInformation;
    graph?: QueueGraphData[];
    options?: QueueOptions;
}

export interface HorseQueueSummary {
    name: string;
    type: string;
    status: string;
}