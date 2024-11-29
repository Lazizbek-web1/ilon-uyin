function fnStart(){
    let ovqatQator = Math.round(Math.random()*10)
    let ovqatUstun = Math.round(Math.random()*10)
    if (ovqatQator>5)
    {ovqatQator -= 5}

    if (ovqatUstun>5)
    {ovqatUstun -=5}

    if (ovqatQator==0)
    {ovqatQator += 1}

    if (ovqatUstun==0)
    {ovqatUstun += 1}

    let uzgar1 = ".qator" + ovqatQator + "ustun" + ovqatUstun
    let natija1 = document.querySelector(uzgar1)
    natija1.setAttribute('style', 'background-color: green;')

    console.log(ovqatQator);
    console.log(ovqatUstun);
}

let x = 1
let y = 1

function uyinchi(){
    let qizil = ".qator" + x + "ustun" + y
    let natija = document.querySelector(qizil)
    natija.setAttribute('style', 'background-color: red;')
}




function fnBottom(){x += 1
    if (x>0 && x<6){
        uyinchi()
    }
    else{
        tugadi()
    }
}

function fnRight(){y += 1
    if (y>0 && y<6){
        uyinchi()
    }
    else{
        tugadi()
    }
}

function fnTop(){x -= 1
    if (x>0 && x<6){
        uyinchi()
    }
    else{
        tugadi()
    }
}

function fnLeft(){y -= 1
    if (y>0 && y<6){
        uyinchi()
    }
    else{
        tugadi()
    }
}

function tugadi(){
    for(let i = 0; i < 2; i++){
        alert("siz yutqazdinggiz. Endi web siteni qatya yuklagan holdagina uyini qaytadan boshlashinggiz mumkin")
        i = i-1
    }
    
}

let goCommand = document.getElementById