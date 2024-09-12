const coding = ["js",'php','c++','c','python']

coding.forEach(function(val) {
 //  console.log(`coding: ${val}`)
   // console.log(val);
});

//coding.forEach( (item) =>{
   // console.log(item);
//}
//)

function printMe(item){
   // console.log(item);
}

coding.forEach(printMe)

//codinf.forEach( (item, index, arr)=>{
   // console.log
//})

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName:"javascript",
        languageFileName: ".js"
    },

    {
        languageName:"php",
        languageFileName: ".php"
    },

    {
        languageName:"java",
        languageFileName: ".java"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})