const fetchForm = document.querySelector(".fetchForm");
const btn = document.querySelector(".btn");
const urlword = "http://localhost:8000/searchByWords/";
const urlparam = "http://localhost:8000/searchByParam/";

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
    <ul class="menuList" id="searchResultList">
      <li>
        <a href="https://cookpad.com/search/${receivedDataArrayOfDishes[0].name}" target="_blank" rel="noopener noreferrer"><img src="img/img${receivedDataArrayOfDishes[0].img}.jpg" alt="${receivedDataArrayOfDishes[0].name}" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/search/${receivedDataArrayOfDishes[1].name}" target="_blank" rel="noopener noreferrer"><img src="img/img${receivedDataArrayOfDishes[1].img}.jpg" alt="${receivedDataArrayOfDishes[1].name}" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/search/${receivedDataArrayOfDishes[2].name}" target="_blank" rel="noopener noreferrer"><img src="img/img${receivedDataArrayOfDishes[2].img}.jpeg" alt="${receivedDataArrayOfDishes[2].name}" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/search/${receivedDataArrayOfDishes[3].name}" target="_blank" rel="noopener noreferrer"><img src="img/img${receivedDataArrayOfDishes[3].img}.jpg" alt="${receivedDataArrayOfDishes[3].name}" /></a>
      </li>
      <li>
        <a href="https://cookpad.com/search/${receivedDataArrayOfDishes[4].name}" target="_blank" rel="noopener noreferrer"><img src="img/img${receivedDataArrayOfDishes[4].img}.jpg" alt="${receivedDataArrayOfDishes[4].name}" /></a>
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
        <a href="https://cookpad.com/search/${test}" target="_blank" rel="noopener noreferrer"><img src="./recipeimage.webp" alt="料理の画像１" /></a>
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

function displayUserMood(receivedDataArrayOfParam) {
  const arrayOfReceivedDataArrayOfParam = [
    receivedDataArrayOfParam.sweetness,
    receivedDataArrayOfParam.astringency,
    receivedDataArrayOfParam.hot,
    receivedDataArrayOfParam.bitterness,
    receivedDataArrayOfParam.sour,
  ];
  let maxParam = Math.max(
    receivedDataArrayOfParam.sweetness,
    receivedDataArrayOfParam.astringency,
    receivedDataArrayOfParam.hot,
    receivedDataArrayOfParam.bitterness,
    receivedDataArrayOfParam.sour
  );
  let displayParam;
  let userMood = document.getElementById("userMood");

  let displayUserFeeling;
  //画像が存在すれば一度削除してからまた追加する
  if (
    (displayUserFeeling = document.getElementById("displayUserFeeling")) != null
  ) {
    displayUserFeeling.remove();
  }

  const htmlStr = `<div id="displayUserFeeling"><p>あなたはいま<span class="largest" id="largest"></span>キブン?</p><p><span id="keyword"></span>のおすすめ料理</p></div>`;
  function htmlStrToElement(htmlStr) {
    const dummyDiv = document.createElement("div");
    dummyDiv.innerHTML = htmlStr;
    return dummyDiv.firstElementChild;
  }
  const targetNewElement = htmlStrToElement(htmlStr);
  userMood.prepend(targetNewElement);
}

const postFetch = () => {
  const d = document.getElementById("search").value
  console.log(d);

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
  const toArray = (str) => {
    return []
  }
  const postData = {
    words: toArray(d)
  }

  fetch(urlword, {
    method: "POST",
    mode: 'cors',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      const dishes = data.data
      const param = data.param
      console.log(dishes);
      console.log(param);
      // console.log(data);
      drawingSearchedResult(dishes);
    })
    .catch((error) => {
      console.log(error);
    });
};

btn.addEventListener("click", postFetch, false);

const postFetch2 = () => {
  fetch(urlparam, {
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
}
// btn.addEventListener("click", displayUserMood, false);

