export interface QueueGraphData {
    date: number;
    stored: number;
    storedPrio: number;
    received: number;
    sent: number;
    delivery: number;
    ack: number;
    nack: number;
    unack: number;
    timeout: number;
    processing: number;
    pending: number;
    error: number;
}
