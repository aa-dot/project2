// ------------------ star part validation -------------- 
// var starsSection=document.querySelectorAll('validationStars > img');
var starsSection= document.getElementById('validationStars').children;

function fillStarInMouseOver(index){
    
    for(var i = 0 ; i<index ; i++)
    {
        starsSection[i].src= "Filled_star.png";
    }
    
}
function fillStarOutMouseOut(){
    for(var i = 0; i<5 ; i++)
    {
        
        starsSection[i].src = "empty_star.png";
        
    }
    
}

function finalValidationStarMouseClick(index)
{
   for(var i = 0; i<5; i++)
   {
    starsSection[i].onmouseout = null;
    starsSection[i].onmouseover = null;
   }
   for(var i = index ; i<5 ; i++)
   {
    starsSection.images[i].src = "empty_star.png";
   }

}