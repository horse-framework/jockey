
export interface QueueInformation {
    name: string;
    topic: string;
    createdDate: number;
    type: string;
    handler: string;
    acknowledge: string;
    ackTimeout: number;
    msgTimeout: number;
    useMessageId: boolean;
    messageLimit: number;
    messageSizeLimit: number;
    delayBetweenMessages: number;
    putBackDelay: number;
    autoDestroy: string;
}
