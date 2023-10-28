
export interface QueueStatistics {
    name: string;
    consumers: number;
    storedMsgs: number;
    storedPrioMsgs: number;
    processingMsgs: number;
    ackPendingMsgs: number;
    totalReceived: number;
    totalSent: number;
    totalDelivered: number;
    totalAck: number;
    totalNack: number;
    totalUnack: number;
    totalTimedout: number;
    totalErrors: number;
    lastReceived: number;
    lastSent: number;
}