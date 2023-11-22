//Select the section with an id of container without using querySelector/
document.getElementById('container');
//Select the Section with an id ofcontainer using querySelector.
document.querySelectorAll('container');
//Select all of the list items with a class of "second".
document.querySelectorAll('second');
//select a list item witha  class of thrid, but only the list item inside of the ol tag.
document.getElementsByClassName('ol .third');
//Give the section with an id of container the text "Hello!".
const Hello = document.getElementById('container');
Hello.innerText = Hello;
//add the class main to the div with a class of footer.
const footer = documnet.getElementsByClassName('footer');
const main = document.createElement('class .main');
footer.classlist.add = main;
//Remove the class main on the div with a class of footer.
footer.classlist.remove = main;
//create a new li element.
const newElement = document.createElement('li');
//give the li the text "four".
newElement.innerText = four;
//append the li to the ul element.
newElement.setAttribute('ul', 'li');

//loop over all of the lis inside the ol tag and give them a background color of "green".
let green = document.querySelector('ol li');
for (i = 0; i <= green.length; i++) {
    green[i].style.backgroundColor = green;
}
//Remove the div with a class of footer.
footer.classlist.remove;