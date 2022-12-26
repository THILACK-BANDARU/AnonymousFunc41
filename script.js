// Anonymous function

// anonymous range function to generate the array of values in the range
const range= function (a,b){
    let arr=[];
    for(let i=0;i<(parseInt(b)-parseInt(a));i++){
        // console.log(a,i);
        arr.push(a+i);
    }
    return arr;
}

//1. Print odd numbers in an array using anonymous function
const arr1=range(1,20);
const getOdd=function (arr){
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(getOdd(arr1))   

// 2. Convert all the strings to title caps in a string array using IIFE
let strArr="guvi is one ofo best e-platforms".toLowerCase().split(' ');
(function (strArr){
    for(let i=0;i<strArr.length;i++){
        strArr[i]=strArr[i][0].toUpperCase()+strArr[i].slice(1);
        // console.log(strArr[i]);
    }
    const str2=strArr.join(" ");
    console.log(str2);
})(strArr)

// 3. Sum of all numbers in an array using anonymous
const sumArr=function (arr){
    let sum=0;
    for(let i=0;i<arr1.length;i++){
        sum+=arr[i];
    }
    console.log(`sum of array is:${sum}`);
}
sumArr(arr1);

// 4. Return all the prime numbers in an array
const getPrime=function (arr){
    let prime=[];
    for(let ele of arr){
        let isPrime=true;
        for(let i=2;i<=ele/2;i++){
            if(ele && ele%i==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime && ele>1){
            prime.push(ele);
        }
    }
    return prime;
}
const primeNumbers=getPrime(arr1);
console.log(`prime numbers in the array are:${primeNumbers}`);

// 5. Return all the palindromes in an array
let strArr1="guvi is one ofo best e-platforms in mosom".toLowerCase().split(' ');

const IsPalindrome=function(arr){
    let isSame=true;
    let palindromes=[];
    for(let ele of arr){
        // console.log(ele,palindromes);
        for(let j=0;j<=(ele.length)%2;j++){
            if(ele[j]!=ele[(ele.length)-1-j]){
                isSame=false;
                break;
            }
            else{
                isSame=true;
                continue;
            }
        }
        if(isSame){
            palindromes.push(ele);
        }
    }
    return palindromes;
}
console.log(`Palindromes in the Array are:${IsPalindrome(strArr1)}`); 

// 6. Return median of two sorted arrays of the same size
const arr2=arr1.filter(x=>x%2==0);

const getMedian=function(arr){
    arr.sort(function(a,b){return a-b});
    if(arr.length%2==0){
        return ((arr[arr.length/2])+arr[arr.length/2-1])/2;
    }
    else{
        return arr[(arr.length-1)/2];
    }
}
console.log(getMedian(arr1),getMedian(arr2));

// 7. Remove duplicates from an array using IIFE(Immediately invoked Function Expression)-> the same task can be achieved using splice operation [array.splice(start, deleteCount, newElem1, newElem2, ..., newElemN);]

(function(arr){
    arr.sort(function(a,b){
        return a-b
    });
    let count=1;
    let temparr=[];
    for(let i=0;i<arr.length;i++){
        count=1;
        for(let j=0;j<=temparr.length;j++){
            if(arr[i]==temparr[j]){
                count++;
                break;
            }
        }
        if(count==1){
            temparr.push(arr[i]);
        }
    }
    console.log(`array after removing duplicates:${temparr}`);
})(arr1)

// 8. Rotate an array by k times using anonymous function

const rotateArr=function(arr,k){
    let firstElem;
    for(i=0;i<k;i++){
        let tempArr=[];
        firstElem=arr[0];
        tempArr=arr.slice(1);
        // console.log(`temparr after slicing is ${tempArr} `);
        tempArr.push(firstElem);
        arr=tempArr;
        return arr;
        // console.log(`array after ${i} rotation is:${tempArr}`);
    }
}
console.log(`the rotated array is${rotateArr(arr2,3)}`); 


// Arrow Functions

// Print odd numbers in an array
// const arr1=range(1,20);
const getOdd2=((arr)=>{
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
})

console.log(getOdd2(arr1));   

// Convert all the strings to title caps in a string array
let strArr2="guvi is one ofo best e-platforms".toLowerCase().split(' ');
(((strArr)=>{
    for(let i=0;i<strArr.length;i++){
        strArr[i]=strArr[i][0].toUpperCase()+strArr[i].slice(1);
        // console.log(strArr[i]);
    }
    const str2=strArr.join(" ");
    console.log(str2);
}))(strArr2)

// Sum of all numbers in an array

const sumArr2=((arr)=>{
    let sum=0;
    for(let i=0;i<arr1.length;i++){
        sum+=arr[i];
    }
    console.log(`sum of array is:${sum}`);
})
sumArr2(arr1);

// Return all the prime numbers in an array
const getPrime2=((arr)=>{
    let prime=[];
    for(let ele of arr){
        let isPrime=true;
        for(let i=2;i<=ele/2;i++){
            if(ele && ele%i==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime && ele>1){
            prime.push(ele);
        }
    }
    return prime;
})
const primeNumbers2=getPrime2(arr1);
console.log(`prime numbers in the array are:${primeNumbers2}`);

// Return all the palindromes in an array
let strArr3="guvi is one ofo best e-platforms in mosom".toLowerCase().split(' ');

const IsPalindrome2=((arr)=>{
    let isSame=true;
    let palindromes=[];
    for(let ele of arr){
        // console.log(ele,palindromes);
        for(let j=0;j<=(ele.length)%2;j++){
            if(ele[j]!=ele[(ele.length)-1-j]){
                isSame=false;
                break;
            }
            else{
                isSame=true;
                continue;
            }
        }
        if(isSame){
            palindromes.push(ele);
        }
    }
    return palindromes;
})
console.log(`Palindromes in the Array are:${IsPalindrome2(strArr3)}`); 