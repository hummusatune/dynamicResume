var name = "Mike Mitchell";
var formattedName = HTMLheaderName.replace(/%data%/i, name);
var role = "Front End Developer";
var formattedRole = HTMLheaderRole.replace(/%data%/i, role);
var bio = {
	"name" : "Mike Mitchell",
	"role" : "Front End Developer",
	"contacts" : { 
		"email" : "mmitchell@weber.edu",
		"github" : "hummusatune",
		"mobile" : "801-389-5553",
		"location" : "Utah"
	},
	"pic" : "images/fry.jpg",
	"welcome" : "Hello! I'm Mike.",
	"skills" : [
		"HTML", "CSS", "JavaScript", "stuff", "things"
	]
}
var workHistory = {}
var education = {}


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);