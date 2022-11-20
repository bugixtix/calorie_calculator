// LAINY IS MY LIBRARY 

export var audioPlay$ = (url) =>{let audio_ = new Audio(url);       audio_.autoplay(false);         audio_.play();}

export var notdo$ = () =>{}

export var printer$ = (destination, message, speed, interval_) =>{
    var i = 0 ;
    clearInterval(interval_)
    interval_ = setInterval(()=>{
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if(i>=message.length){
            clearInterval(interval_)
        }
    },speed)
}

export var storage$ = (mode,key,value) =>{
    return mode=='set' ? 
    localStorage.setItem(key,JSON.stringify(value)) :
    mode =='get' ?
    JSON.parse(localStorage.getItem(key)):
    mode=='remove' ?
    localStorage.removeItem(key) :
    mode=='clear' ? 
    localStorage.clear() :
    'mode WAS NOT SPELLED RIGHT' 
}

export var shuffle$ = (array) => {
    for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
//   [ x[y],x[v] = x[v],x[y] ] MEANS q = x[y] ; x[v] = q ; x[y] = x[v]
//   ~~(n) = Math.round(n)

export var percent$ = (value, total, round, sign) => {
    var percent = (value*100)/total
    return round? 
    (sign? ~~(percent)+'%' : ~~(percent)) : 
    (sign? percent+'%' : percent)
}

// array.concat(arr1,arr2,arr3) => [...array,...arr1,...arr2,...arr3]
// obj={name:'string',age:number} obj1={job:'string',married:boolean} sum={...obj,...obj1}

export var isString$ = value => typeof value === 'string'

export var isNum$ = (n) => (!isNaN(parseFloat(n))&&isFinite(n))

export var isNull$ = value => value === null || value === undefined

export var isZero$ = value => value === 0 || value === '0' || value === null || value === undefined

export var deleteDublicates$ = array => [...new Set(array)]

// x.reduce((accumulator,item)=>accumulator*item, initialValue~optional~)

// x.some(xy=>condition) Return boolean

// x.every(xy=>condition) Return boolean

export var userBoard$ = (mode,text) => {
    return mode==='copy' || mode==='write' ? 
    navigator.clipboard.writeText(text) : 
    mode==='read' ?  window.navigator.clipboard.readText() : 
    'MODE WAS SPELLED FALSE!'
}

export var randomNum$ = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export var goTop$ = () => window.scrollTo(0, 0);

export var capitalize$ = text => text.charAt(0).toUpperCase() + text.slice(1);

export var average$ = array => array.reduce((a, b) => a + b) / array.length;


export var dayOfYear$ = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// array.filter(x=> condition) Returns <new array>

export var calorieCalculator$ = (gender, weight, size, age, activity, sport,name_) =>{
    let total
    // bMr = basel metabolic rate
    let value_ = gender==='MALE' ? 66+(13.8 * weight) + (5 * size) - (6.8 * age) : 655 + (9.5 * weight) + (1.9 * size) - (4.7 * age)
    total = value_ * (activity+sport)
    total = Math.floor(total * 100) / 100
    let BMR = value_.toFixed(2)
    let arr_ = [Number(BMR),Number(total),name_]    
    return arr_
}

export var athlete$ = (hours, days) => {
    return days * hours
}

export var kcalToKj$ = (way,num,text) => way?(text? num*4.184+'kj' : num*4.184) : (text? num/4.184+' kcal':num/4.184)

export var enter_key$ = (event) => event.key==='Enter' ? true : false

// Number(string) => number
//  1893.9283.toFixed(2) => 1893.93