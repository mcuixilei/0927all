(function(){
var video1=document.getElementById("video1");
var gg=document.getElementById("gg");

function playpause(){
	if(video1.paused){
		video1.play();
		gg.style.display="none";

	}else{
		video1.pause();
		gg.style.display="block";
	}
}
var btn=document.getElementsByTagName("button")[0];
btn.onclick=playpause;



function jingyin(){
	if (video1.muted==false) {
		video1.muted=true;

	}else{
		video1.muted=false;
	}
}
var btn1=document.getElementsByTagName("button")[1];
btn1.onclick=jingyin;

video1.onplay=console1;
function console1(){
	
	gg.style.display="none";
}
video1.onpause=function(){
	gg.style.display="block";
}
video1.onseeked=function(){
	// console.log('123');
}
video1.onseeking=function(){
	// console.log("456");
}
video1.onplaying=function(){
	// console.log('789');
}
video1.ontimeupdate=function(){
	// console.log('111');
}
video1.onvolumechange=function(){
	// console.log('222');
}
// video1.addEventListener("loadedmetadata", function(){
// 	video1.poster="555.jpg";
// })

var btnsrc=document.getElementsByTagName("button")[2];
btnsrc.onclick=function(){
	console.log(video1.currentSrc);
	console.log(video1.playbackRate);
	console.log(video1.buffered);
	console.log(defaultPlaybackRate);
}
var btncon=document.getElementsByTagName("button")[3];
btncon.onclick=function(){
	if (video1.controls==true) {
		video1.controls=false;

	}else{
		video1.controls=true;
	}
}
video1.ontimeupdate=function(){
	var a1=document.getElementById('a1');
	a1.innerHTML=parseInt(video1.currentTime);
}
video1.onended=function(){
	window.close();
}


}(window))