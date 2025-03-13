const url = "https://quotes-api-self.vercel.app/quote";

const quot = document.getElementById("quote");

const author = document.getElementById("author");

const Quote_Text = document.getElementById("text");
const button = document.getElementById("btn");

const getQuote = async () => {
  console.log("getting quote ...");
  let response = await fetch(url);
  console.log(response);
  let quotes = await response.json();
  console.log(quotes);
  Quote_Text.innerHTML = `Quote`;
  quot.innerHTML = ` <q> ${quotes.quote} </q>`;
  author.innerHTML = `  Author : <em> ${quotes.author} </em>`;
};

button.addEventListener("click", getQuote);
