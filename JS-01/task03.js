let login;
let password;

login = "Admin";
password = "Some password";

switch (login) {
 case"Admin": {
    switch (password) {
        case"Some password":{
            console.log("Welcome");
			break;
        }
        case "Other": {
            console.log("Wrong password");
            break;
        }
        default: {
            console.log("Canceled");
            break;
        }
    }
    break;
    }
    case "Other": {
		console.log("I don't know you");
		break;
	}
    default: {
		console.log("Canceled");
		break;
	}
}
