let login;
let password;

login = "Admin";
password = "Some password";

if(login=="Admin") {
    if(password =="Some password") {
        console.log("Welcome");
    }
    else if(password == "Other") {
        console.log("Wrong password");
    }
    else{
        console.log("Canceled");
    }
}
    else if (login == "Other") {
        console.log("Wrong person");
    }
    else {
        console.log("Canceled");
    }