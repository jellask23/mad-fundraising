const container = document.getElementById("products-cards-container");
const valuesCards = [
  {
    image: "../img/image1.png",
    title: "title 1",
    content: "super content 1",
    originalPrice: "100",
    ourPrice: "50",
    status: "sold",
  },
  {
    image: "../img/image2.png",
    title: "title 2",
    content: "super content 2",
    originalPrice: "",
    ourPrice: "",
    status: "new",
  },
  {
    image: "../img/image-3.png",
    title: "title3",
    content: "blablablablbalbalbabla blablaba",
    originalPrice: "",
    ourPrice: "",
    status: "none",
  },
  {
    image: "../img/image-3.png",
    title: "title3",
    content: "blablablablbalbalbabla blablaba",
    originalPrice: "",
    ourPrice: "",
    status: "none",
  },
  {
    image: "../img/image-3.png",
    title: "title3",
    content: "blablablablbalbalbabla blablaba",
    originalPrice: "",
    ourPrice: "",
    status: "none",
  },
];

const books = [
  {
    image: "assets/books/pyre.jpg",
    title: "Pyre",
    content: "Book is in good condition.",
    originalPrice: 275,
    ourPrice: 200,
    status: "none",
  },
  {
    image: "assets/books/catch22.jpg",
    title: "Catch 22",
    content: "Book is in good condition.",
    originalPrice: 250,
    ourPrice: 200,
    status: "sold",
  },
  {
    image: "assets/books/oneday.jpg",
    title: "One Day",
    content: "Book is in good condition.",
    originalPrice: 450,
    ourPrice: 250,
    status: "new",
  },
  {
    image: "assets/books/princess.webp",
    title: "The Princess Diaries",
    content: "Book is in good condition.",
    originalPrice: 250,
    ourPrice: 150,
    status: "new",
  },
  {
    image: "assets/books/godofgoodthings.jpg",
    title: "The God of Small Things",
    content: "Book is in good condition.",
    originalPrice: 150,
    ourPrice: 100,
    status: "none",
  },
  {
    image: "assets/books/postmortem.webp",
    title: "Post Mortem",
    content: "Book is in good condition.",
    originalPrice: 600,
    ourPrice: 350,
    status: "sold",
  },
  {
    image: "assets/books/wanderers.jpg",
    title: "The Wanderers",
    content: "Book is in good condition.",
    originalPrice: 350,
    ourPrice: 250,
    status: "none",
  },
  {
    image: "assets/books/food-and-faith.webp",
    title: "Food and Faith",
    content: "Book is in good condition.",
    originalPrice: 500,
    ourPrice: 350,
    status: "none",
  },
  {
    image: "assets/books/sugarbread.jpg",
    title: "Sugarbread",
    content: "Book is in good condition.",
    originalPrice: 500,
    ourPrice: 250,
    status: "none",
  },
  {
    image: "assets/books/promisedlandjpg.jpg",
    title: "A Promised Land",
    content: "Book is in good condition.",
    originalPrice: 500,
    ourPrice: 350,
    status: "none",
  },
  {
    image: "assets/books/imafan.webp",
    title: "I'm a Fan",
    content: "Book is in good condition.",
    originalPrice: 600,
    ourPrice: 300,
    status: "none",
  },
  {
    image: "assets/books/the-fountainhead.webp",
    title: "The Fountainhead",
    content: "Book is in good condition.",
    originalPrice: 700,
    ourPrice: 100,
    status: "sold",
  },
  {
    image: "assets/books/taleoftwostories.jpg",
    title: "A Tale of Two Cities",
    content: "Book is in good condition.",
    originalPrice: 300,
    ourPrice: 100,
    status: "new",
  },
//   {
//     image: "assets/books/.jpg",
//     title: "Black Water Lilies",
//     content: "Book is in good condition.",
//     originalPrice: 600,
//     ourPrice: 300,
//     status: "none",
//   },
//   {
//     image: "assets/books/.jpg",
//     title: "The Lost Symbol",
//     content: "Book is in good condition.",
//     originalPrice: 700,
//     ourPrice: 350,
//     status: "none",
//   },
//   {
//     image: "assets/books/.jpg",
//     title: "When All is Said",
//     content: "Book is in good condition.",
//     originalPrice: 600,
//     ourPrice: 300,
//     status: "none",
//   },
];

const getStatus = () => {

}

const returnCards = (valuesCards) => {
  return (
    '<div class="products-cards">' +
    valuesCards
      .map(
        (valuesCard) => `
  <div class="product-card ${valuesCard.status}">
		<div class="product-badge">${valuesCard.status}</div>
		<div class="product-tumb">
			<img src="${valuesCard.image}" alt="">
		</div>
		<div class="product-details">
			<span class="product-catagory">FR Book sale</span>
			<h4><a href="">${valuesCard.title}</a></h4>
			<p>${valuesCard.content}</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>&#8377;${valuesCard.originalPrice}</small>&#8377;${valuesCard.ourPrice}</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>`
      )
      .join("") +
    "</div>"
  );
}

container.innerHTML = returnCards(books);
