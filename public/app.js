const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url)
  request.addEventListener('load', callback);
  request.send();
}

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  console.log(beers);
  populateList(beers);
}

const populateList = function(beers){
  let ulTag = document.getElementById('beer-list');
  beers.forEach(function(beer){
    let li = document.createElement('li');
    let img = document.createElement('img')
    li.innerText = beer.name;
    img.src = beer.image_url;
    ulTag.appendChild(li);
    ulTag.appendChild(img);
  });
}

const gimmeTheT = function(){
  clearBox();
  let divT = document.getElementById('goodbadbeer');
  let bigJuicyText = document.createElement('p');
  let bigJuicyImg = document.createElement('img');
  bigJuicyText.innerText = "THE ONE TRUE BEER";
  bigJuicyImg.src = 'https://tennentcaledonian.com/wp-content/uploads/2018/04/tennentspint.png'
  bigJuicyImg.id = "Timg"
  bigJuicyImg.width = `250px`
  bigJuicyImg.height = `400px`
  divT.appendChild(bigJuicyText);
  divT.appendChild(bigJuicyImg);
}

const clearBox = function(elementID){
  document.getElementById('badbeer').innerHTML = "";
}


var app = function(){

  const url = 'https://api.punkapi.com/v2/beers'

  const beers = document.getElementById('beer-list');
  makeRequest(url, requestComplete);

  const tButton = document.getElementById('fix-beer');
  tButton.addEventListener('click', function(){
    gimmeTheT();
  })
}

window.addEventListener('load', app);
