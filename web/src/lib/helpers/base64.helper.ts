export class Base64Helper {

    public static decode(encoded: string): string {
        const base64 = encoded.replace(/\-/g, '+').replace(/\_/g, '/');

        return decodeURIComponent(
            atob(base64)
                .split('')
                .map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );
    }

}