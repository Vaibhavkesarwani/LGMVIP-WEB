let button = document.querySelectorAll('button');
let screen = document.getElementById('screen');
let sv='';
for(let x of button){
    x.addEventListener('click',(e)=>{
        let bt=e.target.innerText;
        if(bt=='='){
            screen.value=eval(sv);
            sv=eval(sv);
        }
        else if(bt=='C'){
            screen.value='';
            sv='';
        }
        else{
            sv+=bt;
            screen.value=sv;
        }
    });
}