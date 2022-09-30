
export class AddBindingModel {
    router: string;
    name: string;
    target: string;
    priority: number = 0;
    contentType: number = null;
    type: string;
    customBindingType: string;
    interaction: 'None' | 'Response';
    method: 'RoundRobin' | 'Distribute' | 'OnlyFirst' | 'Get' | 'Post' | 'Put' | 'Patch' | 'Delete';
}