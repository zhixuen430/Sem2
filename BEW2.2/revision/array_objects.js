const anArray = [10,20,30,40]

const anObject = {
    a: 10,
    b: 20,
    c: "Some words",
    d: [50,60,70,80]
}

const anotherArray = [
    anObject,
    {
        id: 101,
        name: "Check"
    },
    {
        oID: 203,
        name: "This"
    },
    [
        304,
        "Out"
    ]
]

console.log(anotherArray[0].a)
console.log(anotherArray[0].d[2])
console.log(anotherArray[3][0])