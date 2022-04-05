var minute,second,int;
var frequencyNum = 0;
var IdLi = new Array();
var img = [
    "<img src=\"img/1.png\">",
    "<img src=\"img/2.png\">",
    "<img src=\"img/3.png\">",
    "<img src=\"img/4.png\">",
    "<img src=\"img/5.png\">",
    "<img src=\"img/6.png\">",
    "<img src=\"img/7.png\">",
    "<img src=\"img/8.png\">",
    ""
];

window.onload = function(){
    l1 = document.getElementById("l1");
    l2 = document.getElementById("l2");
    l3 = document.getElementById("l3");
    l4 = document.getElementById("l4");
    l5 = document.getElementById("l5");
    l6 = document.getElementById("l6");
    l7 = document.getElementById("l7");
    l8 = document.getElementById("l8");
    l9 = document.getElementById("l9");  
    IdLi = [l1,l2,l3,l4,l5,l6,l7,l8,l9]; 
    frequency = document.getElementById("frequency");
}

function start(){
    var Num = new Array();
    var shu;
    var i = 0;
    while(Num.length <=  7){
        shu = Math.floor(Math.random() * 9);
        if(shu == 0)continue;
        if(Num[0] == shu)continue;
        if(Num[1] == shu)continue;
        if(Num[2] == shu)continue;
        if(Num[3] == shu)continue;
        if(Num[4] == shu)continue;
        if(Num[5] == shu)continue;
        if(Num[6] == shu)continue;
            console.log(shu);
            Num[i] = shu;
            i++;
    }
    for(var k in IdLi){
        if(k == 8){l9.innerHTML = "";break;}
        IdLi[k].innerHTML = img[Num[k] - 1];
    }
    
    clearInterval(int);
    int = minute = second = frequencyNum = 0;
    frequency.innerHTML = "当前步数 : " + frequencyNum;;
    document.getElementById("time").innerHTML = minute + "分" + second + "秒";
    startTimer();
}

function test(num){
    switch(num){
        case 1 : move([l1,l2,l4]);break;
        case 2 : move([l2,l1,l3,l5]);break;
        case 3 : move([l3,l2,l6]);break;
        case 4 : move([l4,l1,l5,l7]);break;
        case 5 : move([l5,l2,l4,l6,l8]);break;
        case 6 : move([l6,l3,l5,l9]);break;
        case 7 : move([l7,l4,l8]);break;
        case 8 : move([l8,l5,l7,l9]);break;
        case 9 : move([l9,l6,l8]);break;
    }   
    pd();
}

function pd(){
    for(var t in IdLi){
        if(IdLi[t].innerHTML != img[t]){
            return;  
        }else if(t != 8){
            continue;
        }
        alert("You Win");
        clearInterval(int);
        document.getElementById("time").innerHTML = "完成时间为" + minute + "分" + second + "秒";
        break;
    }
}

function startTimer(){
    int = setInterval(timer,1000);
}

function timer(){ 
    second++;
    if(second >= 60){
        minute += 1;
        second = 0;
    }
    document.getElementById("time").innerHTML = minute + "分" + second + "秒";
}

function gua(){
    for(var j in IdLi){
        IdLi[j].innerHTML = img[j];
    }
}

function swap(li1,li2){
    var temp =  li1.innerHTML;
    li1.innerHTML = li2.innerHTML;
    li2.innerHTML = temp;
    frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
}

function move(li){
    for(var k in li){
        if(li[k].innerHTML == ""){
            if(k == 0){
                console.log("空数值无法移动");
            }else{
                swap(li[k],li[0]);
            }
            return;
        }
    }
    console.log("无法移动");
}
