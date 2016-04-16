var name = "Mike Mitchell";
var formattedName = HTMLheaderName.replace(/%data%/i, name);

var role = "Front End Developer";
var formattedRole = HTMLheaderRole.replace(/%data%/i, role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);