// --- Персонализация по URL (?to=ключ) ---

(function(){

    const params=new URLSearchParams(location.search);

    const key=params.get("to");

    const name=(key&&GUESTS[key])?GUESTS[key]:DEFAULT_GUEST;

    const set=(el)=>{ if(el) el.textContent=name; };

    set(document.querySelector("#guest-names"));

    set(document.querySelector("#loader-names"));

})();


let value = 0;


const percent = document.querySelector("#percent");
const progress = document.querySelector(".loader-progress");
const loader = document.querySelector(".loader");


let timer = setInterval(()=>{


value++;


percent.textContent=value;


progress.style.width=value+"%";



if(value>=100){

    clearInterval(timer);

    setTimeout(()=>{

        loader.classList.add("hide");

        document.body.style.overflow="auto";


        setTimeout(()=>{

            loader.remove();

        },600);


    },250);

}


document.querySelectorAll(".rsvp-buttons button").forEach(btn=>{

btn.addEventListener("click",()=>{

    const answer=btn.dataset.answer;

    openRsvpForm(answer);

});

});


function openRsvpForm(answer){

    // Формы пока нет — закладываю функционал.
    // answer: "yes" | "no"
    console.log("Открыть форму RSVP, ответ:",answer);

}



},25);