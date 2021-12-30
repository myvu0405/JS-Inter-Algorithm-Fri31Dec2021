//Friday: Fibonacci Sequence
function nthFibo(n){

    if (n==0){
        return 0;
    }
    else if (n==1) {
        return 1;
    }

    let no1=0;
    let no2=1;
    let fibo=0;

    for (let i=2;i<=n;i++){
        fibo=no1+no2;
        no1=no2;
        no2=fibo;
    }

    return fibo;
}

console.log (nthFibo(11));