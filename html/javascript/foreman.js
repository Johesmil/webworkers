var result = document.getElementById("resultSpan");
var worker;

function stopWorking() {
    worker.terminate(); // Tell the worker to stop working.
    worker = undefined; // Fire the worker.
}

function browserSupportsWebWorkers() {
    if(typeof(Worker) !== "undefined") {
        // Yes! Web worker support!
        return true;
    } else {
        // Sorry! No Web Worker support..
        return false;
    }
}

function startWorking() {
    if (!browserSupportsWebWorkers()) {
        // What to do if browser doesn't support workers.
        return;
    }
    
    worker = new Worker("javascript/worker.js"); // Create a new worker object.
    worker.onmessage = function(event) { // Tell the foreman what to do when the worker response comes.
        result.innerHTML = event.data;
    };
    
    worker.onerror = function(event) { // Tell the foreman what to do when the work fails.
        result.innerHTML = "Error: " + event.message;
    };
    
    // This is another way of doing it.
    // worker.addEventListener("message", function (event) {
    //     count.innerHTML = event.data;
    // }, false);
    
    worker.postMessage(); // Tell the worker to start working.
}

function startCounting() {
    worker = new Worker("javascript/skilledWorker.js"); // Create a new worker object.
    worker.onmessage = function(event) { // Tell the worker what to do when the work order comes.
        result.innerHTML = event.data;
    };
    
    worker.onerror = function(event) { // Tell the worker what to do when the work fails.
        result.innerHTML = "Error: " + event.message;
    };
    
    worker.postMessage({ 'command': 'count', 'parameters': 1 }); // Tell the worker to start counting.
}

function startCalculating() {
    worker = new Worker("javascript/skilledWorker.js"); // Create a new worker object.
    worker.onmessage = function(event) { // Tell the worker what to do when the work order comes.
        result.innerHTML = event.data;
    };
    
    worker.onerror = function(event) { // Tell the worker what to do when the work fails.
        result.innerHTML = "Error: " + event.message;
    };
    
    worker.postMessage({ 'command': 'calculate', 'parameters': {'a': 5, 'b': 10 } }); // Tell the worker to calculate.
}

function startReading() {
    worker = new Worker("javascript/skilledWorker.js"); // Create a new worker object.
    worker.onmessage = function(event) { // Tell the worker what to do when the work order comes.
        result.innerHTML = event.data;
    };
    
    worker.onerror = function(event) { // Tell the worker what to do when the work fails.
        result.innerHTML = "Error: " + event.message;
    };
    
    worker.postMessage({ 'command': 'read', 'parameters': {'text': 'This is text the worker is supposed to read.'} }); // Tell the worker to read the text.
}