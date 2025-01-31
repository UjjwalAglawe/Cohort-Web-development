function arr(num: number[])
{

}

interface User{
    firstName: string,
    age: number
}


function filteredUsers(num:User[])
{
    let ans=[];

    for(let i=0;i<num.length;i++)
    {
        if(num[i].age>18){
            ans.push(num[i]);
        }
    }
    return ans;
}

const filtered= filteredUsers([
    {
        firstName: "Ujjwal",
        age:21,
    },
    {
        firstName: "Mohit",
        age:4,
    }
])

filteredUsers(filtered);

console.log(filteredUsers(filtered));
