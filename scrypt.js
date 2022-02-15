"use strict";

const searchElement = document.querySelector(".search");
const resultsElement = document.querySelector(".result");

searchElement.addEventListener("keyup", async function (e) {
  try {
    const rmCharacter = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${e.target.value}`
    );
    const rmCharacterData = await rmCharacter.json();
    renderChar(rmCharacterData);
  } catch (err) {
    console.error(`Something was wrong! ${err}`);
  }
});

const renderChar = function (data) {
  console.log(data);
  data.results.map((result) => {
    const { name, image } = result;
    const insertChar = `  
    <div class="user">
    <img src="${image}" alt="" />
           <h2>${name}</h2>
     </div>`;
    console.log(insertChar);
    return resultsElement.insertAdjacentHTML("afterbegin", insertChar);
  });
};

const getChar = async function () {
  try {
    const charac = await fetch("https://rickandmortyapi.com/api/character");
    const charData = await charac.json();
    renderChar(charData);
  } catch (err) {
    console.error(`Something was wrong! ${err}`);
  }
};

getChar();
