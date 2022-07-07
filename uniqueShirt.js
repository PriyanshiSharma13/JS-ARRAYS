// Q9. Unique Color Shirt

// Prepbuddy is very tasteful of clothes. 
// He has 
// N
//  numbers of shirts hanging in the hanger in his wardrobe.
// Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many 
// M
//  unique color shirts are left in the wardrobe. 
// Prepbuddy wants you to find 
// M
// .

// Note: As there are many shades of a color so consider integers as a color name.
// i.e, color of shirt is 0,1,2, … , N.

function Unique_Shirts (arr,N) {
    let shirts = 0;
    for(let x=0; x<N; x++)
    {
        let same = 0;
        for(let y=0; y<N; y++ )
        {
            if(arr[x] === arr[y])
            {
                same++
            }
        }
    if(same === 1)
        {
            shirts++
        }
    }
    return shirts;
}
console.log(Unique_Shirts( [3,2,4,1,2,3], 6 ));