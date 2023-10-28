
export interface CacheInfo {
    key: string;
    expiration: number;
    warningDate: number;
    warnCount: number;
    tags: string[];
    value?: string;
}