

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

var myName = "Dolly";
var x = document.querySelector(".article__header")
console.log(x)
x.textContent = `Welcome to the ${myName}s blog`


// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
var y = document.querySelectorAll(".article__header");
for (i=0 ; i < y.length; i++) {
    y[i].classList.add("important");
}


// Obtain a reference the element with a class of dashed and remove it.
var z = document.querySelector(".dashed")
console.log(z.classList)
z.classList.remove("dashed")

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
    
var element = document.querySelector(".article__footer")
element.classList.add("goldenrod")