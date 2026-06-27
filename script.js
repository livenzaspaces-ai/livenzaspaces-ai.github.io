// Smooth Fade Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

sections.forEach(section=>{
section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition="all .8s ease";
observer.observe(section);
});


// Contact Form → WhatsApp

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=this.querySelector("input[type='text']").value;

const email=this.querySelector("input[type='email']").value;

const message=this.querySelector("textarea").value;

const text=
`Hello Livenza Spaces

Name: ${name}

Email: ${email}

Message: ${message}`;

window.open(
"https://wa.me/919022942845?text="+encodeURIComponent(text),
"_blank"
);

});

}


// Gallery Hover Effect

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});


// Counter Animation

const counters=document.querySelectorAll(".stats h1");

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const update=()=>{

if(count<target){

count++;

counter.innerText=count+"+";

setTimeout(update,15);

}

};

update();

});


// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.boxShadow="0 10px 20px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});