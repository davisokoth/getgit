export class IPNotification {
    public static severity = {HIGH: 1, MEDIUM: 2, LOW: 3};
    title: string;
    message: string;
    code: string;
    style: string;
    _severity: number;

    constructor(title: string, message: string, severity?: number) {
        this.title = title;
        this.message = message;
        this._severity = severity;
        severity === 1 ?
            this.style = 'border-red-light bg-red-lightest text-red-dark' :
            this.style = 'border-green-light bg-green-lightest text-green-dark';
    }
}
