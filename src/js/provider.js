const jokeUrl = "https://api.chucknorris.io/jokes/random";

const getJoke = async () => {
    try {
        const resp = await fetch(jokeUrl);

        if (!resp.ok) throw 'No se puedo realizar la petición';

        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };
    } catch (err) {
        throw err;
    }
}

export { getJoke }