var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//responsive

const menu_rep= document.querySelector(".menu-rep");
const menu_navbar= document.querySelector(".menu-navbar");


menu_rep.addEventListener("click", function() {
  if (menu_navbar.style.display === "none") {
    menu_navbar.style.display = "block";
    menu_rep.innerHTML="<i class='fa-solid fa-xmark'></i>";

  } else {
    menu_navbar.style.display = "none";
    menu_rep.innerHTML="<i class='fa-solid fa-bars'></i>";

  }
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



const all= document.querySelector(".all");
const bayan= document.querySelector(".bayan");
const best= document.querySelector(".best");
const crest= document.querySelector(".crest");
const top1= document.querySelector(".top");
const great= document.querySelector(".great");
const aew= document.querySelector(".aew");

const all_category = document.querySelector(".all-events");
const bayan_category = document.querySelector(".bayan-events");
const best_category = document.querySelector(".best-events");
const crest_category = document.querySelector(".crest-events");
const top_category = document.querySelector(".top-events");
const great_category = document.querySelector(".great-events");
const aew_category = document.querySelector(".aew-events");



all.addEventListener("click", function() {
  all_category.style.display= "block";
  bayan_category.style.display= "none";
  best_category.style.display= "none";
  crest_category.style.display= "none";
  top_category.style.display= "none";
  great_category.style.display= "none";
  aew_category.style.display= "none";
  
  all.classList.add("active-cat");
  bayan.classList.remove("active-cat");
  best.classList.remove("active-cat");
  crest.classList.remove("active-cat");
  top1.classList.remove("active-cat");
  great.classList.remove("active-cat");
  aew.classList.remove("active-cat");
});

bayan.addEventListener("click", function() {
  bayan_category.style.display= "block";
  all_category.style.display= "none";
  best_category.style.display= "none";
  crest_category.style.display= "none";
  top_category.style.display= "none";
  great_category.style.display= "none";
  aew_category.style.display= "none";

  bayan.classList.add("active-cat");
  all.classList.remove("active-cat");
  best.classList.remove("active-cat");
  crest.classList.remove("active-cat");
  top1.classList.remove("active-cat");
  great.classList.remove("active-cat");
  aew.classList.remove("active-cat");
});
best.addEventListener("click", function() {
  best_category.style.display= "block";
  bayan_category.style.display= "none";
  all_category.style.display= "none";
  crest_category.style.display= "none";
  top_category.style.display= "none";
  great_category.style.display= "none";
  aew_category.style.display= "none";
  

  best.classList.add("active-cat");
  all.classList.remove("active-cat");
  bayan.classList.remove("active-cat");
  crest.classList.remove("active-cat");
  top1.classList.remove("active-cat");
  great.classList.remove("active-cat");
  aew.classList.remove("active-cat");
});
crest.addEventListener("click", function() {
  crest_category.style.display= "block";
  best_category.style.display= "none";
  bayan_category.style.display= "none";
  all_category.style.display= "none";
  top_category.style.display= "none";
  great_category.style.display= "none";
  aew_category.style.display= "none";

  crest.classList.add("active-cat");
  best.classList.remove("active-cat");
  all.classList.remove("active-cat");
  bayan.classList.remove("active-cat");
  top1.classList.remove("active-cat");
  great.classList.remove("active-cat");
  aew.classList.remove("active-cat");
});
top1.addEventListener("click", function() {
  top_category.style.display= "block";
  crest_category.style.display= "none";
  best_category.style.display= "none";
  bayan_category.style.display= "none";
  all_category.style.display= "none";
  great_category.style.display= "none";
  aew_category.style.display= "none";

  top1.classList.add("active-cat");
  crest.classList.remove("active-cat");
  best.classList.remove("active-cat");
  all.classList.remove("active-cat");
  bayan.classList.remove("active-cat");
  great.classList.remove("active-cat");
  aew.classList.remove("active-cat");
});
great.addEventListener("click", function() {
  great_category.style.display= "block";
  top_category.style.display= "none";
  crest_category.style.display= "none";
  best_category.style.display= "none";
  bayan_category.style.display= "none";
  all_category.style.display= "none";
  aew_category.style.display= "none";

  great.classList.add("active-cat");
  top1.classList.remove("active-cat");
  crest.classList.remove("active-cat");
  best.classList.remove("active-cat");
  all.classList.remove("active-cat");
  bayan.classList.remove("active-cat");
  aew.classList.remove("active-cat");
});
aew.addEventListener("click", function() {
  aew_category.style.display= "block";
  great_category.style.display= "none";
  top_category.style.display= "none";
  crest_category.style.display= "none";
  best_category.style.display= "none";
  bayan_category.style.display= "none";
  all_category.style.display= "none";

  aew.classList.add("active-cat");
  great.classList.remove("active-cat");
  top1.classList.remove("active-cat");
  crest.classList.remove("active-cat");
  best.classList.remove("active-cat");
  all.classList.remove("active-cat");
  bayan.classList.remove("active-cat");
});



//OOP approach

const news_menu = {
    all_news: document.querySelector(".all-news"),
    bayan_news: document.querySelector(".bayan-news"),
    best_news: document.querySelector(".best-news"),
    crest_news: document.querySelector(".crest-news"),
    top_news: document.querySelector(".top-news"),
    great_news: document.querySelector(".great-news"),
    aew_news: document.querySelector(".aew-news"),

    all_news_con: document.querySelector(".all-news-con"),
    bayan_news_con: document.querySelector(".bayan-news-con"),
    // best_news_con: document.querySelector(".best-news-con"),
    // crest_news_con: document.querySelector(".crest-news-con"),
    // top_news_con: document.querySelector(".top-news-con"),
    // great_news_con: document.querySelector(".great-news-con"),
    // aew_news_con: document.querySelector(".aew-news-con"),

    all_only: function(){
      this.bayan_news.classList.remove("latest-news-active");
      this.all_news.classList.add("latest-news-active");
      this.best_news.classList.remove("latest-news-active");
      this.crest_news.classList.remove("latest-news-active");
      this.top_news.classList.remove("latest-news-active");
      this.great_news.classList.remove("latest-news-active");
      this.aew_news.classList.remove("latest-news-active");
    },

    bayan_only: function(){
      this.bayan_news.classList.add("latest-news-active");
      this.all_news.classList.remove("latest-news-active");
      this.best_news.classList.remove("latest-news-active");
      this.crest_news.classList.remove("latest-news-active");
      this.top_news.classList.remove("latest-news-active");
      this.great_news.classList.remove("latest-news-active");
      this.aew_news.classList.remove("latest-news-active");
    
      // this.bayan_news_con.classList.add("active-news");
      // this.all_news_con.classList.remove("active-news");
      // this.best_news_con.classList.remove("active-news");
      // this.crest_news_con.classList.remove("active-news");
      // this.top_news_con.classList.remove("active-news");
      // this.great_news_con.classList.remove("active-news");
      // this.aew_news_con.classList.remove("active-news");
      
    },

    best_only: function(){
      this.bayan_news.classList.remove("latest-news-active");
      this.all_news.classList.remove("latest-news-active");
      this.best_news.classList.add("latest-news-active");
      this.crest_news.classList.remove("latest-news-active");
      this.top_news.classList.remove("latest-news-active");
      this.great_news.classList.remove("latest-news-active");
      this.aew_news.classList.remove("latest-news-active");
    },

    crest_only: function(){
      this.bayan_news.classList.remove("latest-news-active");
      this.all_news.classList.remove("latest-news-active");
      this.best_news.classList.remove("latest-news-active");
      this.crest_news.classList.add("latest-news-active");
      this.top_news.classList.remove("latest-news-active");
      this.great_news.classList.remove("latest-news-active");
      this.aew_news.classList.remove("latest-news-active");
    },

    top_only: function(){
      this.bayan_news.classList.remove("latest-news-active");
      this.all_news.classList.remove("latest-news-active");
      this.best_news.classList.remove("latest-news-active");
      this.crest_news.classList.remove("latest-news-active");
      this.top_news.classList.add("latest-news-active");
      this.great_news.classList.remove("latest-news-active");
      this.aew_news.classList.remove("latest-news-active");
    },

    great_only: function(){
      this.bayan_news.classList.remove("latest-news-active");
      this.all_news.classList.remove("latest-news-active");
      this.best_news.classList.remove("latest-news-active");
      this.crest_news.classList.remove("latest-news-active");
      this.top_news.classList.remove("latest-news-active");
      this.great_news.classList.add("latest-news-active");
      this.aew_news.classList.remove("latest-news-active");
    },

    aew_only: function(){
      this.bayan_news.classList.remove("latest-news-active");
      this.all_news.classList.remove("latest-news-active");
      this.best_news.classList.remove("latest-news-active");
      this.crest_news.classList.remove("latest-news-active");
      this.top_news.classList.remove("latest-news-active");
      this.great_news.classList.remove("latest-news-active");
      this.aew_news.classList.add("latest-news-active");
    },
}

news_menu.bayan_news.addEventListener("click", function() {
  news_menu.bayan_only();
});
news_menu.all_news.addEventListener("click", function() {
  news_menu.all_only();
});
news_menu.best_news.addEventListener("click", function() {
  news_menu.best_only();
});
news_menu.crest_news.addEventListener("click", function() {
  news_menu.crest_only();
});
news_menu.top_news.addEventListener("click", function() {
  news_menu.top_only();
});
news_menu.great_news.addEventListener("click", function() {
  news_menu.great_only();
});
news_menu.aew_news.addEventListener("click", function() {
  news_menu.aew_only();
});
