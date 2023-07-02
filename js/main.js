title=document.querySelector('#title');
let mood='x';
let elementarray=[];

function number(num1,num2,num3){
    document.getElementById('index'+num1).style.backgroundColor='black';
    document.getElementById('index'+num2).style.backgroundColor='black';
    document.getElementById('index'+num3).style.backgroundColor='black';
    title.innerHTML=`${elementarray[num1]} Winner`

    setInterval(function(){title.innerHTML+='.'},1000);
    setTimeout(function(){location.reload()},4000)

}
function winner(){
    for(let i=1;i<10;i++){
        elementarray[i]=document.getElementById('index'+i).innerHTML;
        // console.log(elementarray)
    }
    if(elementarray[1]==elementarray[2]&&elementarray[2]==elementarray[3] &&elementarray[1]!=''){
        
        number(1,2,3);
    }
    else if(elementarray[4]==elementarray[5]&&elementarray[5]==elementarray[6] &&elementarray[4]!=''){

        number(4,5,6);

    }
    else if(elementarray[7]==elementarray[8]&&elementarray[8]==elementarray[9] &&elementarray[7]!=''){
        number(7,8,9);

    }
    else if(elementarray[1]==elementarray[4]&&elementarray[4]==elementarray[7] &&elementarray[1]!=''){
        number(1,4,7);

    }
    else if(elementarray[2]==elementarray[5]&&elementarray[5]==elementarray[8] &&elementarray[2]!=''){
        number(2,5,8);

    }
    else if(elementarray[3]==elementarray[6]&&elementarray[6]==elementarray[9] &&elementarray[3]!=''){
        number(3,6,9);

    }

    else if(elementarray[1]==elementarray[5]&&elementarray[5]==elementarray[9] &&elementarray[1]!=''){
        number(1,5,9);

    }
    else if(elementarray[3]==elementarray[5]&&elementarray[5]==elementarray[7] &&elementarray[3]!=''){
        number(3,5,7);

    }
}

function game(id){
    let element=document.getElementById(id);
        if(mood==='x'&& element.innerHTML==''){
            element.innerHTML='X'; 
            mood='o';
            title.innerHTML='O';
    }else if(mood==='o'&& element.innerHTML==''){
        element.innerHTML='O'; 
        mood='x';   
        title.innerHTML='X';
            
    }

    winner();

}