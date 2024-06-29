var students={

    name:"roshan",
    course:"django",
    degree:"bca",
    total:450,
    points:25

}

// console.log(students.name);

// if("total" in students){

//     console.log("present");
// }

// else{

//     console.log("not present");
// }

if("points" in students){

    // update
    students.points+=10
}

else{

    // add
    students.points=15
}

console.log(students);