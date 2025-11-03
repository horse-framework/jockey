import { MessageCount } from "../../../models/message-count";

export interface QueueGraphData {
    stream: MessageCount;
    store: MessageCount;
    name: string;
}