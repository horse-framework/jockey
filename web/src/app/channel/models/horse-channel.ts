
export interface ChannelOptions {
    clientLimit: number;
    autoDestroy: boolean;
    messageSizeLimit: number;
    autoDestroyIdleSeconds: number;
}

export interface ChannelSubscriber {
    type: string;
    name: string;
    id: string;
    subscriptionDate: number;
}

export interface HorseChannel {

    name: string;
    topic: string;
    status: string;

    options?: ChannelOptions;
    hasInitialMessage: boolean;

    lastPublishDate: number;
    publish: number;
    receive: number;

    subscriberCount: number;
    subscribers: ChannelSubscriber[];
}