
export interface RequestProgress {
    progress: (percentage: number) => void;
    canceled: boolean;
}
