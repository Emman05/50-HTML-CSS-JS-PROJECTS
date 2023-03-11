const testimonials = [
    {
        name: "Marijo Z",
        photoUrl: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        text: "I would gladly pay over 600 dollars for tesla. I would like to personally thank you for your outstanding product."
    },
    {
        name: "Barr U",
        photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        text: "Tesla is the real deal! Thank you for making it painless, pleasant and most of all hassle free! I will recommend you to my colleagues."
    },
    {
        name: "Savina I",
        photoUrl: "https://images.unsplash.com/photo-1627347268618-21de7351e545?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3ODIxMjR8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        text: "I wish I would have thought of it first. I have gotten at least 50 times the value from tesla."
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx]
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },10000)
}