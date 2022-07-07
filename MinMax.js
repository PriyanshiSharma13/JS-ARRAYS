// Q10. Min and Max

// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
// The problem statement is simple- given 
// N
//  elements, find the minimum and maximum numbers among those elements.

function arrayMin(arr,N)
{
    let min = arr[1];
    for(let i=0; i<N; i++)
    {
        if(min > arr[i])
        {
            min = arr[i];
        }
    }
    return min;
};
console.log(arrayMin( [3,1,4,6,2,7], 6 ));
  
function arrayMax(arr,N)
{
    let max = arr[1];
    for(let j=0; j<N; j++)
    {
        if(max < arr[j])
        {
            max = arr[j];
        }
    }
    return max;
};
console.log(arrayMax( [3,1,4,6,2,7], 6 ));
