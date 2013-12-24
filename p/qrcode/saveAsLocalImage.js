function saveAsLocalImage(eleId) {
 var myImage = document.getElementById(eleId);
 var image = myImage.toDataURL("image/png").replace("image/png","image/octet-stream");
 window.location.href = image;
}