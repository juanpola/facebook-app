var database = [
	{
		username: "juan",
		password: "password"
	},
	{
		username: "kevin",
		password: "password2"
	},
	{
		username: "kelly",
		password: "password3"
	},
];

var newsfeed = [
	{
		username: "bobby",
		timeline: "I am so tired to day",
	},
	{
		username: "ron",
		timeline: "I am so tired to day",
	},
	{
		username: "kevin",
		timeline: "I am so tired to day",
	},
];

function isUserValid (username, password) {
	for (var i=0; i < database.length; i++){
		if(database[i].username === username && 
			database[i].password === password) {
			return true
		} 
	}
			return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed)
	} else {
		alert("Sorry wrong password")
	}
};

var userNamePrompt = prompt("What is your name?");
var passwordPrompt = prompt("What is your password")

signIn(userNamePrompt, passwordPrompt);















