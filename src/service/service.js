    export const currencyService = async () => {
        const _apiBase = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
        const res = await fetch (_apiBase);
            if (!res.ok) {
                throw new Error (`Could not featch ${_apiBase}, status: ${res.status}`);
            }
            return await res.json();
    };