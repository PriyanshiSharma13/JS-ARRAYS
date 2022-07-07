// Q7. Increment the Array Elements

// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.

// You have to complete Inc_Arr. No need to take any input.

const Inc_Arr = (array,N) => 
{
    array.forEach(function(element){
        console.log(element + 1);
    })
};
Inc_Arr( [1,2,3,4,5], 5);

// const Inc_Arr = (array,N) => 
// {
//     let inc = [];
//     let k = 0;
//     for(let i=0; i<N; i++)
//     {
//         inc[k] = array[i]
//         result = inc.map(N => N+1);
//         k++
//     }
//     return result;
// };
// console.log(Inc_Arr( [1, 2, 3, 4, 5], 5 ));

// const Inc_Arr = (array, N) => {
//     let inc = array.map(array => (array+1)) 
//     return inc;
// };
// console.log(Inc_Arr( [1, 2, 3, 4, 5], 5 ));