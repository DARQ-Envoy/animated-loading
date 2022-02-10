const cardHeader=document.querySelector("#header")
const heading=document.querySelector("#title");
const paraEl=document.querySelector("#excerpt");
const authorImage=document.querySelector("#profile_img");
const animatedBg=document.querySelectorAll(".animated-bg");
const animatedBgText=document.querySelectorAll(".animated-bg-text");
const parentLoad=document.querySelector(".loading-anime");
const authorName=document.querySelector("#name");
const date=document.querySelector("#date");
const AuthorText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, suscipit."
const head="Lorem ipsum dolor sit amet ";

setTimeout(()=>{
    cardContent()
},4800)

function cardContent(){
    cardHeader.innerHTML=`
    <img src="Eagle.jpg" alt="Eagle Image" class="image"/>
    `;
heading.textContent=head;
paraEl.textContent=AuthorText;
authorName.textContent="John Doe";
date.textContent="Oct 08,2021";
authorImage.innerHTML=`<img src="dmw boss.jpg" alt="Davido's Image"/>`
// heading.classList.remove("animated-bg","animated-bg-text");
// authorName.classList.remove("animated-bg","animated-bg-text");
// date.classList.remove("animated-bg","animated-bg-text");
animatedBg.forEach(bg=>{
    bg.classList.remove("animated-bg")
})

animatedBgText.forEach(bgText=>{
    bgText.classList.remove("animated-bg-text")
})
}

const int=setInterval(loading,1500)
    loading()
function loading(){
    parentLoad.innerHTML="";
    parentLoad.innerHTML=` <span class="dots dot1"></span>`;
    setTimeout(()=>{
        parentLoad.innerHTML+=`<span class=" dots dot2"></span>`
    },500)
    setTimeout(()=>{
        parentLoad.innerHTML+=`<span class="dots dot3"></span>`
    },1000)
 
}
setTimeout(()=>{
    clearInterval(int);
},3300)

setTimeout(()=>{
    parentLoad.innerHTML="";
},4600);


// animatedBg.forEach(bg=>{
//     bg.classList.remove("animated-bg")
// })
// animatedBgText.forEach(bgTexts=>{
//     bgTexts.classList.remove("animated-bg-text")
// })
