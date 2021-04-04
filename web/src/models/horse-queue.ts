import { QueueGraphData } from './queue-graph-data';
import { QueueInformation } from './queue-information';
import { QueueStatistics } from './queue-statistics';

export interface HorseQueue {
    stats: QueueStatistics;
    info: QueueInformation;
    graph?: QueueGraphData[];
}