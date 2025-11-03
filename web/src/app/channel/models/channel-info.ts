
export interface ChannelInfo {
    name: string;
    topic: string;
    status: string;
    lastPublishDate: number;
    publish: number;
    receive: number;
    subscriberCount: number;
    hasInitialMessage: boolean;
}