const name = ["nico", "hj", 'jh', 'hh'];
const sayhello = (name) =>{
    console.log("hello, my name is "+ name);
}

for(let i = 0; i<name.length; i++){
    sayhello(name[i]);
}