
export interface ChannelForm {
    name: string;
    topic: string;
    autoDestroy: boolean;
    sendLastMessageAsInitial: boolean;
    clientLimit: number;
    messageSizeLimit: number;
    autoDestroyIdleSeconds: number;
}