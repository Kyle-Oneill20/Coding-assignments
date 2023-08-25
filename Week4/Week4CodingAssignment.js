//question 1//
var ages= [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages)
console.log(ages[ages.length-1]-ages[0])
ages.push(12)
console.log(ages)
console.log(ages[ages.length-1]-ages[0])
var total = 0;
for(var i = 0; i < ages.length; i++) {
    total += ages[i];
} 
var avg = total / ages.length;
console.log(avg)
//question 2//
var totalLetter = 0
var names=[ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
for(var i = 0; i<names.length; i++){
    totalLetter += (names[i].length)
    console.log(totalLetter)
}
var avgLetter = totalLetter/ (names.length-1)
console.log(avgLetter)
names.join(" ")
for(var i = 0; i<names.length; i++){
    console.log(names)
}
//question 3//
console.log("array.lenth-1")
//question 4//
console.log('array.length[0]')
//question 5//
let namelengths=[]
var names=[ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
for(var i = 0; i<names.length; i++){
    totalLetter=(names[i].length)
    console.log(totalLetter)
    namelengths.push(totalLetter)
    console.log(namelengths)
}
//question 6//
var sum = 0
for(var i = 0; i < namelengths.length; i++){
sum += i
} console.log(sum)
// question 7 

const funct1 = (word, n) => {
    var string1 = word
    for(i=0; i<n; i++){
     console.log(string1)
     string1+=word}
   
   
} 
console.log(funct1('Hi',4))
// question 8
const fullName=( firstName, lastName)=> {return `${firstName} ${lastName}`}
console.log(fullName('Kyle' ,'Oneill'))
//question 9//
ttl=0
let numArray= [25,25,25,30]
const greaterThan=(Array)=>{
  for(i=0;i<numArray.length;i++){
  ttl+=numArray[i]
  console.log(ttl)
} console.log(ttl>100)
}
console.log(greaterThan(numArray))
//question 10//
var total = 0
let num=[1,4,27,39,45,39,3]
function average(array){
    for(i=0;i<num.length;i++){
        total+= num[i]
    }
    var avg = total / num.length
    return avg
} console.log(average(num))
//question 11//
var total = 0
var ttl = 0
var arr1=[2,15,29,15,27,98,67,25,30]
var arr2=[4,34]
const greaterAvg=(array1, array2)=>{
    for(i=0;i<arr1.length;i++){
        total+= arr1[i]
    } var avg1 = total/arr1.length
    console.log(avg1)
    for(i=0;i<arr2.length;i++){
        ttl+=arr2[i]
    } var avg2 = ttl/arr2.length
    console.log(avg2)
return avg1> avg2

} 
console.log(greaterAvg(arr1,arr2))
//question 12//
function willBuyDrink(boolean,number){
    if(boolean===true && number > 10.50){
        return true
    } else {
        return false
    }
} 
console.log(willBuyDrink( true , 11.51))
//question 13//
var win = false
function mine(boolean){
    if(boolean==true){
        return "Happy!:)"
    }else if(boolean==false){
        return "Sad and Frustrated:("
    }else {
        return "Neutral Feelings right now!"
    }
    
} console.log(mine(win))
// I compete in a Fighting game in my free time and this function is used to print out my current feelings about the game.//








