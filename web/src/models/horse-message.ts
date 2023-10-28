
export interface MessageHeader {
    name: string;
    value: string;
}

export interface HorseMessage {

    id: string;
    type: string;
    source: string;
    target: string;
    priority: boolean;
    content: string;
    contentType: number;
    waitForResponse: boolean;
    headers: MessageHeader[];

    contentObj?: any;
}