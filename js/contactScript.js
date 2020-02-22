function change(e){
    if(e==1){
        document.getElementById("1").style.backgroundColor="#48bdc5";
        document.getElementById("1").style.border="1px  #48bdc5";
        document.getElementById("2").style.backgroundColor="white";
        document.getElementById("3").style.backgroundColor="white";
        document.getElementById("4").style.backgroundColor="white";
        document.getElementById("5").style.backgroundColor="white";
    }
    else if(e==2){
        document.getElementById("2").style.backgroundColor="#48bdc5";
        document.getElementById("2").style.border="1px  #48bdc5";
        document.getElementById("1").style.backgroundColor="white";
        document.getElementById("3").style.backgroundColor="white";
        document.getElementById("4").style.backgroundColor="white";
        document.getElementById("5").style.backgroundColor="white";
    }
    else if(e==3){
        document.getElementById("3").style.backgroundColor="#48bdc5";
        document.getElementById("3").style.border="1px  #48bdc5"; 
        document.getElementById("2").style.backgroundColor="white";
        document.getElementById("1").style.backgroundColor="white";
        document.getElementById("4").style.backgroundColor="white";
        document.getElementById("5").style.backgroundColor="white";       
    }
   
   else if(e==4){
        document.getElementById("4").style.backgroundColor="#48bdc5";
        document.getElementById("4").style.border="1px  #48bdc5";
        document.getElementById("2").style.backgroundColor="white";
        document.getElementById("3").style.backgroundColor="white";
        document.getElementById("1").style.backgroundColor="white";
        document.getElementById("5").style.backgroundColor="white";        
    }
    else if(e==5){
        document.getElementById("5").style.backgroundColor="#48bdc5";
        document.getElementById("5").style.border="1px  #48bdc5"; 
        document.getElementById("2").style.backgroundColor="white";
        document.getElementById("3").style.backgroundColor="white";
        document.getElementById("4").style.backgroundColor="white";
        document.getElementById("1").style.backgroundColor="white";       
    } 
}