let class1 = document.getElementsByClassName("myclass");
//  => HTMLCollection

// let id1 = document.getElementById("myid");
// => first occurunce of id

// let query = document.querySelector("p");
// => first occurencce of element

// let all = document.querySelectorAll("p");
// => NodeList

// to add style in variable (id and query selector)
// query.style.backgroundColor = "green";

// querySelectorAll and class selector hold array like value of elements for add css in that
// 1) for querySelectorAll => NodeList (foreach loop)

    // all.forEach((par)=>{
    //     par.style.color = 'green'
    // })

//  2) for class selector => HTMLCollection 
    // convert into array using array object
    let arr = Array.from(class1)

    // apply forEach on that array
    arr.forEach((cls) => {
        cls.style.color = 'green'
    })