document.addEventListener("DOMContentLoaded", init);

function init(ev){
  //add listeners to buttons
  var pl = document.querySelectorAll(".page-link");
  [].forEach.call(pl, function(obj, index){

    //use touchend if this is for mobile only
    obj.addEventListener("click", navigate);
  });
  //add listeners to pages
  var pages = document.querySelectorAll("[data-role=page]");
  [].forEach.call(pages, function(obj, index){
    obj.className = "inactive-page";
    //set the class to trigger
    if(index==0){
      obj.className = "active-page";
    }
    //transitionend or animationend listeners
    obj.addEventListener("animationend", pageAnimated);
  });
}

function navigate(ev){
  ev.preventDefault();
  var btn = ev.target;
  var href = btn.href;
  var id = href.split("#")[1];
  var pages = document.querySelectorAll('[data-role="page"]');
  for(var p=0; p<pages.length; p++){
    //console.log(pages[p].id, page);
    if(pages[p].id === id){
      pages[p].classList.remove("hidden");
      if(pages[p].className !== "active-page"){
        pages[p].className = "active-page";
      }
    }else{
      if(pages[p].className !== "inactive-page"){
        pages[p].className = "inactive-page";
      }
    }
  }
}

function pageAnimated(ev){
  var page = ev.target;
  if( page.className == "active-page" ){
    console.log(ev.target.id, " has just appeared");
  }else{
    console.log(ev.target.id, " has just disappeared");
  }
}