// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0 || word.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

let passage = $("#text-passage").val();
function mostUsedWords(text) { 
  let passage = text.split(" ");
  let wordContent = {};

  for (let i = 0; i < passage.length; i++) {
    let currentMostUsedWords = wordContent[passage[i]];
    let count = currentMostUsedWords ? currentMostUsedWords : 0;
    wordContent[passage[i]] = count + 1;
  }
  return wordContent;
}

// UI logic

$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    const mostWords = mostUsedWords(word);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#mostWord").html(mostWords);
  });
});

function boldPassage(word, text) {
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    htmlString = htmlString.concat(" ");
  });
  return htmlString + "</p>";
}
