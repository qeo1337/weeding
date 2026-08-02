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

    // answer: "yes" | "no" → значение скрытого поля Яндекс-формы
    const value=(answer==="yes")?"Да":"Нет";

    const formId="6a6de8c884227c8c982e2e91";
    const fieldId="answer_boolean_9008984842657980";

    const src=`https://forms.yandex.ru/u/${formId}?iframe=1&${fieldId}=${encodeURIComponent(value)}`;

    const container=document.querySelector("#rsvp-form");

    container.innerHTML=

        `<iframe src="${src}" frameborder="0" name="ya-form-${formId}" width="650" style="width:100%;max-width:650px;margin:30px auto 0;display:block;"></iframe>`;

    // Прокручиваем к форме, чтобы гость сразу её увидел.
    container.scrollIntoView({behavior:"smooth",block:"center"});

}



},25);