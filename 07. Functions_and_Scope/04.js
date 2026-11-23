function first() {
    var number = 100;
}
function second() {
    console.log(number);  // Number s not define
}
first();
second();


// Number is not define , because var is is a functional scope , it is not accessible out of it's function