// $(document).scroll(function(e) {

//     // main function
//     var scrollAmount = $(window).scrollTop();
//     var documentHeight = $(document).height();
//     var windowHeight = $(window).height();
//     var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
//     var round < a href = "https://www.jqueryscript.net/tags.php?/Scroll/" > Scroll < /a> = Math.round(scrollPercent);

//     // horizontal scroll bar
//     $(".scrollBar").css("width", scrollPercent + "%");
//     $(".scrollBar span").text(roundScroll);

//     // vertical scroll bar
//     $(".scrollBar").css("height", scrollPercent + "%");
//     $(".scrollBar span").text(roundScroll);

// });

function myFunction(x) {
    x.classList.toggle("change");
}
// $(document).ready(function(){});
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}