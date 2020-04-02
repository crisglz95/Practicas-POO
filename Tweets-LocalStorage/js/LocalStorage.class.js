class ManipularLocalStorage {
    static ArrayTweets = [];

    static AgregarTweetLocalStorage(contenidoTweet) {
        this.ArrayTweets = this.ObtenerLocalStorage();

        this.ArrayTweets.push(contenidoTweet);

        localStorage.setItem('tweets', JSON.stringify(this.ArrayTweets));
    }

    static ObtenerLocalStorage() {
        let tweetsObtenidosLocalStorage = [];
        if (localStorage.getItem('tweets') === null) {
            return tweetsObtenidosLocalStorage;
        }
        return JSON.parse(localStorage.getItem('tweets'));
    }

    static EliminarTweetLocalStorage(contenido) {
        let tweetsLS = this.ObtenerLocalStorage();
        let arrayNuevoTweetLS = [];

        for (let i = 0; i < tweetsLS.length; i++) {
            if (contenido !== tweetsLS[i]) {
                arrayNuevoTweetLS.push(tweetsLS[i]);
            }
        }

        // localStorage.removeItem('tweets');
        localStorage.setItem('tweets', JSON.stringify(arrayNuevoTweetLS));
    }
}