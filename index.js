// function receivesAFunction (postRunActivity){
//     runFiveMiles();
// }


function receivesAFunction (postRunActivity) {
    postRunActivity();
};
receivesAFunction();

function returnsANamedFunction() {
    return function Brian() {
      console.log("My name is Brian");
    };
}


function returnsAnAnonymousFunction() {
    return function () {
      console.log("I have no name");
    };
}