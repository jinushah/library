// let l=window.document;

// // alert("Hello World")
// // l=prompt("Self destruction mode")

// // l=confirm("Are you sure you want to start self destruction mode?")
// l=window.innerWidth;
// l=window.innerHeight;
// l=location.toString();
// l=window.history;
// console.log(l);

// let my=window.document;

// my=document.all;
// Array.from(my).forEach(function(element){
//     console.log(element);
// })
// my=document.links[0].href;
// my=document.images[0].src;
// my=document.scripts[1].src;
// console.log(my);

//traversing 

// let cont=document.querySelector('.no');
// cont=document.querySelector('.container');
// let nodeName=cont.childNodes[1].nodeName;
// let nodeType=cont.childNodes[0].nodeType;
// console.log(nodeType);

/*Node types
1.Element
2.Attributes
3.Text Node
8.Comment
9.document
10.docType*/

// let contain=document.querySelector('div.container');
// console.log(contain.children[1].children[0].children[0].children);
// console.log(contain.firstChild);
// console.log(contain.firstElementChild);
// console.log(contain.lastChild);
// console.log(contain.lastElementChild);
// console.log(contain.childElementCount);

// console.log(contain.firstElementChild.parentNode);
// console.log(contain.firstElementChild.nextSibling);
// console.log(contain.firstElementChild.nextElementSibling);
// console.log(contain.firstElementChild.nextElementSibling.nextElementSibling);

//creating,removing&replacing elements
// let element=document.createElement('li');
// element.className='ulli';
// element.id='created';
// element.setAttribute('title','My Title');
// element.innerHTML='<b>It is created through the js</b>'

// let ui=document.querySelector('ui.this');
// ui.appendChild(element);
// console.log(ui);
// console.log(element);


// let elem2=document.createElement('h3');
// elem2.id='ele';
// elem2.className='elem2';
// let tnode=document.createTextNode('This is created through js');
// elem2.appendChild(tnode);
// console.log('')
// element.replaceWith(elem2);
// let myul=document.getElementById('myul');
// myul.replaceChild(element,getElementById('fui'))
// console.log(elem2.hasAttribute('class'));


//quiz 
// let my=document.createElement('h1');
// my.id='head';
// my.className="head";
// let uu=document.createTextNode('Go To code with Harry');
// my.appendChild(uu);
// console.log(my)
// let jj=document.createElement('a');
// jj.href='https://www.codewithharry.com/';
// let text=document.createTextNode('Code with Harry');
// jj.appendChild(text);
// console.log(jj);






//Events

// document.getElementById('heading').addEventListener
// ('mouseover',function(e){
//     console.log('You have clicked the Heading');
//     variable=e.target;
//     variable=e.target.className;
//     variable=Array.from(e.target.classList);
//     variable=e.target.id;
//     variable=e.offsetX;
//     variable=e.offsetY;
//     variable=e.clientX;
//     variable=e.clientY;
//     console.log(variable);
    //location.href='//codewithharry.com//
// });



//More Events
// let  btn=document.getElementById('btn');
// btn.addEventListener('click',function1);
// btn.addEventListener('dblclick',function2);
// btn.addEventListener('mousedown',function3);

// btn.addEventListener('mouseenter',function4);
// btn.addEventListener('mouseleave',function5);
// btn.addEventListener('mousemove',function6);


// function function1(e){
//     // console.log('Thanks For Clicking',e);
//     e.preventDefault();
// }

// function function2(e){
//     console.log('Thanks For Double Clicking',e);
//     e.preventDefault();
// }

// function function3(e){
//     console.log('Thanks For Mousse Down',e);
//     e.preventDefault();
// }

// function function4(e){
//     console.log('Thanks for Mouse Enter',e);
// }

// function function5(e){
//     console.log('Thanks for Mouse Leave',e);
// }

// function function6(e){
//         console.log('Thanks for Mouse Move',e);
//     }

// document.querySelector('.container').addEventListener
// ('mousemove',function7)

// function function7(e){
//     console.log(e.offsetX,e.offsetY);
//     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},
//         ${e.offsetX + e.offsetY})`
// };







//storage
//local storage

// let im=['Heropanti','Baaghi','Golmaal'];

//Add a key value
// localStorage.setItem('Name','Jinay');
// localStorage.setItem('Add','Shahibaug');
// localStorage.setItem('Movies',JSON.stringify(im))

//clear the storage
// localStorage.clear();

//Remove the one item from Storage
// localStorage.removeItem('Add');

//get thhe item in console
// let Name=localStorage.getItem('Name');

// let Name=JSON.parse(localStorage.getItem('Movies'));


// console.log(Name);


//Maths Object
// let x=34;
// let y=89;
// let sum,sub,mul,div,mod;
// sum=x+y;
// sub=x-y;
// mul=x*y;
// div=y/x
// mod=y%x;
// sum=Math.abs(-2);
// sum=Math.round(4.6);
// sum=Math.PI;
// sum=Math.E;
// sum=Math.ceil(4.6);
// sum=Math.floor(-5.7);
// sum=Math.sqrt(81);
// sum=Math.pow(2,15);
// sum=Math.random();
// sum=Math.max(45,45,4);
// sum=Math.min(34,34,2,1);
// console.log(sum);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(mod);


//Date Object

// let today= new Date();
// console.log(today);

// let  d=new Date('10-04-2003 11:59:30');
// d=d.getTime();
// d=d.getFullYear();
// console.log(d);

// let r;
// r=d.getDate();
// r=d.getDay();
// r=d.getHours();
// r=d.getFullYear();
// r=d.getMilliseconds();
// r=d.getMinutes();
// r=d.getMonth();
// r=d.getSeconds();
// r=d.getTimezoneOffset();

// let today = new Date();
// console.log(today);
// let otherDate = new Date('8-4-2003 04:54:08');
// // otherDate = new Date('June 13 1976');
// // otherDate = new Date('09/16/1976');
// console.log(otherDate);
// let a;
// a = otherDate.getDay();
// a = otherDate.getDate();
// a = otherDate.getMinutes();
// // a = otherDate.getSeconds();
// // a = otherDate.getHours();
// a = otherDate.getTime();
// a = otherDate.getMilliseconds();
// a = otherDate.getMonth();
// console.log(a);
// otherDate.setDate(23);
// otherDate.setMonth(0);
// otherDate.setFullYear(1900);
// otherDate.setMinutes(2);
// otherDate.setHours(1);
// otherDate.setSeconds(3);
// console.log(otherDate);












//oops 
//objects,literals,constructor 

//object literal for creating  object
// let carA={
//     Name:'Grand10',
//     top:150,
//     run:function(){
//         console.log('Car is Running');
//     }
   
// }


//constructor
// function carB(name,speed) {
//     this.Name=name;
//     this.top=speed;
//     this.run=function(){
//         console.log(`${this.Name} is running`);
//     }
// }
// console.log(carA);
// car1=new carB('Lamborgini',220);
// console.log(car1);





//object Protype
// let objecpro={
//     Name:"Jinay",
//     Roll_No:84,
//     Deree:"Bsc_it"
// }

// function obbj(Name){
//     this.Name=Name;
// }
// Object.prototype.getName=function(){
//     return this.Name;
// }

// Object.prototype.setName=function(NewName){
//     this.Name=NewName;
// }
// let ob=new obbj('Smit');
// console.log(ob);



//prototype inheritence

// let proto={
//     slogan: function(){
//         return `This is a Savitriya Company Pvt. ltd.`;
//     },
//     changeName:function(newName){
//         this.name=newName;
//     }
// }

// let jin=Object.create(proto,{
//     name: { value: "Jinay", writable:true},
//     role: {value : "developer"},
// })

// jin.changeName("Samveg");
// // console.log(jin);


// function emp(name,salary,exp){
//     this.name=name;
//     this.salary=salary;
//     this.experience=exp;
// }

// emp.prototype.slogan=function(){
//     return  `${this.name} is the best Employee`
// }

// let jinu=new emp("Jinay",10000000,10);
// console.log(jinu.slogan());

// function program(name,salary,exp,language){
//     emp.call(this,name,salary,exp);
//     this.language=language;
// }

// program.prototype=Object.create(emp.prototype)
// program.prototype.constructor=program;


// let king=new program('Aditya',6000,2,'Javascript');
// console.log(king);





//ES6
class Employee{
    constructor(name,experience,add){
        this.name=name;
        this.exp=experience;
        this.address=add;
    }

    slogan(){
        return `I am ${this.name}`
    }

    joiningyr(){
        return 2022-this.exp;
    }
    static add(a,b){

        return a+b;
    }
}
// console.log(Employee.add(2,4));


class programmer extends Employee{
    constructor(name,experience,add,lang,github){
        super(name,experience,add);
        this.language=lang;
        this.github=github
    }
    fav(){
        if(this.language=='python'){
            return 'Python';
        }
        else{
            return 'java/javascript';
        }
    }
}

let pyth=new programmer('Anaconda',4,'Gurgoan','python','anaconda76');
console.log(pyth);
console.log(pyth.fav());

