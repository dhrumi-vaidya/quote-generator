const url = "https://quotes-api-self.vercel.app/quote";

const quot = document.getElementById("quote");

const author = document.getElementById("author");

const button = document.getElementById("btn");

const getQuote = async () => {
  console.log("getting quote ...");
  let response = await fetch(url);
  console.log(response);
  let quotes = await response.json();
  console.log(quotes);

  author.innerHTML = ` Author : ${quotes.author}`;

  quot.innerHTML = `Quote:  ${quotes.quote}`;
};

button.addEventListener("click", getQuote);
