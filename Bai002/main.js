const arr = [2,3,4,6,8,10]
document.write(arr + "<br>");

let chan = [];
let le = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        chan.push(arr[i]);
    }
    else { 
        le.push(arr[i]);
    }
}

if (le.length < chan.length) {
    document.write(le);
}
else {
    document.write(chan);
}

