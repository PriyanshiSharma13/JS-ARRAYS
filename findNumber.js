// Q5. Find whether the number is present or not

// Write a program which takes an array as input from the user and a number.
// Check whether the number is present or not.

// Note: You have to complete Find_Num. No need to take any input.

const Find_Num = (array, N, M) => {
    let num = array.includes(M);
     if (num === true)
     {
         return 'YES';
     }
     else
     {
         return 'NO';
     }
 };
console.log(Find_Num( [1,2,3,4,5], 5 , 2 ));

// const Find_Num = (array,N,M) => 
// {
//     for(k=0; k<N; k++)
//     {
//         if (M == array[k]) {
//             return 'YES';
//         } else {
//             return 'NO';
//         }
//     }
// };
// console.log(Find_Num( [1,2,3,4,5], 5 , 2 ));
