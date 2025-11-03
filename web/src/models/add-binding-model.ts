
export class AddBindingModel {
    router: string | undefined;
    name: string | undefined;
    target: string | undefined;
    priority: number = 0;
    contentType: number | null = null;
    type: string | undefined;
    customBindingType: string | undefined;
    interaction: 'None' | 'Response' | undefined;
    method: 'RoundRobin' | 'Distribute' | 'OnlyFirst' | 'Get' | 'Post' | 'Put' | 'Patch' | 'Delete' | undefined;
}