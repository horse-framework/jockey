import { MessageCount } from "src/models/message-count";

export interface QueueGraphData {
    stream: MessageCount;
    store: MessageCount;
}