
export class CreateRouterModel {
    name: string;
    method: 'RoundRobin' | 'Distribute' | 'OnlyFirst';
}