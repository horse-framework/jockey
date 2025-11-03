
export interface QueueMessageHeader {
    name: string;
    value: string;
}

export interface QueueMessage {

    id: string;
    source: string;
    contentType: number;
    priority: boolean;
    message: string;
    headers: QueueMessageHeader[];
    createdDate: number;
    deadline: number;
    isSaved: boolean;
    sendCount: number;
    deliveryCount: number;
    messageObj: any;
}

export class QueuePushMessage {
    queue: string | undefined;
    id: string | undefined;
    contentType: number | undefined;
    priority: boolean | undefined;
    headers: QueueMessageHeader[] | undefined;
    message: string | undefined;
}