
export interface QueueOptions {
    ack: string;
    ackTimeout: number;
    msgTimeout: number;
    type: string;
    msgLimit: number;
    msgSizeLimit: number;
    clientLimit: number;
    delayBetweenMsgs: number;
    putbackDelay: number;
    autoDestroy: string;
    autoQueueCreation: boolean;
    commitWhen: string;
}
