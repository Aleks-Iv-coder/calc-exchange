    export const currencyService = async () => {
        const _url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
        const res = await fetch (_url);
            if (!res.ok) {
                throw new Error (`Could not featch ${_url}, status: ${res.status}`);
            } 
        const resJsn = await res.json();
        return _rateUsd(resJsn);
    };

    const _rateUsd = (res) => {
        return res.find((item) => item.ccy === 'USD');
    }