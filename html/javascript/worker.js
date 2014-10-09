var i = 0;

function timedCount() {
    console.log("Worker says: Counting to " + i);
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();