
var setBtn=document.getElementsByClassName("set")[0];
setBtn.onclick=function setValue(){
	var num=Math.floor(10*Math.random()+1);
	var inputValue=document.getElementsByTagName("input")[0].value;
	var txt=document.getElementsByClassName("text")[num];
	txt.innerHTML=inputValue;
	var timer=null;
	clearInterval(timer);
	if(txt.offsetLeft==200){
		clearInterval(timer);
	}else{
		setInterval(function(){
			txt.style.left=txt.offsetLeft-10+"px";
		},40)
	}

}
var clearBtn=document.getElementsByClassName("clear")[0];
clearBtn.onclick=function removeValue(){
	var num=Math.floor(10*Math.random()+1);
	var inputValue=document.getElementsByTagName("input")[0].value;
	var cNode=document.getElementsByClassName("screen").childNodes;
	cNode.removechild();
}

