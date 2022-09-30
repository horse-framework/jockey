
export interface QueueInformation {
    name: string;
    topic: string;
    status: string;
    createdDate: number;
    type: string;
    manager: string;
    acknowledge: string;
    ackTimeout: number;
    msgTimeout: number;
    msgLimit: number;
    msgSizeLimit: number;
    delayBetweenMsgs: number;
    putBackDelay: number;
    autoDestroy: string;
}
