let btn1=document.querySelector("#bt1");
// btn1.onclick = () =>{
//     console.log("hello!");
//     console.log(25);
// };

//eventListener #for multiple use 
btn1.addEventListener("click",()=>{
 console.log("button1 was clicked!")
});
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked-2!")
   });
   const dev= ()=>{
       console.log("button1 was clicked-3")
   };
   btn1.addEventListener("click",dev);
   const dev1= ()=>{
    console.log("button1 was clicked-4")
};
btn1.addEventListener("click",dev1);
btn1.removeEventListener("click",dev);




// let b2=document.querySelector("div");
// b2.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     // console.log("hello!123");
// };