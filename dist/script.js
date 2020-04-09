//this function is called when you press on the "next question" button in html 
function nextQuestion() {
  //returns a collection of elements with .questions class (similar to array) 
  var questions = document.querySelectorAll(".questions");
 
  for (var i = 0; i < questions.length; i++) {
    // if the element is displayed, we hide it and display the next element
    if (questions[i].style.display != "none") {
      questions[i].style.display = "none";
      questions[i + 1].style.display = "block";
      break;
    }
  }
}

//this function displays a random image and description from an array of objects. It gets called when the "Tell me my spirit animal!" button is pressed (in html) 
function showResults() {
  var results = document.getElementById("results");
  document.getElementById("Q5").style.display = "none";
  results.style.display = "block";
  results.innerHTML = '<h2>And your spirit guide is...</h2> <p>'+myImg.about+'</p> <img width="50%" src="'+myImg.image+'">';
}

//array of objects containing all the possible images and descriptions with the urls 
var imgArray = [
  { about: 'Bobby! You are easy going and confident, everyone enjoys your presence!', image: 'https://img.discogs.com/r8X1Xj_UnxW6Fuc68Vv-OKuHxjk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-4167235-1550209250-1728.jpeg.jpg' }, 
  { about: 'Daria! You are smart and self assured, but you can be a tad cynical, sometimes even ruthless.', image: 'https://videocdn-sbs.akamaized.net/u/video/SBS/managed/images/2018/04/18/1203654723737_04180404_image164611_full.jpg' }, 
  { about: 'Sloth! People think you sleep all day, but actually you only sleep for 10 hours a day! You are loving and affectionate.', image: 'https://i.pinimg.com/originals/d0/a6/46/d0a646378b0e0dd2c2935b96928e5dad.jpg' },
  { about: 'The Dude! Easy-going and affable, you are all about having a good time! The Dude abides!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb4vAo77tWffizxN4OXHncy9eAu-Eo_PSf50uCrvBoTxLhzm2g&usqp=CAU' },
  { about: 'Rocket Raccoon! You are strong, funny, and you love your friends!', image: 'https://images.immediate.co.uk/production/volatile/sites/3/2019/05/EBC1840_v228.1047-eb60675.jpg?quality=90&resize=768,574' },
{ about: 'Kung Fu Panda! You are cute, and you love to eat!', image: 'https://www.ecopetit.cat/wpic/mpic/36-360285_kung-fu-panda.jpg' },
{ about: 'Clippy! You are dependable and thoughtful, you are always trying to help!', image: 'https://cdn.vox-cdn.com/thumbor/u2sz9XA0Sa6dYlJPvy4LA_85WMY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15979182/clippy.jpg' },
{ about: 'Speed Racer! You are an adrenaline junkie with a competitive nature, but a soft spot for your friends and family!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRj87lTd5w5_e6sjUW4dca52fVtUJwq4NNJ4czcqZl-fhJeuSBh&usqp=CAU' }
  ]

//this functions returns a randon image and a random description (random index value from the array) 
function imgRandom() {
 var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
 return rand;
}
//this variable is referenced in the showResults() function 
myImg = imgRandom();