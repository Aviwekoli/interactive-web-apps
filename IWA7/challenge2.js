const nickname= "Timmy";
const firstname = "Timothy";

if (nickname || firstname){
    console.log(`Good Morning, ${nickname || firstname}!`)
}
else{
    console.log("Good Morning!");
}