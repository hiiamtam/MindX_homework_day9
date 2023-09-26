const arr=[1,2,3,4,5,6,7,8,9,10,11,12];
let chan = [];
let le = [];

for (let i = 1; i < arr.length ; i ++) {
    if ( i % 2 === 0 ) {
        chan.push(i);
    }
    else {le.push(i);}
}
document.write("Số chẵn là : ", chan +'<br>' +" Số lẻ là : ", le);
