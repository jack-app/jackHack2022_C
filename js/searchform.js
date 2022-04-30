/*
const fetchForm = document.querySelector(".fetchForm");

const btn = document.querySelector(".btn");

const url = "https://intense-chamber-73486.herokuapp.com/mock/";
const url2 = "../sample.json";
*/
/*
console.log(fetchForm);

btn.addEventListener("click", postFetch, false);
*/
/*
async function formFetch() {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      data: { sweetness: 0, astringency: 0, hot: 0, bittreness: 0, sour: 0 },
    },
  });
  const data = await response.json();
  console.log(response);
}

formFetch();
*/

const fetchForm = document.querySelector(".fetchForm");
const btn = document.querySelector(".btn");
const url = "https://intense-chamber-73486.herokuapp.com/mock/";
const url2 = "../sample.json";
let urlData;
//console.log(fetchForm);
const postFetch = () => {
  let formData = new FormData(fetchForm);
  for (let value of formData.entries()) {
    console.log(value);
  }
  /*
  console.log(formData);
*/
  const test = 7161963;
  /*console.log(`"${test}"`);
  console.log(
    `<a href="https://cookpad.com/recipe/${test}"><img src="" alt="料理の画像１" /></a>
    <a href=""><img src="" alt="料理の画像２" /></a>
    <a href=""><img src="" alt="料理の画像３" /></a>
    <a href=""><img src="" alt="料理の画像４" /></a>
    <a href=""><img src="" alt="料理の画像５" /></a>`
  );
  */
  function drawingSearchedResult() {
    let searchResult = document.getElementById("searchResult");
    const htmlStr = `
      <li>
        <a href="https://cookpad.com/recipe/${test}" target="_blank" rel="noopener noreferrer"><img src="" alt="料理の画像１" /></a>
        <a href="https://cookpad.com/recipe/${test}" target="_blank" rel="noopener noreferrer"><img src="" alt="料理の画像２" /></a>
        <a href="https://cookpad.com/recipe/${test}" target="_blank" rel="noopener noreferrer"><img src="" alt="料理の画像３" /></a>
        <a href="https://cookpad.com/recipe/${test}" target="_blank" rel="noopener noreferrer"><img src="" alt="料理の画像４" /></a>
        <a href="https://cookpad.com/recipe/${test}" target="_blank" rel="noopener noreferrer"><img src="" alt="料理の画像５" /></a>
      </li>
      `;
    function htmlStrToElement(htmlStr) {
      const dummyDiv = document.createElement("div");
      dummyDiv.innerHTML = htmlStr;
      return dummyDiv.firstElementChild;
    }

    const targetNewElement = htmlStrToElement(htmlStr);
    searchResult.prepend(targetNewElement);
  }

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        console.log("error!");
      }
      console.log("ok!");
      console.log(response);
      return response.json();
    })
    .then((data) => {
      urlData = JSON.parse(data);
      console.log(data);
      console.log(urlData.dishes);
      drawingSearchedResult();
    })
    .catch((error) => {
      console.log(error);
    });
};

btn.addEventListener("click", postFetch, false);
/*
fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => response.json())
  .then((data) => {
    for (const { key, value } of data) {
      console.log(key + ":" + value);
    }
  });
*/
