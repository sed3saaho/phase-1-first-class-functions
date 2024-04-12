


function receivesAFunction(callback) {
    
    callback();
}


function returnsANamedFunction() {
    return namedFunction;
}


function returnsAnAnonymousFunction() {
    return function() {
        
    };
}

module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};