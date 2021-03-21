
export interface SocketMessage {
    type: string;
    model: any;
}

export class ModelSerializer {

    static serialize(type: string, model: any): string {
        return type + '|' + JSON.stringify(model);
    }

    static deserialize(message: string): SocketMessage {
        let i = message.indexOf('|');
        if (i < 0)
            return null;

        let type = message.substr(0, i);
        var m = JSON.parse(message.substr(i + 1));
        return {
            type: type,
            model: m
        }
    }

}