const findPrime = () => {
    const  num = 774;
    found = true;
    if(num < 2){
        console.log(`${num} is not a prime number`);
    }else{
        for (let i  = 2; i <= num - 1; i++)
        if (num % i == 0) {
            found = false;
            break;
        }
    if (found == true){
        console.log(`${num} is a prime number`);
    }
    else{
        console.log(`${num} is not a prime number`);
    }
}
}

findPrime();