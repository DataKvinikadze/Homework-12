let paragraph = document.querySelector("#quote");
let span = document.querySelector("#author");

let url = `https://api.quotable.io/random`;

function fetchData(url) {
  fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((content) => {
      console.log(content);
      paragraph.textContent = `"${content.content}"`;
      span.textContent = `- ${content.author}`;
    });
}

fetchData(url);
