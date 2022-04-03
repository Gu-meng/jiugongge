var minute,second;
var int;
var frequencyNum = 0;
var img = [
    "<img src=\"img/1.png\">",
    "<img src=\"img/2.png\">",
    "<img src=\"img/3.png\">",
    "<img src=\"img/4.png\">",
    "<img src=\"img/5.png\">",
    "<img src=\"img/6.png\">",
    "<img src=\"img/7.png\">",
    "<img src=\"img/8.png\">",
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

    l1.innerHTML = img[Num[0] - 1];
    l2.innerHTML = img[Num[1] - 1];
    l3.innerHTML = img[Num[2] - 1];
    l4.innerHTML = img[Num[3] - 1];
    l5.innerHTML = img[Num[4] - 1];
    l6.innerHTML = img[Num[5] - 1];
    l7.innerHTML = img[Num[6] - 1];
    l8.innerHTML = img[Num[7] - 1];
    l9.innerHTML = "";

    clearInterval(int);
    int = minute = second = 0;
    document.getElementById("time").innerHTML = minute + "分" + second + "秒";
    startTimer();
}

function test1(){
    var Text = new TextL1InL9();

    if(Text.l1Text == ""){
        console.log("空数值无法移动");
    }else if(Text.l2Text == ""){
        l2.innerHTML = Text.l1Text;
        l1.innerHTML = Text.l2Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l4Text == ""){
        l4.innerHTML = Text.l1Text;
        l1.innerHTML = Text.l4Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else{
        console.log("无法移动")
    }

    pd();
}

function test2(){
    var Text = new TextL1InL9();

    if(Text.l2Text == ""){
        console.log("空数值无法移动");
    }else if(Text.l1Text == ""){
        l1.innerHTML = Text.l2Text;
        l2.innerHTML = Text.l1Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l3Text == ""){
        l3.innerHTML = Text.l2Text;
        l2.innerHTML = Text.l3Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l5Text == ""){
        l5.innerHTML = Text.l2Text;
        l2.innerHTML = Text.l5Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else{
        console.log("无法移动");
    }

    pd();
}

function test3(){
    var Text = new TextL1InL9();

    if(Text.l3Text == ""){
        console.log("空数值无法移动");
    }else if(Text.l2Text == ""){
        l2.innerHTML = Text.l3Text;
        l3.innerHTML = Text.l2Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l6Text == ""){
        l6.innerHTML = Text.l3Text;
        l3.innerHTML = Text.l6Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else{
        console.log("无法移动")
    }

    pd();
}

function test4(){
    var Text = new TextL1InL9();

    if(Text.l4Text == ""){
        console.log("空数值无法移动");
    }else if(Text.l1Text == ""){
        l1.innerHTML = Text.l4Text;
        l4.innerHTML = Text.l1Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l5Text == ""){
        l5.innerHTML = Text.l4Text;
        l4.innerHTML = Text.l5Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l7Text == ""){
        l7.innerHTML = Text.l4Text;
        l4.innerHTML = Text.l7Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else{
        console.log("无法移动");
    }

    pd();
}

function test5(){
    var Text = new TextL1InL9();

    if(Text.l5Text == ""){
        console.log("空数值无法移动");
    }else if(Text.l2Text == ""){
        l2.innerHTML = Text.l5Text;
        l5.innerHTML = Text.l2Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l4Text == ""){
        l4.innerHTML = Text.l5Text;
        l5.innerHTML = Text.l4Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l6Text == ""){
        l6.innerHTML = Text.l5Text;
        l5.innerHTML = Text.l6Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l8Text == ""){
        l8.innerHTML = Text.l5Text;
        l5.innerHTML = Text.l8Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else{
        console.log("无法移动");
    }

    pd();
}

function test6(){
    var Text = new TextL1InL9();

    if(Text.l6Text == ""){
        console.log("空数值无法移动");
    }else if(Text.l3Text == ""){
        l3.innerHTML = Text.l6Text;
        l6.innerHTML = Text.l3Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l5Text == ""){
        l5.innerHTML = Text.l6Text;
        l6.innerHTML = Text.l5Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l9Text == ""){
        l9.innerHTML = Text.l6Text;
        l6.innerHTML = Text.l9Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else{
        console.log("无法移动");
    }

    pd();
}

function test7(){
    var Text = new TextL1InL9();

    if(Text.l7Text == ""){
        console.log("空数值无法移动");
    }else if(Text.l4Text == ""){
        l4.innerHTML = Text.l7Text;
        l7.innerHTML = Text.l4Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l8Text == ""){
        l8.innerHTML = Text.l7Text;
        l7.innerHTML = Text.l8Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else{
        console.log("无法移动")
    }

    pd();
}

function test8(){
    var Text = new TextL1InL9();

    if(Text.l8Text == ""){
        console.log("空数值无法移动");
    }else if(Text.l5Text == ""){
        l5.innerHTML = Text.l8Text;
        l8.innerHTML = Text.l5Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l7Text == ""){
        l7.innerHTML = Text.l8Text;
        l8.innerHTML = Text.l7Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l9Text == ""){
        l9.innerHTML = Text.l8Text;
        l8.innerHTML = Text.l9Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else{
        console.log("无法移动");
    }

    pd();
}

function test9(){
    var Text = new TextL1InL9();

    if(Text.l9Text == ""){
        console.log("空数值无法移动");
    }else if(Text.l6Text == ""){
        l6.innerHTML = Text.l9Text;
        l9.innerHTML = Text.l6Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else if(Text.l8Text == ""){
        l8.innerHTML = Text.l9Text;
        l9.innerHTML = Text.l8Text;
        frequency.innerHTML = "当前步数 : " +  ++frequencyNum;;
    }else{
        console.log("无法移动")
    }

    pd();
}

function TextL1InL9(){
    this.l1Text = l1.innerHTML;
    this.l2Text = l2.innerHTML;
    this.l3Text = l3.innerHTML;
    this.l4Text = l4.innerHTML;
    this.l5Text = l5.innerHTML;
    this.l6Text = l6.innerHTML;
    this.l7Text = l7.innerHTML;
    this.l8Text = l8.innerHTML;
    this.l9Text = l9.innerHTML;
}

function pd(){
    var Text = new TextL1InL9();
    if(
        Text.l1Text == img[0] &&
        Text.l2Text == img[1] &&
        Text.l3Text == img[2] &&
        Text.l4Text == img[3] &&
        Text.l5Text == img[4] &&
        Text.l6Text == img[5] &&
        Text.l7Text == img[6] &&
        Text.l8Text == img[7] &&
        Text.l9Text == "" ){
            alert("You Win");
            clearInterval(int);
            document.getElementById("time").innerHTML = "完成时间为" + minute + "分" + second + "秒";
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
    l1.innerHTML = img[0];
    l2.innerHTML = img[1];
    l3.innerHTML = img[2];
    l4.innerHTML = img[3];
    l5.innerHTML = img[4];
    l6.innerHTML = img[5];
    l7.innerHTML = img[6];
    l8.innerHTML = img[7];
    l9.innerHTML = "";
}