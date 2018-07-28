function myFirstApp(name,age){
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills(){
		let skills = ["html","css"];
		for (let i=0; i<skills.length; i++){
			alert("Я владею "+ skills[i]); 
					}
	}


showSkills();

function checkAge(){
	if (age>18){
		alert("You are able to enter this site");
	}
	else{
		alert("You are not able to enter this site");
	}
}
checkAge();
function calcPow(num){
let a = num*num;
alert(a)
}
calcPow(4);
}
myFirstApp("Аслан",21);