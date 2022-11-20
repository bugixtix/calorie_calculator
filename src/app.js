import React , {useEffect, useState}from "react";
import { Table, Hello,InputInfo, Range_, Result } from "./coms";
import { concat$, copytoBoard$, deleteDublicates, isNull, isNum, isString, percent$, printer$, shuffle, shuffle$, storage$, userBoard$, randomNum$, goTop$, capitalize$, average$, dayOfYear$, calorieCalculator$, kcalToKj$ } from "./lainy";

export function App (){
    const c = console.log.bind(document)
    let x = 0
    let text = 'hello there, Im introducing maisulf to yuh. SO , whts is going on'
    let interval_
    let myArray = [0,1,2,3,4,5,6,7,8,9]
    let secArray = [0,2,3,4,5,6,7,8,9]
    let array1 = ['one', 'two', 'three','one']
    let array2 = ['four', 'five', 'six']
    let sum = {}
    let obj = {name:'me', age:'23'}
    let obj1 = {job:'secret', married:false}
    var y
    let String_ = ''

    // 

    var [switch_$, setSwitch_$] = useState(2)

    useEffect(()=>{
  },[x])
  let date_ = new Date()
  let script_ = () => {
    let res = 480 / 60 *1.5
    return res
  }

    return(

        <div id="app">
          {/* {switch_$ === 0 ? 
          <Hello state={setSwitch_$} /> : 
          switch_$===1?<InputInfo state={setSwitch_$}/> : 
          'hello'} */}
          {switch_$===0 && <Hello set={setSwitch_$}/>}
          {switch_$===1 && <InputInfo set={setSwitch_$}/>}
          {switch_$===2 && <Result set={setSwitch_$} state={switch_$}/>}
          {switch_$===9 && <Table set={setSwitch_$}/>}
          {/* {script_()} */}
        </div>
    )
}