let changeMode=document.querySelector("#changeMode");
let body=document.querySelector("body");
let currMode="light";
let mode=()=>{
    if(currMode=="light")
        {currMode="dark";
        //   body.style.backgroundColor="black";
        body.classList.add("dark");//to add new list in tag
        body.classList.remove("light");
        }
    else
    {
        currMode="light";
        // body.style.backgroundColor="white";
        body.classList.add("light");//to add new list in tag
        body.classList.remove("dark");
    }
    console.log(currMode);
   
};

changeMode.addEventListener("click",mode);