
export interface QueueInformation {
    name: string;
    topic: string;
    createdDate: number;
    status: string;
    handler: string;
    acknowledge: string;
    ackTimeout: number;
    msgTimeout: number;
    useMessageId: boolean;
    hideClientNames: boolean;
    messageLimit: number;
    messageSizeLimit: number;
    delayBetweenMessages: number;
    putBackDelay: number;
    autoDestroy: string;
}