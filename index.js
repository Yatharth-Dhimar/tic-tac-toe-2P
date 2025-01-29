console.log("test");

let tick = 0;

let btn1 = document.querySelector('.a1');
btn1.addEventListener('click', ()=> {
    console.log("a1 clicked");
    if(btn1.classList.contains('g')){}
    else if(tick == 0) { btn1.classList.add('g'); ++tick; }
    else { btn1.classList.add('r'); --tick; }
    console.log(tick);
    gcheck();
    rcheck();
    tie();
});

let btn2 = document.querySelector('.a2');
btn2.addEventListener('click', ()=> {
    console.log("a2 clicked");
    if(btn2.classList.contains('g')){}
    else if(tick == 0) { btn2.classList.add('g'); ++tick; }
    else { btn2.classList.add('r'); --tick; }
    console.log(tick);
    gcheck();
    rcheck();
    tie();
});

let btn3 = document.querySelector('.a3');
btn3.addEventListener('click', ()=> {
    console.log("a3 clicked");
    if(btn3.classList.contains('g')){}
    else if(tick == 0) { btn3.classList.add('g'); ++tick; }
    else { btn3.classList.add('r'); --tick; }
    console.log(tick);
    gcheck();
    rcheck();
    tie();
});

let btn4 = document.querySelector('.b1');
btn4.addEventListener('click', ()=> {
    console.log("b1 clicked");
    if(btn4.classList.contains('g')){}
    else if(tick == 0) { btn4.classList.add('g'); ++tick; }
    else { btn4.classList.add('r'); --tick; }
    console.log(tick);
    gcheck();
    rcheck();
    tie();
});

let btn5 = document.querySelector('.b2');
btn5.addEventListener('click', ()=> {
    console.log("b2 clicked");
    if(btn5.classList.contains('g')){}
    else if(tick == 0) { btn5.classList.add('g'); ++tick; }
    else { btn5.classList.add('r'); --tick; }
    console.log(tick);
    gcheck();
    rcheck();
    tie();
});

let btn6 = document.querySelector('.b3');
btn6.addEventListener('click', ()=> {
    console.log("b3 clicked");
    if(btn6.classList.contains('g')){}
    else if(tick == 0) { btn6.classList.add('g'); ++tick; }
    else { btn6.classList.add('r'); --tick; }
    console.log(tick);
    gcheck();
    rcheck();
    tie();
});

let btn7 = document.querySelector('.c1');
btn7.addEventListener('click', ()=> {
    console.log("c1 clicked");
    if(btn7.classList.contains('g')){}
    else if(tick == 0) { btn7.classList.add('g'); ++tick; }
    else { btn7.classList.add('r'); --tick; }
    console.log(tick);
    gcheck();
    rcheck();
    tie();
});

let btn8 = document.querySelector('.c2');
btn8.addEventListener('click', ()=> {
    console.log("c2 clicked");
    if(btn8.classList.contains('g')){}
    else if(tick == 0) { btn8.classList.add('g'); ++tick; }
    else { btn8.classList.add('r'); --tick; }
    console.log(tick);
    gcheck();
    rcheck();
    tie();
});

let btn9 = document.querySelector('.c3');
btn9.addEventListener('click', ()=> {
    console.log("c3 clicked");
    if(btn9.classList.contains('g')){}
    else if(tick == 0) { btn9.classList.add('g'); ++tick; }
    else { btn9.classList.add('r'); --tick; }
    console.log(tick);
    gcheck();
    rcheck();
    tie();
});


let btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];


//forgreens victory

function gcheck(){
    if(
        //horizontal
        (btn1.classList.contains('g') && btn2.classList.contains('g') && btn3.classList.contains('g')) ||
        (btn4.classList.contains('g') && btn5.classList.contains('g') && btn6.classList.contains('g')) ||
        (btn7.classList.contains('g') && btn8.classList.contains('g') && btn9.classList.contains('g')) ||
        //vertical
        (btn1.classList.contains('g') && btn4.classList.contains('g') && btn7.classList.contains('g')) ||
        (btn2.classList.contains('g') && btn5.classList.contains('g') && btn8.classList.contains('g')) ||
        (btn3.classList.contains('g') && btn6.classList.contains('g') && btn9.classList.contains('g')) ||
        //diagonal
        (btn1.classList.contains('g') && btn5.classList.contains('g') && btn9.classList.contains('g')) ||
        (btn3.classList.contains('g') && btn5.classList.contains('g') && btn7.classList.contains('g'))
    ){ 
        console.log("greens victory");
        setTimeout(()=>{
            alert("greens victory");
            //reset
            for(btn of btns)
                {
                    btn.classList.remove('r');
                    btn.classList.remove('g');
                }

        }, 10)
    }
}


//forreds victory

function rcheck(){
    if(
        //horizontal
        (btn1.classList.contains('r') && btn2.classList.contains('r') && btn3.classList.contains('r')) ||
        (btn4.classList.contains('r') && btn5.classList.contains('r') && btn6.classList.contains('r')) ||
        (btn7.classList.contains('r') && btn8.classList.contains('r') && btn9.classList.contains('r')) ||
        //vertical
        (btn1.classList.contains('r') && btn4.classList.contains('r') && btn7.classList.contains('r')) ||
        (btn2.classList.contains('r') && btn5.classList.contains('r') && btn8.classList.contains('r')) ||
        (btn3.classList.contains('r') && btn6.classList.contains('r') && btn9.classList.contains('r')) ||
        //diagonal
        (btn1.classList.contains('r') && btn5.classList.contains('r') && btn9.classList.contains('r')) ||
        (btn3.classList.contains('r') && btn5.classList.contains('r') && btn7.classList.contains('r'))
    )
    { 
        console.log("reds victory");
        setTimeout(() => {
            alert("red wins");
            //reset
            for(btn of btns)
            {
                btn.classList.remove('r');
                btn.classList.remove('g');
            }

        }, 10);
    }
}


//fortie

function tie(){
    let count = 0;
    for(btn of btns){
        if(btn.classList.contains('g') || btn.classList.contains('r')) { ++count }
    }
    if(count == 9) {
        //tie
        setTimeout(() => {
            alert("its a tie");
            //reset
            for(btn of btns)
            {
                btn.classList.remove('r');
                btn.classList.remove('g');
            }

        }, 10);
    }
}