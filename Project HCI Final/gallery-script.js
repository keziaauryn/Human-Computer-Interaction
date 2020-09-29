var imgpopup = document.getElementById('myimgpopup');

var img = $('.image');
var imgpopupImg = $("#img01");
var captionText = document.getElementById("caption");
$('.image').click(function(){
    imgpopup.style.display = "block";
    var newSrc = this.src;
    imgpopupImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  imgpopup.style.display = "none";
}