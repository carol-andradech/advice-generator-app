let advice = document.getElementById("advice");
let num = document.getElementById("num");

/*
fetch initiates a network request to the URL https://api.adviceslip.com/advice using the fetch function. This URL points to an API that provides random pieces of advice.
then((response) => response.json()) is a Promise chain. It specifies what should happen once the response is received from the API. When the response is received, it is converted to JSON format.
then((data) => { ... }) is another Promise chain. It specifies what should happen after the response has been successfully converted to JSON. It takes the JSON data as an argument.
*/
fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    num.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
  });
