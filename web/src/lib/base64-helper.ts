export class Base64Helper {

    private static _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    public static encode(plain: string): string {
        return btoa(encodeURIComponent(plain).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16))
        }))
    }

    public static decode(encoded: string): string {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(encoded).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    public static readBearer(token: string): string {
        let sp = token.split('.');
        if (sp.length != 3)
            return null;

        let decoded = this.decode(sp[1]);
        return decoded;
    }

    public static encryptx(plain: string, full: boolean = false): string {
        let n1 = this.randomizeInteger(10, 40);
        let n2 = this.randomizeInteger(10, 99);
        let start = this._keyStr.substr(n1, 1);

        let n3 = this.randomizeInteger(10, 40);
        let n4 = this.randomizeInteger(10, 99);
        let end = this._keyStr.substr(n3, 1);

        let str;
        if (full)
            str = plain;
        else
            str = plain.length > 15 ? plain.substr(0, 15) : plain;

        return start + n2 + this.encode(str).replace('=', '') + end + n4;
    }

    public static decryptx(cipher: string): string {
        if (cipher.length < 7)
            return null;

        let encoded = cipher.substr(3, cipher.length - 6);
        if (encoded.length % 2 == 1)
            encoded += '=';

        return this.decode(encoded);

    }

    private static randomizeInteger(min: number, max: number): number {
        if (max == null) {
            max = (min == null ? Number.MAX_SAFE_INTEGER : min);
            min = 0;
        }

        min = Math.ceil(min);  // inclusive min
        max = Math.floor(max); // exclusive max

        if (min > max - 1) {
            throw new Error("Incorrect arguments.");
        }

        return min + Math.floor((max - min) * Math.random());
    }
}