let act = document.getElementById('actual')


// insert new text 
act.insertAdjacentText('afterbegin','Before Beggining...') //after element starting text add
act.insertAdjacentText('beforebegin','Before Beggining...') //before element starting text add
act.insertAdjacentText('afterend','Before Beggining...') //after element ending text add
act.insertAdjacentText('beforeend','Before Beggining...') //before element ending text add

// let new1 = document.createElement('p'); 
// new1.innerHTML = "before element"

// insert new element
act.insertAdjacentElement('afterbegin',new1);