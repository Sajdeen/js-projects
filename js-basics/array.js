 const myArray =[0,1,2,3,4,5]
 const myHeroes = ["shaktiman","naggur"]

 const myArr4 = new Array(1,2,3,4)
 console.log(myArray[0]);

 //Array Methods

 myArray.push(6)

 myArray.push(7)
 myArray.pop()
 console.log(myArray);

 //myArray.unshift(9);
// myArray.shift()

//console.log(myArray.includes(9));
//console.log(myArray.indexOf(3));


//const newArr = myArray.join()
//console.log(myArray);
//console.log(newArr);


 console.log(myArray);

 //slice,splice

 const myn1 = myArray.slice(1,3)

 console.log("A", myArray);
 console.log(myn1);


 console.log("B", myArray);
 const myn2 = myArray.splice(1,3)
console.log(myn2);

const myn3 = myArray.splice(1,3)
console.log("C", myArray);
 
console.log(myn3);



//====+++array2---+++\\

const marvel_heroes = ["thor","Ironman","batman"]
const dc_heroes = ["superman", "flash", "batman"]

 marvel_heroes.push(dc_heroes)

<<<<<<< HEAD
 console.log(marvel_heroes);


=======
 //console.log(marvel_heroes);
 //console.log(marvel_heroes[3][1]);

 //const allHeros = marvel_heroes.concat(dc_heroes)
 //console.log(allHeros);

 const all_new_Heros = [...marvel_heroes, ...dc_heroes]

 //console.log(all_new_Heros);

 const  another_array = [1, 2, 3, [4,5,6], 6, [6,7, [4, 5]]];
 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);

 //const another_array = [1, 2, 3, [4, 5, 6], 6, [6, 7, [4, 5]]];
//const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);

>>>>>>> 3c89c3803c87bb3e1d8b83e750b3a78853f6e34d