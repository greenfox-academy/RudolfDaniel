'use strict';

let more_gifs = document.querySelector('.thumbnail');


let firstgif = new XMLHttpRequest();
firstgif.open("GET", "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=jrr0XR1sMJCpdtiGSgc5FW7n6sAFzphS&limit=1");
firstgif.send( null );

firstgif.onreadystatechange = function() {
  if (firstgif.readyState === 4 && firstgif.status === 200) {
    let url = JSON.parse(firstgif.response);
//    console.log(url);
    letimage(url.data[0].images.original.url);
  }
};

let image = document.querySelector('.main_image');

function letimage(source_url) {
  let element = document.createElement('div');
  element.innerHTML = "<img src='" + source_url + "' width='710' height='450'>"
  image.appendChild(element);
}




let gifs = new XMLHttpRequest();
gifs.open("GET", "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=jrr0XR1sMJCpdtiGSgc5FW7n6sAFzphS&limit=16");
gifs.send( null );

gifs.onreadystatechange = function () {
  if (gifs.readyState === 4 && gifs.status === 200) {
    let urls = JSON.parse(gifs.response);
//    console.log(urls);
    for (var i = 0; i < urls.data.length; i++) {
      letimages(urls.data[i].images.original.url);
      
    }
    lalala();
  }
}

function letimages(source_url) {
  let element = document.createElement('li');
  element.innerHTML = "<button><img src='" + source_url + "' width='39' height='39'></button>"
  more_gifs.appendChild(element);
}

//console.log(more_gifs);


function lalala() {
  let list_of_gifs = document.querySelectorAll('li');
  console.log("most megy");
  console.log(list_of_gifs);
  for (var i = 0; i < list_of_gifs.length; i++) {
    console.log('lwlwl');
    list_of_gifs[i].addEventListener('click', function () {
      console.log(list_of_gifs[i]);
      image.setAttribute('src', list_of_gifs[i].getAttribute('src'))
    });
  }
}