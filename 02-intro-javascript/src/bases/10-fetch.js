const apiKey = 'hQr6QS9q8rbXL4Nk3QnLfN3StGz4H2hr';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
  .then( (resp) => resp.json())
  .then( ({data}) => {

    const {url} =data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)
  })
  .catch(console.error);