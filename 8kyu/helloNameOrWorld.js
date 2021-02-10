// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String;

//Sudo code:
//write a function hello
//function returns "Hello, Name!"
//function parameters (name)
//we want to make sure the name prints capital first letter and rest lower case
//if there is no name, print "Hello, World!"

function hello(name) {
    if (!name) {
        return "Hello, World!";
    }
    let newName = name[0].toUpperCase() + name.slice(1).toLowerCase();

    return `Hello, ${newName}!`;
}