export class StringHelper {

    static format(template: string, parametersObject: any) {
        let result = template;
        for (let p in parametersObject) {

            result = result.replace('{' + p + '}', parametersObject[p]);
        }
        return result;
    }

    static isInt(n: any): boolean {
        return Number(n) === n && n % 1 === 0;
    }

    static isFloat(n: any): boolean {
        return Number(n) === n && n % 1 !== 0;
    }

    static isNumeric(value: any): boolean {
        return this.isInt(value) || this.isFloat(value);
    }
}