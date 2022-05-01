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
//let urlData;
const test = 7161963;

function drawingSearchedResult(receivedDataArrayOfDishes) {
  let searchResult = document.getElementById("searchResult");
  let searchResultList;
  //画像が存在すれば一度削除してからまた追加する
  if (
    (searchResultList = document.getElementById("searchResultList")) != null
  ) {
    searchResultList.remove();
  }
  const htmlStr = `
    <ul id="searchResultList">
      <li>
        <a href="https://cookpad.com/recipe/${receivedDataArrayOfDishes[0].name}" target="_blank" rel="noopener noreferrer"><img src="${receivedDataArrayOfDishes[0].img}" alt="料理の画像１" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/recipe/${receivedDataArrayOfDishes[1].name}" target="_blank" rel="noopener noreferrer"><img src="${receivedDataArrayOfDishes[1].img}" alt="料理の画像２" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/recipe/${receivedDataArrayOfDishes[2].name}" target="_blank" rel="noopener noreferrer"><img src="${receivedDataArrayOfDishes[2].img}" alt="料理の画像３" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/recipe/${receivedDataArrayOfDishes[3].name}" target="_blank" rel="noopener noreferrer"><img src="${receivedDataArrayOfDishes[3].img}" alt="料理の画像４" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/recipe/${receivedDataArrayOfDishes[4].name}" target="_blank" rel="noopener noreferrer"><img src="${receivedDataArrayOfDishes[4].img}" alt="料理の画像５" /></a>
      </li>
    </ul>
    `;
  function htmlStrToElement(htmlStr) {
    const dummyDiv = document.createElement("div");
    dummyDiv.innerHTML = htmlStr;
    return dummyDiv.firstElementChild;
  }

  const targetNewElement = htmlStrToElement(htmlStr);
  searchResult.prepend(targetNewElement);
}

function drawingSearchedResultdemo(receivedDataArrayOfDishes) {
  let searchResult = document.getElementById("searchResult");
  let searchResultList;
  //画像が存在すれば一度削除してからまた追加する
  if (
    (searchResultList = document.getElementById("searchResultList")) != null
  ) {
    searchResultList.remove();
  }
  const htmlStr = `
    <ul class="menuList" id="searchResultList">
      <li>
        <a href="https://cookpad.com/recipe/${test}" target="_blank" rel="noopener noreferrer"><img src="./recipeimage.webp" alt="料理の画像１" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/recipe/${test}" target="_blank" rel="noopener noreferrer"><img src="./recipeimage.webp" alt="料理の画像２" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/recipe/${test}" target="_blank" rel="noopener noreferrer"><img src="./recipeimage.webp" alt="料理の画像３" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/recipe/${test}" target="_blank" rel="noopener noreferrer"><img src="./recipeimage.webp" alt="料理の画像４" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/recipe/${test}" target="_blank" rel="noopener noreferrer"><img src="./recipeimage.webp" alt="料理の画像５" /></a>
      </li>
    </ul>
    `;
  function htmlStrToElement(htmlStr) {
    const dummyDiv = document.createElement("div");
    dummyDiv.innerHTML = htmlStr;
    return dummyDiv.firstElementChild;
  }

  const targetNewElement = htmlStrToElement(htmlStr);
  searchResult.prepend(targetNewElement);
}

const postFetch = () => {
  let formData = new FormData(fetchForm);
  for (let value of formData.entries()) {
    console.log(value);
  }

  /*
  console.log(formData);
*/

  /*console.log(`"${test}"`);
  console.log(
    `<a href="https://cookpad.com/recipe/${test}"><img src="" alt="料理の画像１" /></a>
    <a href=""><img src="" alt="料理の画像２" /></a>
    <a href=""><img src="" alt="料理の画像３" /></a>
    <a href=""><img src="" alt="料理の画像４" /></a>
    <a href=""><img src="" alt="料理の画像５" /></a>`
  );
  */

  function displayUserMood(receivedDataArrayOfParam) {
    let userMood = document.getElementById("userMood");
    const htmlStr = `<p>あなたは今...... ${test} キブン！</P>`;
    function htmlStrToElement(htmlStr) {
      const dummyDiv = document.createElement("div");
      dummyDiv.innerHTML = htmlStr;
      return dummyDiv.firstElementChild;
    }
    const targetNewElement = htmlStrToElement(htmlStr);
    userMood.prepend(targetNewElement);
  }

  function nextSelectionUserDo() {
    let nextSelection = document.getElementById("nextSelection");
    const htmlStr = `<p>もっと...... ${test} ${test} ${test} ${test} ${test} のがいい！</P>`;
    function htmlStrToElement(htmlStr) {
      const dummyDiv = document.createElement("div");
      dummyDiv.innerHTML = htmlStr;
      return dummyDiv.firstElementChild;
    }
    const targetNewElement = htmlStrToElement(htmlStr);
    nextSelection.prepend(targetNewElement);
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
      let receivedDataArrayOfDishes = JSON.parse(data).dishes;
      let receivedDataArrayOfParam = JSON.parse(data).param;
      console.log(data);
      console.log(receivedDataArrayOfDishes);
      drawingSearchedResult(receivedDataArrayOfDishes);
    })
    .catch((error) => {
      console.log(error);
    });
};

btn.addEventListener("click", drawingSearchedResultdemo, false);

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
