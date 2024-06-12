let fun=document.querySelector("div");
let n=0;
const mode=()=>{
    if(n===0)
        {
            n=1;
            fun.classList.remove("fun");
            fun.classList.add("fun1");
        }
    else{
        n=0;
        fun.classList.remove("fun1");
        fun.classList.add("fun");
    }  
    console.log(n);  
};

// let div=document.querySelector("l1");
fun.addEventListener("mouseover",mode);