function setSkills(target){
	target.prototype.skills = "cricket";
}

/*@setSkills is the class decorator, decorators is denoted with @ symbol*/
@setSkills
class player{
	skills : String;
}

var sachin = new player();
console.log(sachin.skills);