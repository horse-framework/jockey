import { CountRecord } from "../../../models/message-count";

export interface QueueGraphData {
    stream: CountRecord[];
    store: CountRecord[];
    name: string;
}