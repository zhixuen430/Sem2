// Write me a for loop that console logs from 1 - 5

for(let i = 1;i <= 5;i++){
    console.log(i)
}

// Using the same loop,can use 6 instead of 5 but still achieve
// the same result

for(let i = 1;i < 6;i++){
    console.log(i)
}

// WHILE LOOP
// write me a while loop that make you do push-ups for 20 times

let i = 1;
while(i <= 20){
    console.log("You did " + i + " push-ups!")
    i++;
}

// Loops with arrays

let fruits = ["Apple","Banana","Orange"]
for(let fruit of fruits){
    console.log(fruit)
}
// This ia an example of an array for...of loop

// Loops with objects

const user = {name: "Alex", roles: "Admin"}
Object.values(user).forEach((prop) => {
    console.log(prop)
})
// More similar version to for..of
for(const [key,value] of Object.entries(user)){
    console.log(`${key}: ${value}`)
}
// Array of object interaction with loops
const listOfUser = [
    {
        name: "Alex",
        age: "27",
        role: "Senior Software Developer",
        experience: 60
    },
    {
        name: "James",
        age: "24",
        role: "Network Enginner",
        experience: 24
    },
    {
        name: "Alicia",
        age: "22",
        role: "Software Developer",
        experience: 24
    },
]

// Ouput the user's name,age,role and experience
for(const user of listOfUser){
    console.log(`This user's name is ${user.name}`)
    console.log(`This user is ${user.age} years old`)
    console.log(`This user's role is ${user.role}`)
    console.log(`This user has ${user.experience} months of experience`)
}

// Modify the code above,feel free to add anything,but I want the 
// amount of experience displayed to be listed as years and months



for(const user of listOfUser){
    let years = Math.floor(user.experience / 12);
    let months = user.experience % 12;
    if(months == 0){
        console.log(`${user.name} has ${years} years of experience`)
    }else{
        console.log(`${user.name} has ${years} years and ${months} months of experience`)
    }
}