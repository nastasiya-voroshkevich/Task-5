
"use strict";

function randomDiap(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
  const colors = [
    "",
    "красный",
    "оранжевый",
    "жёлтый",
    "зелёный",
    "голубой",
    "синий",
    "фиолетовый",
  ];
  
  console.log("цветов: " + colorsCount);
  if (colorsCount > 7) {
    colorsCount = 7;
  }
  for (let i = 1; i <= colorsCount; i++) {
    let n = randomDiap(1, colors.length - 1);
    let colorName = colors.splice(n, 1);
    let myColor = colorName.join("");
    console.log(myColor);
  }
}

mood(13);
