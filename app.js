$(".project-link").mouseenter(function(){
  $(".pro-title", this).removeClass("hide");
});
$(".project-link").mouseleave(function(){
  $(".pro-title", this).addClass("hide");
});

$("#Contact a").mouseenter(function(){
  $(".c-icon", this).addClass("c-hover");
});

$("#Contact a").mouseleave(function(){
  $(".c-icon", this).removeClass("c-hover");
});


const textList=["Programmer.","Developer.","Designer."];
var textIndex=0;
var letterIndex=0;
var currentText="";
var letter="";
var typeTime=400;
var isDeleting=false;
//We need self invoked function if we do not want to use eventlistener while load
(function type(){
  if (textIndex===textList.length){
    textIndex=0;
  }
  currentText=textList[textIndex];

  if(isDeleting){
    if(letterIndex===currentText.length){
      typeTime=800;
    }else{
    typeTime=200;
    }
    letter=currentText.slice(0,letterIndex--); //Deleting effect
    $(".typing").text(letter);
  }else{
    typeTime=500;
    letter=currentText.slice(0,letterIndex++); //typing effect
    $(".typing").text(letter);
  }

  if(!isDeleting && letterIndex===currentText.length){ //Desicion when to start delete
    isDeleting=true;
  }else if(isDeleting && letterIndex===0){
    isDeleting=false;
    textIndex++;
  }

  setTimeout(type,typeTime);

}
());
