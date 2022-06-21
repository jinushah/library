//Console
// console.time("Your code Took");
// console.log("Hello Console");
// console.log(4+09);
// console.log(89);
// console.log(true);
// console.log([7,8,1,2,9]);
// console.table({Jinay:'Me',Marks:98
// });
// console.warn("Ths is a Warning");
// console.count('Jinay');
// console.timeEnd("Your code Took");
// console.assert(800>900,'Age >900 is not possible')
// console.error('This is an error')

//variable in js
//var,const,let

//1.var
// var name="Jinay Shah";
// var channel;
// var marks=90;
// channel="Jinu"

// console.log(name,/*channel,marks*/);

//2.const
// const owner="Jinay";
// let arr1=[12,24,36,48,60];
// let arr2=[4,5,6,7];
// arr1=arr1.entries(arr2);
// console.log(arr1);
// const fruit=0;
// console.log(owner,fruit);

//3.let

// {
//     let name="Rajkot"
//     console.log(name)
// }
// console.log(name);



//Type Conversion
// let myVar;
// myVar=String(34);
// console.log(myVar,(typeof myVar));

// let booleanVar=String(true);

// console.log(booleanVar,(typeof booleanVar));
// let date=String(new Date());
// console.log(date,(typeof date));

// let arr=String([10,12,14,16,18])
// console.log(arr,typeof arr)

// let i=75;
// console.log(i.toString(),(typeof i))

// // let str=parseInt("7878")
// // let str=Number("7878")
// // str=Number(false)
// str=Number([1,2,3,4,5,6,7,8,9])
// console.log(str,(typeof str)


//Type Coercion
// let mystr=parseInt("698");
// let mynum=90;
// console.log(mystr+mynum)







//String Objects
// let name;
// name="Jinay";
// let gm;
// gm="Good Morning "
// console.log(gm.concat(name))
// console.log(gm.length)
// console.log(gm.toLowerCase())
// console.log(gm.toUpperCase())
// console.log(gm[2])








// let html;
// html="<h1> My Name is Jinay Shah</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>"
// html=html.indexOf('h')
// html=html.lastIndexOf('h')
// // html=html.charAt(9)
// html=html.charCodeAt('>')

// console.log(html.substring(6,60))
// console.log(html.slice(0,-90))
// console.log(html.split('>'))
// console.log(html.replace("Lorem","ipsum"))
// console.log(html)





// let fruit1="Orange"
// let fruit="Kiwi"
// let myHtml=`'I like ${fruit1} and ${fruit}`;

// document.body.innerHTML=myHtml;





//Array

// let Name=["Jinay","Kirtan","Parth","Samveg","Priyanshu"];
// console.log(Name.length)
// console.log(Array.isArray(Name))
// Name[3]="Pooja";
// Name[4]="Masum";

// Name.push("Pooja")
// Name.push("Masum")
// console.log(Name+ ' '+Name.length)
// Name.pop("Pooja")
// Name.unshift("Karan")
// Name.shift("Jinay")
// Name.splice(3,6)

// let arr=[12,24,36,48]
// Name=Name.concat(arr)
// console.log(Name)

//object
// let obj={
//     first_name:'Jinay',
//     channel:'Jinay ',
//     isActive:true,
//     marks:[90,92,97,94]
// }

// console.log(obj)

//if-else
// let age = 18;
// if (age>=18){
//     console.log("Eligible For Voting")
// }
// else{
//     console.log("Not Eligibe for Voting")
// }

// let num1=900;
// let num2=109;
// let num3=8009;
// let vari=56;
// let doesdrive = false

// if(num1>num2 && num1>num3){
//     console.log("Num1 is Greater")
// }
// else if(num2>num3 && num2>num1){
//     console.log("Num2 is Greater")
// }
// else{
//     console.log("Num3 is Greater")
// }
// if(num1!=num2){
//     console.log("Go Back")
// }
// else{
//     console.log("Come")
// }
// if(typeof vari !== 'undefined'){
//     console.log("vari are defined")
// }
// else{
//     console.log("Vari is not defined")
// }

// if(doesdrive || age>=18){
//     alert("You can drive")
// }
// else{
//     alert("You cannot drive")
// }
// console.log(age>=18?"You Can Drive":"You Cannot Drive")

// switch (age) {
//     case 18:
//         console.log("Toh naachu?")
//         break;

//     case 20:
//         console.log("Congrats")
//         break;

//     default:
//         console.log("You are not  born")
//         break;
// }

//loop
//for,while,do while
// let num = 23
// for (let i=1;i<=10;i++){
//     console.log(num+'*'+i+'='+num*i)
// }

// let i = 1;
// while(i<=10){
//     console.log(num+'*'+i+'='+num*i)
//     i++
// }

// do {
//     console.log(num + '*' + i + '=' + num * i)
//     i++
// } while (i <= 10)


//for loop of object
// let my_obj={
//     Name:'Jinay',
//     Age:18,
//     Os:"Windows",
//     Profession:"Legend Programmer"
// }

// for (let key in my_obj){
//     console.log(`The ${key} of the object is ${my_obj[key]}`)
// }

//for each loop for array

// let arr=[2,34,45,55,89]
// arr.forEach(function(element){
//     console.log(element)
// })



//fucntions

// function greet(name,thank){ 
//     let msg=`Happy Engagement Anniversary to ${name} Dear mom and dad, your beautiful bond inspires me every day and makes me believe in the magical power of true love. As your son, I am blessed to have the two most perfect parents in the world. May your love increase tenfold for the many years to come.${thank} !`;
//     return msg;
// }

// let name="Mummy and Papa"

// let myvar=greet(name,'Thanks a lot for Everything')
// console.log(myvar)

// const myobj={
//     name:"Parth",
//     game:function(){
//         return "GTA_V";
//     }
// }
// console.log(myobj.game());

// arr=['f','k','l'];

// arr.forEach(function(element,index,array){
//     console.log(element,index)
// });

//
// let it="Jinay Shah";

// console.log(it)

