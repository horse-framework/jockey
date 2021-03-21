
export interface IResponse {
    statusCode: number;
    statusMessage: string;
    data?: any;
    error?: any;
    success: boolean;

    ok(): boolean;
    getErrorMessage(): string;
}

export class ApiResponse implements IResponse {
    statusCode: number;
    statusMessage: string;
    data: any;
    error: any;
    success: boolean;

    ok(): boolean {
        return this.success && this.data;
    }

    getErrorMessage(): string {
        if (this.statusMessage)
            return this.statusMessage;

        return null;
    }

}