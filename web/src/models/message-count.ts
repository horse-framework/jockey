
export interface CountRecord {

    /** Unix Time in seconds */
    u: number;

    /** Received */
    r: number;

    /** Sent */
    s: number;

    /** Respond */
    rs: number;

    /** Error */
    e: number;

    /** Delivered */
    d: number;

    /** Not Routed/Found */
    nr: number;

    /** Timeout (Request, Message or Acknowledge) */
    to: number;
}


export interface MessageCount {

    /** Name */
    n: string;

    /** Count Record Data */
    d: CountRecord[];

    /** Labels, generated in client side */
    labels?: string[];
}