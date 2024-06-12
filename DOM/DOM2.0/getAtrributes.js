// to get Attributes or excess

// let h=document.querySelector("h1");
// console.log(h);
// console.log(h.getAttribute("id"));
// h.setAttribute("id","heading");
//....

//style setting

// let div=document.querySelector("div");
// console.log(div);
// div.style.backgroundColor="red";
//....

// to create new tag from js
let newBt=document.createElement("button");
newBt.innerText="click me!";
console.log(newBt);

let div=document.querySelector("#box2");
console.log(div);
// div.append(newBt);  // add at end 
// div.prepend(newBt); // add at top
// div.before(newBt); // before tag start
// div.after(newBt); // after tag end

let h=document.createElement("h1");
h.innerHTML="<h1>bye bye</h1>"
document.querySelector("body").append(h);
document.querySelector(".para").remove();
