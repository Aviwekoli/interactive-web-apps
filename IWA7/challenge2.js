// const nickname= "Timmy";
// const firstname = "Timothy";

// console.log("Good Morning, ${nickname} || {firstname}!")

const nickname= "Timmy";
const firstname = "Timothy";

if (nickname || firstname){
    console.log(`Good Morning, ${nickname || firstname}!`)
}
else{
    console.log("Good Morning!");
}