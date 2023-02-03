//Question

// var items = document.querySelectorAll('.item');

// for (var i = 0; i < items.length; i++) {
//     items[i].addEventListener('click', function () {
//         console.log('You clicked on button # ' + i);
//     });
// }

//Pre-ES6

var items = document.querySelectorAll('.item');

for (var i = 0; i < items.length; i++) {
    (function (index) {
        items[index].addEventListener('click', function () {
        console.log('You clicked on button # ' + index);
        });
    })(i);
}

//Post-ES6

const items = document.querySelectorAll('.item');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        console.log(`You clicked on button # ${i}`);
    });
}