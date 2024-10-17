//Immediately Invoked  function expression 

// () ()

(function One(){
    //named IIFE
    console.log('DB coneected');
})();
// ; is mantatory for excutation of 2nd IIFE
((name)=>{
    console.log(`DB connected ${name}`);
})("Prashant")
