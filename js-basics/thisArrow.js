const user ={
    username: "sajdeen",
    price: 199,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to our site!`);
    }
}
user.welcomeMessage(); 
 user.username = "Raghib"
 user.welcomeMessage()
// O/p: sajdeen , welcome to our site!


//  const cbai  = () => {
//     let username = "sajju"
//     console.log(this);
//  }
//  cbai() 