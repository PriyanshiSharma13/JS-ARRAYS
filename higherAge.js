// Q6. Higher Age

// You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18(18 included).

// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge function. No need to take any input.

const highAge = (N, Arr) => 
{
    let age=[];
    let k = 0;
    for(let i=0; i<N ; i++){
        if(Arr[i] >= 18){
            age[k] = Arr[i];
            k++
        }
    }
    return age;
};
console.log(highAge( 6,[11, 23, 3, 45, 72, 68] ));

// const higherAge = (N, Arr) => 
// {
//     let filteredAges = Arr.filter(N => N > 18 );
//     return filteredAges;
// };
// console.log(higherAge( 6,[11, 23, 3, 45, 72, 68] ));