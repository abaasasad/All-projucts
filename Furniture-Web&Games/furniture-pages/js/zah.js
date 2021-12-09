var mainImge = document.getElementById("mainImge")
var smallImge = document.getElementsByClassName("small-img")

smallImge[0].onclick = function(){
  mainImge.src = smallImge[0].src;
}
smallImge[1].onclick = function(){
  mainImge.src = smallImge[1].src;
}
smallImge[2].onclick = function(){
  mainImge.src = smallImge[2].src;
}
smallImge[3].onclick = function(){
  mainImge.src = smallImge[3].src;
}

