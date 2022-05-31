let submit=document.getElementById('submit');
let reset=document.getElementById('reset');
let card=document.getElementById('card');
let name=document.getElementById('name');
let male=document.getElementById('male');
let female=document.getElementById('female');
let other=document.getElementById('other');
let email=document.getElementById('email');
let website=document.getElementById('website');
let imgsrc=document.getElementById('image');
let cpp=document.getElementById('cpp');
let python=document.getElementById('python');
let java=document.getElementById('java');
let javascript=document.getElementById('javascript');
let go=document.getElementById('go');

let count=1;

submit.addEventListener('click',function(){
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    let p3=document.createElement('p');
    let p4=document.createElement('p');
    let p5=document.createElement('p');
    
    p1.appendChild(document.createTextNode(name.value));
    p2.appendChild(document.createTextNode(email.value));
    p3.appendChild(document.createTextNode(website.value));
    
    if(male.checked==true)
        p4.appendChild(document.createTextNode(male.value));
    else if(female.checked==true)
        p4.appendChild(document.createTextNode(female.value));
    else if(other.checked==true)
        p4.appendChild(document.createTextNode(other.value));
    
    if(java.checked==true)
        p5.appendChild(document.createTextNode(java.value+'  '));
    if(javascript.checked==true)
        p5.appendChild(document.createTextNode(javascript.value+'  '));
    if(cpp.checked==true)
        p5.appendChild(document.createTextNode(cpp.value+'  '));
    if(python.checked==true)
        p5.appendChild(document.createTextNode(python.value+'  '));
    if(go.checked==true)
        p5.appendChild(document.createTextNode(go.value+'  '));

    let img=document.createElement('img');
    img.src=[imgsrc.value]; 
    
    let div=document.createElement('div');
    div.className='a';

    div.appendChild(p1);
    div.appendChild(p4);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p5);
    // div.appendChild(img);
    
    let div2=document.createElement('div');
    div2.className='b';
    div2.appendChild(img);
    
    // card.appendChild(div);  
    // card.appendChild(div2);

    let div3=document.createElement('div');
    if(male.checked==true)
        div3.className='c';
    else if(female.checked==true)
        div3.className='d';
    else    
        div3.className='e';

    div3.appendChild(div);
    div3.appendChild(div2);
    
    if(count==1){
        let pre=document.createElement('pre');
        pre.innerHTML='  Description                       Image';
        let div4=document.createElement('div');
        div4.appendChild(pre);
        card.appendChild(div4);
        count++;
    }
    
    card.appendChild(div3); 
    
    clear();
});

reset.addEventListener('click',clear);

function clear(){
    name.value='';
    male.checked=true;
    email.value='';
    website.value='';
    imgsrc.value='';
    java.checked=false;
    javascript.checked=false;
    cpp.checked=false;
    go.checked=false;
    python.checked=false;
}
