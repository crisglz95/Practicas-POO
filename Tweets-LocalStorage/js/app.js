const contenidoTweet = document.querySelector('#txTweet');
const listaTweets = document.querySelector('#lista-tweets');
eventListener();
CargarTweetsLocalStorage();

function eventListener() {
    document.querySelector('#formulario').addEventListener('submit', ObtenerFormulario);
    listaTweets.addEventListener('click', EliminarTweet);
}

function ObtenerFormulario(event) {
    event.preventDefault();

    if (contenidoTweet.value.trim() == '') return;

    const InstanciaTweets = new Tweets(contenidoTweet.value);
    InstanciaTweets.AgregarTweetDOM(listaTweets, true);
    contenidoTweet.value = '';

}

function EliminarTweet() {
    Tweets.EliminarTweetDOM(event);
}

function CargarTweetsLocalStorage() {
    const tweetsLS = ManipularLocalStorage.ObtenerLocalStorage();
    console.log(tweetsLS);
    for (let i = 0; i < tweetsLS.length; i++) {
        const InstanciaTweets = new Tweets(tweetsLS[i]);
        InstanciaTweets.AgregarTweetDOM(listaTweets, false);
    }
}