
export interface ClientSubscription {
    name: string;
    subscribedAt: number;
}

export interface ClientStats {

    cacheGet: number;
    cacheSet: number;
    channelPublish: number;
    routerPublish: number;
    directReceive: number;
    directSend: number;
    queuePush: number;
}

export interface HorseClientDetail {

    id: string;
    name: string;
    type: string;
    connectedDate: number;
    stats: ClientStats
    queues: ClientSubscription[];
    channels: ClientSubscription[];
}