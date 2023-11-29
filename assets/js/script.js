//script


// information for travellers
alert("hi, i'm here just to help and let you know some infos:   1 - you're paying 0.21€ each km.    2 - 20% discount is applied on teen below 18 years old  3 - 40% discount is applied on elderly over 65 years old.");

// checking for discount rights
let y;
let n;
let p_price;
let tot_price;
let discount;
let n_coach;

//getting button "generate"
const generateButton = document.querySelector('p.p_bottom');

console.log(generateButton.classList); //just for check purpose

generateButton.addEventListener('click',function(){

    //getting name
    const nome = document.querySelector('input.name').value;

    console.log('name: ', nome);

    //getting km
    const km = document.querySelector('input.km').value;

    console.log('km: ', km);

    //getting age
    const age = document.querySelector('input.age').value;

    console.log('age: ', age);


    //getting p.name
    const passenger_name = document.querySelector('p.p_name');
    passenger_name.innerText = `${nome}`;

    //getting coach
    const coach = document.querySelector('p.p_coach');

    //price without discounts
    let price;
    price = (km * 0.21).toFixed(2);

    console.log(`without discounts ${price} €`);

if (age < 18) {
    console.log('I\'m talking to a young chick.');

    //CP CODE
    const cp = document.querySelector('p.p_code');

    rand = Math.floor(Math.random() * 100000);

    cp.innerText = `${rand}`;
    //END CP CODE

    discount = document.querySelector('p.p_offer');
    discount.innerText = '20% discount';
    tot_price = (price * 0.8).toFixed(2);
    console.log(tot_price);
    
    //coach generator
    if (price <= 15) {
        n_coach = Math.floor((Math.random() * 10) - 5);
    }
    else {
        n_coach = Math.floor((Math.random() * 10) + 5);
    }
    coach.innerText = `${n_coach}`;
    //end coach generator

    p_price = document.querySelector('p.p_price');
    p_price.innerText = `${tot_price}`;

}
else if (age > 65) {
    console.log('I\'m talking to a skilled bro.');

    //CP CODE
    const cp = document.querySelector('p.p_code');

    rand = Math.floor(Math.random() * 100000);

    cp.innerText = `${rand}`;
    //END CP CODE

    discount = document.querySelector('p.p_offer');
    discount.innerText = '40% discount';
    tot_price = (price * 0.6).toFixed(2);
    console.log(tot_price);

     //coach generator
     if (price <= 15) {
        n_coach = Math.floor((Math.random() * 10) - 5);
    }
    else {
        n_coach = Math.floor((Math.random() * 10) + 5);
    }
    coach.innerText = `${n_coach}`;
    //end coach generator

    p_price = document.querySelector('p.p_price');
    p_price.innerText = `Tot. in euros: ${tot_price}`;
}
else {
    console.log('bruh you ain\'t any rights :( ');

    //CP CODE
    const cp = document.querySelector('p.p_code');

    rand = Math.floor(Math.random() * 100000);

    cp.innerText = `${rand}`;
    //END CP CODE

    discount = document.querySelector('p.p_offer');
    discount.innerText = 'No discounts';
    console.log(tot_price);

     //coach generator
     if (price <= 15) {
        n_coach = Math.floor((Math.random() * 10) - 5);
    }
    else {
        n_coach = Math.floor((Math.random() * 10) + 5);
    }
    coach.innerText = `${n_coach}`;
    //end coach generator

    p_price = document.querySelector('p.p_price');
    p_price.innerText = `Tot. in euros: ${price}`;
}
    alert('have a nice trip. enjoy!');
})



// if (age < 18) {
//     console.log('I\'m talking to a young chick.');

//     //CP CODE
//     const cp = document.querySelector('p.p_code');

//     rand = Math.floor(Math.random() * 100000);

//     cp.innerText = `${rand}`;
//     //END CP CODE

//     discount = document.querySelector('p.p_offer');
//     discount.innerText = '20% discount';
//     tot_price = (price * 0.8).toFixed(2);
//     console.log(tot_price);
    
//     //coach generator
//     if (temp_price <= 15) {
//         n_coach = Math.floor((Math.random() * 10) - 5);
//     }
//     else {
//         n_coach = Math.floor((Math.random() * 10) + 5);
//     }
//     coach.innerText = `${n_coach}`;
//     //end coach generator

//     temp_price = document.querySelector('p.p_price');
//     temp_price.innerText = `Tot. in euros: ${tot_price}`;
    
// }
// else if (age > 65) {
//     console.log('I\'m talking to a skilled bro.');

//     //CP CODE
//     const cp = document.querySelector('p.p_code');

//     rand = Math.floor(Math.random() * 100000);

//     cp.innerText = `${rand}`;
//     //END CP CODE

//     discount = document.querySelector('p.p_offer');
//     discount.innerText = '40% discount';
//     tot_price = (price * 0.6).toFixed(2);
//     console.log(tot_price);

//      //coach generator
//      if (temp_price <= 15) {
//         n_coach = Math.floor((Math.random() * 10) - 5);
//     }
//     else {
//         n_coach = Math.floor((Math.random() * 10) + 5);
//     }
//     coach.innerText = `${n_coach}`;
//     //end coach generator

//     temp_price = document.querySelector('p.p_price');
//     temp_price.innerText = `Tot. in euros: ${tot_price}`;
// }
// else {
//     console.log('bruh you ain\'t any rights :( ');

//     //CP CODE
//     const cp = document.querySelector('p.p_code');

//     rand = Math.floor(Math.random() * 100000);

//     cp.innerText = `${rand}`;
//     //END CP CODE

//     discount = document.querySelector('p.p_offer');
//     discount.innerText = 'No discounts';
//     console.log(tot_price);

//      //coach generator
//      if (temp_price <= 15) {
//         n_coach = Math.floor((Math.random() * 10) - 5);
//     }
//     else {
//         n_coach = Math.floor((Math.random() * 10) + 5);
//     }
//     coach.innerText = `${n_coach}`;
//     //end coach generator

//     temp_price = document.querySelector('p.p_price');
//     temp_price.innerText = `Tot. in euros: ${price}`;
// }