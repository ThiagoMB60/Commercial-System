function go(loc) { 
	document.getElementById('iframePaginas').src = loc; 
}

function toggleMenu(){
	var obj = document.getElementById('menu');
	
	if(obj.style.left === "-65px"){
		obj.style.left = "0px";
	}else{
		obj.style.left = "-65px";
	}
}
