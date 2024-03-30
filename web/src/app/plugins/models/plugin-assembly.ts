import { PluginInfo } from "./plugin-info";

export interface PluginAssembly {

    fullname: string;
    location: string;
    version: string;
    plugins: PluginInfo[];
}