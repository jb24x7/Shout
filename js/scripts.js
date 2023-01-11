

// window.onload = function() {
//   let form = document.querySelector("form");
//   form.onsubmit = function(event) {
//     event.preventDefault();
//     let input = document.getElementById("userInput").value;

//     document.querySelector("span#userInput").innerText = input;

//     document.querySelector("div#shout").removeAttribute("class");

    
//   };


// };


window.onload = function() {

  let form = document.querySelector("form")

  form.onsubmit = function(event) {
    event.preventDefault();
    let input = document.getElementById("userInput").value;

    document.querySelector("span#userInput").innerText = input.toUpperCase();

    document.querySelector("div#shout").removeAttribute("class");
    

  };
}