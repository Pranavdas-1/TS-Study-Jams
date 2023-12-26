function registerUser (name:string,birthYear:number){
   if(checkAge(birthYear)=== true){
    console.log(name+" Registration Success!")
   }
   else{
    console.log(name+" Registration Failed!")
   }
}
function checkAge(birthYear:number){
    if(birthYear<=2005)
        return true
    else
        return false
}
registerUser("Pranav",2000)
//  OUTPUT:"Pranav Registration Success!" 
