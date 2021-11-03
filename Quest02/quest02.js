let number = process.argv[2];

if(number === undefined || number === "0"){
    console.log("wrong input!!!!")
    process.exit(1)
}

let whiteSpaceNumber = number -1;
let starNumber = 1;

for(let i = 0; i < number; i++) {
    
    for(let j = 0; j < whiteSpaceNumber; j++) {
        process.stdout.write(" ");
    }
    for(let k = 0; k < starNumber; k++) {
        process.stdout.write("*");
    }

    whiteSpaceNumber = whiteSpaceNumber - 1
    starNumber = starNumber + 2
    process.stdout.write("\n");
}
