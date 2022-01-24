const jokeUrl = "https://api.chucknorris.io/jokes/random";

const getJoke = async () => {
    try {
        const resp = await fetch(jokeUrl);

        if (!resp.ok) throw 'No request was made';

        const { icon_url, value } = await resp.json();
        return { icon_url, value };
    } catch (err) {
        throw err;
    }
}

export { getJoke }