
export interface HorseClient {

    uniqueId: string;
    name: string;
    type: string;
    ip: string;
    isAuthenticated: boolean;
    connectedDate: number;
    protocol: string;
}