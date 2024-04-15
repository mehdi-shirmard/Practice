//data of person 
const massMark = 78;
const heightMark = 1.69;
const massjohn = 92;
const heightJohn =  1.95;
//how to calc bmi = mass / height **2
const BMIMark = massMark / heightMark **2;
const BMIJohn = massjohn / heightJohn **2;
if(BMIMark > BMIJohn){
    console.log(`mark's bmi(${BMIMark}) higher than john's(${BMIJohn})`)
}else{
    console.log(`john bmi(${BMIJohn}) higher than mark's(${BMIMark})`)
}

