const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc, currval){
//    console.log(`acc: ${acc} and currval: ${currval}`);
   
//     return acc +currval
// },0)

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingcart = [
    {
        itemName :"js course",
        price:2999
    },

    {
        itemName :"fd course",
        price:8999
    },
    {
        itemName :"sd course",
        price:6999
    },
    {
        itemName :"pe course",
        price:99999
    },
    {
        itemName :"ml course",
        price:8999
    },
    {
        itemName :"ds course",
        price:4299
    },
    {
        itemName :"py course",
        price:2999
    },
]

const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetopay);
