
export class QueueCreateModel {

    name: string | null = null;
    manager: string | null = null;
    commit: null | 'None' | 'AfterReceived' | 'AfterSaved' | 'AfterSent' | 'AfterAcknowledge' = null;
    ack: null | 'None' | 'JustRequest' | 'WaitForAcknowledge' = null;
    type: null | 'Push' | 'RoundRobin' | 'Pull' = null;
    autoDestroy: null | 'Disabled' | 'NoMessages' | 'NoConsumers' | 'Empty' = null;
    putBack: null | 'No' | 'Priority' | 'Regular' = null;

    /** In milliseconds */
    ackTimeout: number | null = null;

    /** In seconds */
    msgTimeout: number | null = null;

    /** In Milliseconds */
    putBackDelay: number | null = null;

    /** In Milliseconds */
    delay: number | null = null;

    clientLimit: number | null = null;
    msgLimit: number | null = null;
    msgSizeLimit: number | null = null;
}