const btn=document.querySelectorAll("ul li button");


btn.forEach((bot)=>{

bot.addEventListener("click",()=>{
   
   bot.classList.toggle("filled");


   if( bot.classList.contains("filled")){
    bot.innerHTML="❤";
   }else{
    bot.nnerHTML="&#9825;";
   }
 });
});
