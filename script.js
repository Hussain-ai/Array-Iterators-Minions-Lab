const minions = [
    'bob',
    'kevin',  
    'stuart',
    'dave',
    'jerry',
    'kevin',
    'mark',
    'tim',
    'phil',
    'carl'
  ];
  minions.forEach(function(element) {
    console.log(element + " - here")
  })
  console.log('----------------------')
  
  const capitalizeMinions = minions.map(function(element) {
    if (element !== 'kevin') {
      return element.toUpperCase()
    }else {
      return element
    }
  })
  console.log(capitalizeMinions)
  //---
  
  // const firstCapital = minions.map(function(element){
  //   if (element !== 'kevin'){
  //     return element.charAt(0).toUpperCase()+ element.slice(1);
  //   }else{
  //     return element
  //   }
  // })
  // console.log(firstCapital)
  
  
  
  console.log('----------------------')
  //---
  const isCapitalized = capitalizeMinions.every(function(element){
     return element.charAt(0) === element.charAt(0).toUpperCase()
  }) 
  console.log(isCapitalized)

  //below are array itteratiors
  

  // const friends = ["Kareem", "Alex", "Nahid", "Ahlam"]

// for(let i=0; i<friends.length; i++) {
//   console.log("Hello "+friends[i])
// }


// cool way

// const greetFriend = (friend) => {
//   console.log("Hello "+friend)
// }
// friends.forEach(greetFriend)





// const foods = ["Kimchi", "Shawarma", "Madgout"]
// for(let i=0; i<foods.length; i++) {
//   console.log("I like "+foods[i])
// }

// foods.forEach(function(food, i) {
//   foods[i] = food.toUpperCase()
// })

// console.log(foods)



// const friends = ["Nevin Mathew", "Joel James", "Mojo jomo", "Fahad Sheikh"]

// // const loudFriends = []

// for(let i=0; i<friends.length; i++) 
//    loudFriends.push(friends[i].toUpperCase())
// }

// console.log(loudFriends)


// const loudFriends = friends.map((friend)=> {

//   return friend.toUpperCase()
// })

// console.log(loudFriends)


// const splitNames = friends.map((friend) => {
//   return {
//     first: friend.split(" ")[0],
//     last: friend.split(" ")[1]
//   }
// })
//  console.log(splitNames)






//  const friends = ["Nevin", "Joel", "Mojo", "Fahad"]


// const evenFriends = friends.filter((name) => {
//   return name.length%2===0
// })

// console.log(evenFriends)

// const oddFriends = friends.filter((name) => {
//   return name.length%2!==0
// })

// console.log(oddFriends)


// const pets= [{name: "fluffy", age: 2, type: "cat"}, {name: "fido", age: 1, type: "dog"}, {name: "nelly", age: 64, type: "parrot"}, {name: "benedict", age:1, type: "sea cucumber"}, {name: "magic", age: 9, type: "cat"}]

// const dogs = pets.filter((pet)=>{
//   // if(pet.type==="dog") return true
//   return pet.type==="dog"
  
// })

// console.log(dogs)


// const olderPets = pets.filter((pet) => {
//   return pet.age>1
// })

// console.log(olderPets)



// const nums  = [1,2,3,4]

// const sum = nums.reduce((total, current)=>{
//     return total + current
  
// })


// console.log(sum)

// const nums  = [1,2,3,4]

// const add = (total, current)=>{
//     return total + current
  
// }

// const sum = nums.reduce(add, 42)

// console.log(sum)


// console.log(sum)