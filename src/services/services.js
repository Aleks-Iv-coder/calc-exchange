export default class CurrencyService {

    constructor() {
        this._apiBase = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    }
    

    async getCurrenceRate() {
        const res = await fetch(`${this._apiBase}`);
    
        if (!res.ok) {
            throw new Error (`Could not featch ${this._apiBase}, status: ${res.status}`);
        }
        return await res.json();
    };
}
