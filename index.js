// acquire referen  ces to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
var note = localStorage.getItem('first')
var name = document.cookie

console.log(name)
console.log(note)

// Then apply them to elements on the page

document.getElementById("notes-area").innerHTML = note;

document.querySelector("span").innerHTML = name;
console.log(name)
// YOUR CODE HERE


formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
    // save name element's content to cookies
        document.cookie = nameSpan.textContent
   
    // save textarea's content to localstorage

   
    textarea.textContent = textarea.value + " "
    localStorage.setItem ('first', textarea.value)

  // YOUR CODE HERE

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
    textarea.value = '';
    // Clear localstorage's content
    storage.clear();
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp