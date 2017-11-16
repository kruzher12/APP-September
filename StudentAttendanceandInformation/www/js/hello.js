var count;
var A1 = localStorage.setItem('A1',0);
var A2 = localStorage.setItem('A2',0);
var A3 = localStorage.setItem('A3',0);
var A4 = localStorage.setItem('A4',0);
var A5 = localStorage.setItem('A5',0);


function getName() {

localStorage.setItem("name", x);
    	document.forms["form1"]["1Present"].value="";
       	count = 0; 
}
document.addEventListener('click',function(e){
	var x = e.target.value;
	count = parseInt(count)+parseInt(1);
	if(x==null||x=='Ferrer_Present'){
		count--;
		localStorage.setItem(count,x);
	}
	else{
		localStorage.setItem(count,x);
	}

});
