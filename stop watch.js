let [count,hrs,min,sec]=[0,0,0,0];
let int=null;
let timeref=document.querySelector(".time");

document.getElementById("start").addEventListener('click',()=>{
    if(int!==null){
        clearInterval(int);
    }
    int=setInterval(displayTimer,10);
});
document.getElementById("stop").addEventListener('click',()=>{
    clearInterval(int);
});
document.getElementById("reset").addEventListener('click',()=>{
    clearInterval(int);
    [count,hrs,min,sec]=[0,0,0,0];
    timeref.innerHTML=`00:00:00:00`;
});
function displayTimer(){
    count+=1;
    if(count==100){
        sec++;
        count=0;
        if(sec==60){
            min++;
            sec=0;
            if(min==60){
                hrs++;
                min=0;
            }
        }
    }
    let h=hrs<10?"0"+hrs:hrs;
    let m=min<10?"0"+min:min;
    let s=sec<10?"0"+sec:sec;
    let c=count<10?"0"+count:count;
    timeref.innerHTML=`${h}:${m}:${s}:${c}`;


}