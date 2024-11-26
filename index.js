function receivesAFunction(spy){
    spy();
}



function returnsANamedFunction(){
    return function named() {
        console.log("I am Michael.")
}}



function returnsAnAnonymousFunction(){
    return function() {
        console.log('I am nobody!')
      }
}