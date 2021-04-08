import { RouterBinding } from './router-binding';

export interface HorseRouter {
    name: string;
    enabled: boolean;
    method: string;
    bindings: RouterBinding[];
}