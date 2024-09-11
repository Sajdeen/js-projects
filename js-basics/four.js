const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){
  //  console.log(`${key} shortcut is for ${myObject[key]}`);
} 

const programming =["js","rb", "py", "java", "cpp"]

for (const key in programming){
 //   console.log(programming[key]);
}


//Map
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES PF AMERICA")
map.set('FR', "FRANCE")

for(const key in map){
    console.log(key); 
}