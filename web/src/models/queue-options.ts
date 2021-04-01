
export interface QueueOptions {
    ack: string;
    ackTimeout: number;
    msgTimeout: number;
    useMsgId: boolean;
    hideClientNames: boolean;
    status: string;
    msgLimit: number;
    msgSizeLimit: number;
    clientLimit: number;
    delayBetweenMsgs: number;
    putbackDelay: number;
    autoDestroy: string;
}