console.log('Before');
// getUser(1)
//       .then(user=> getRepository(user.gitUsername))
//       .then(commits=> displayCommits(commits))
//       .catch(err=> console.log('Error', err.message));




async function displayCommits(){
     //Async  Await Approach
     try{
 const user= await getUser(1);
 const repos= await getRepository(user.gitUsername);
 const commits= await getCommits(repos);
 console.log(commits);
}
catch(err){
    console.log('Error', err.message);
}
}


displayCommits();


function getCommits(a){
   return {...a};
}
function getUser(id){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Reading a user from database...');
            resolve({id: id, gitUsername:'gautamzzz'});
        }, 2000)
    })
    
}

function getRepository(username){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Calling github api...");
        resolve(['repo1', 'repo2', 'repo3']);
    }, 2000)
})
   
}
console.log('After');