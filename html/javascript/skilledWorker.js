self.onmessage = function (event) {
    messageHandler(event);
}

function messageHandler(event) {
    var command = event.data.command;
    var parameters = event.data.parameters;
    var action = actions[command];
    
    if (action) {
        action(parameters);
    }
    else {
        postMessage("Unknown command");
    }
}

var actions = {};
actions.count = function (parameters) {
    // Unpack parameters.
    var number = parameters;
    
    setTimeout(function () { // Call setTimeout to run function each 1000 ms.
        postMessage(number); // Message the foreman of the current number.
        number++; // Increment number.
        actions.count(number); // Recursively call the same function to increment number with each call.
    },100);
}

actions.calculate = function (parameters) {
    // Unpack parameters.
    var a = parameters.a;
    var b = parameters.b;
    
    var results = a + b; 
    postMessage(results);
}

actions.read = function (parameters) {
    // Unpack parameters.
    var results = parameters.text;
    
    postMessage(results);
}