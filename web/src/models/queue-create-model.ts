
export class QueueCreateModel {

    name: string;
    manager: string = null;
    commit: null | 'None' | 'AfterReceived' | 'AfterSaved' | 'AfterSent' | 'AfterAcknowledge' = null;
    ack: null | 'None' | 'JustRequest' | 'WaitForAcknowledge' = null;
    type: null | 'Push' | 'RoundRobin' | 'Pull' = null;
    autoDestroy: null | 'Disabled' | 'NoMessages' | 'NoConsumers' | 'Empty' = null;
    putBack: null | 'No' | 'Priority' | 'Regular' = null;

    /** In milliseconds */
    ackTimeout: number = null;

    /** In seconds */
    msgTimeout: number = null;

    /** In Milliseconds */
    putBackDelay: number = null;

    /** In Milliseconds */
    delay: number = null;

    clientLimit: number = null;
    msgLimit: number = null;
    msgSizeLimit: number = null;
}