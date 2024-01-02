//obj literals 
const mysynb = Symbol("key1")
const jsUser = {
    "full name": "shoyab khan",
    name: "shoya",
    age: 19,
    location: "Dehradun",
    loged: true,
    [mysynb]: "key11"

}
//access values of any obj 

console.log(jsUser["full name"]);
console.log(jsUser[mysynb]);

jsUser.location = "uttarakhand"

console.log(jsUser["location"]);