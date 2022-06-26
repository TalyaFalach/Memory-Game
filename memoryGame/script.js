const myContainer = document.getElementById("myContainer");
const card = document.getElementById("card");
const cardbody = document.getElementById("cardbody");
let clickCounter = 0;
let shuffleDeck;
let openCards = [];
const myDeck = [
  {
    img: "pink Flower",
    url: "https://images.freeimages.com/images/large-previews/cbc/spring-1374405.jpg",
    back: "./images/backcards.png",
    id: 0,
  },
  {
    img: "pink Flower",
    url: "https://images.freeimages.com/images/large-previews/cbc/spring-1374405.jpg",
    back: "./images/backcards.png",
    id: 1,
  },
  {
    img: "zebra",
    url: "https://cdn.pixabay.com/photo/2022/05/17/17/55/zebra-7203335_1280.jpg",
    back: "./images/backcards.png",
    id: 2,
  },
  {
    img: "zebra",
    url: "https://cdn.pixabay.com/photo/2022/05/17/17/55/zebra-7203335_1280.jpg",
    back: "./images/backcards.png",
    id: 3,
  },
  {
    img: "cat",
    url: "https://cdn.pixabay.com/photo/2022/05/17/04/39/cat-7201639_1280.jpg",
    back: "./images/backcards.png",
    id: 4,
  },
  {
    img: "cat",
    url: "https://cdn.pixabay.com/photo/2022/05/17/04/39/cat-7201639_1280.jpg",
    back: "./images/backcards.png",
    id: 5,
  },
  {
    img: "bird",
    url: "https://cdn.pixabay.com/photo/2022/03/18/19/09/blue-throat-7077261_1280.jpg",
    back: "./images/backcards.png",
    id: 6,
  },
  {
    img: "bird",
    url: "https://cdn.pixabay.com/photo/2022/03/18/19/09/blue-throat-7077261_1280.jpg",
    back: "./images/backcards.png",
    id: 7,
  },
  {
    img: "snow",
    url: "https://cdn.pixabay.com/photo/2021/12/03/08/50/nature-6842159_1280.jpg",
    back: "./images/backcards.png",
    id: 8,
  },
  {
    img: "snow",
    url: "https://cdn.pixabay.com/photo/2021/12/03/08/50/nature-6842159_1280.jpg",
    back: "./images/backcards.png",
    id: 9,
  },
  {
    img: "sunset",
    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    back: "./images/backcards.png",
    id: 10,
  },
  {
    img: "sunset",
    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    back: "./images/backcards.png",
    id: 11,
  },
  {
    img: "road",
    url: "https://cdn.pixabay.com/photo/2021/10/27/03/37/road-6745746_1280.jpg",
    back: "./images/backcards.png",
    id: 12,
  },
  {
    img: "road",
    url: "https://cdn.pixabay.com/photo/2021/10/27/03/37/road-6745746_1280.jpg",
    back: "./images/backcards.png",
    id: 13,
  },
  {
    img: "sea",
    url: "https://cdn.pixabay.com/photo/2021/08/08/10/34/ocean-6530523_1280.jpg",
    back: "./images/backcards.png",
    id: 14,
  },
  {
    img: "sea",
    url: "https://cdn.pixabay.com/photo/2021/08/08/10/34/ocean-6530523_1280.jpg",
    back: "./images/backcards.png",
    id: 15,
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function cardclicked(event) {
  if (openCards.length == 2) {
    return;
  }
  console.log(event.target);
  const cardId = event.target.id;
  const url = shuffleDeck[cardId].url;
  event.target.src = url;

  openCards.push(event.target);
  console.log(openCards);
  console.log(url);
  if (openCards.length == 2) {
    checkCards();
  }
}

function resetCards() {
  openCards.forEach((c) => (c.src = myDeck[0].back));
  openCards = [];
}

function checkCards() {
  const card1Id = openCards[0].id;
  const card2Id = openCards[1].id;
  const card1Name = myDeck[card1Id].img;
  const card2Name = myDeck[card2Id].img;
  if (card1Name == card2Name && card1Id != card2Id) {
    openCards = [];
    alert("Great! ");
  } else {
    setTimeout(resetCards, 1000);
  }
}

function startNewGame() {
  shuffleDeck = shuffle(myDeck);
  myContainer.innerHTML = ``;
  for (let i = 0; i < shuffleDeck.length; i++) {
    myContainer.innerHTML += `<div class="card">
   <img src = "${shuffleDeck[i].back}"
   onclick = "cardclicked(event)"
   id = "${shuffleDeck[i].id}"
   class = "card-img-top"
   alt = "" >
   <div class="card-body" id="cardbody">   
     </div>`;
  }
}
