const navLink = document.querySelectorAll(".nav_item");

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function() {
    let current = document.querySelector(".active");
    current.className = current.className.replace(" active", "");
    this.className += " active";
    activePage(this);
  })
};

const homeBtn = document.querySelector(".home_button");

homeBtn.addEventListener("click", function (){
  let current = document.querySelector(".active"),
    newActive = document.querySelector(".courses_link");
  current.className = current.className.replace(" active", "");
  newActive.className += " active";
})

const activePage = (active_link) =>{
  let current = document.querySelectorAll(".page"),
    currentId = active_link.id;
  for(let i = 0; i < current.length; i++){
    if(!current[i].className.search(currentId)){
      current[i].style.display = "block";
    }
    else {
      current[i].style.display = "none";
    }
  } 
}