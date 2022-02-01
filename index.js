// like icons 

// 1- Select icons (return tableau fih el icons kol)
let likes = document.querySelectorAll(".fa");
// 2- Parcours du tableau (pour pouvoir acceder lel coeur wehed)
console.log(likes);
// 3-  AddEventListener'click'(ki issir click bch tsir une fonction)
for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", function () {
        if (likes[i].style.color === "black") {
            likes[i].style.color = "red";
        }
        else {
            likes[i].style.color = "black";
        }
    });
}


//incrementation 

// 1- Select btnplus
let btnplus = document.getElementsByClassName("plus-btn");
// select input (value)
let qt = document.getElementsByClassName("qt");
console.log(btnplus);
// 2- parcours du tableau (pour pouvoir acceder lil button + 1)
for (let i = 0; i < btnplus.length; i++) {
    // 3- addeventlistener 'click' (ki tsir un click bch tsir fonction increment)
    btnplus[i].addEventListener("click", function () {
        qt[i].value++;
        totalPrice();
    });

}

// decrementation
let btnminus = document.getElementsByClassName("minus-btn");
// quantite deja selectionne
// 2- parcours du tableau (pour pouvoir acceder lil button + 1)
for (let i = 0; i < btnminus.length; i++) {
    // 3- addeventlistener 'click' (ki tsir un click bch tsir fonction decrement)

    btnminus[i].addEventListener("click", function () {
        if (qt[i].value > 0) {
            qt[i].value--;
            totalPrice();
        }

    });


}

//Delete

let deletebtn = document.getElementsByClassName("delete");
for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", function () {
        deletebtn[i].parentNode.remove();
        totalPrice();
    });

}

function totalPrice() {
    let sum = 0;
    let prices = document.querySelectorAll(".prix")
    let qt = document.querySelectorAll(".qt");
    for (let i = 0; i < prices.length; i++) {
        sum += qt[i].value * prices[i].innerHTML;
    }
    document.getElementById("finalPrice").innerHTML = sum
}


