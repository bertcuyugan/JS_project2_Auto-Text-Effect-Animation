const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "WebDeveloper", "Freelancer", "Instructor"];

let careerIndex = 0;
// now we are setting a variable for the career index

let charcterIndex = 0;
// we also want to add another let variable for the charater inside the careerIndex
// we are also using .slice 0 to the value of characterIndex
// we are adding the characterIndex++ inside the function below
// then we are adding setTimeout (not sure what it do) and inside it we added updateText and the delay is 400 millisecond - but here we dont get the next element yet
// to go to the next index we will have to add a condition to list all the careers incdex
// then we reset it
// cut the careerIndex++ and put it on the top

function updateText() {
  //   careerIndex++;
  charcterIndex++;
  containerEl.innerHTML = `
<h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, charcterIndex)}</h1>
`;
  //   charcterIndex++;
  if (charcterIndex === careers[careerIndex].length) {
    careerIndex++;
    charcterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 300);
  // see above code
  // new - how innerHTML works?
  // we use string literal to hard code for but we will change this later. and as you change the index value of careers, the career name change also.
}
// we creating this function

updateText();
