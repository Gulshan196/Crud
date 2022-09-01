function
myFunction
(
obj
)
{

if(obj)
{

console.log({
fn:obj.fn,
ln:obj.ln,
...(obj.size ?  {size:obj.size + 'cm'} : {}),
...(obj.weight ? {weight:obj.weight +'kg'}:{})
});
}



else{

    throw new Error('Code nhi chalega');
    }
}

myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67,email:'gk2077@gmail.com'})
myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
