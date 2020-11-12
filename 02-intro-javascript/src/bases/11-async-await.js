const getImagenAsync = async () => {

  try {
    const apiKey = 'hQr6QS9q8rbXL4Nk3QnLfN3StGz4H2hr';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
}

getImagenAsync();