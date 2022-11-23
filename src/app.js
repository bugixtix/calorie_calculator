import React , {useEffect, useState}from "react";
import { Table, Hello,InputInfo, Range_, Result } from "./coms";

export function App (){
    // const c = console.log.bind(document)
    let x = 0
    
  // state which changes, when changing page
    var [switch_$, setSwitch_$] = useState(0)

    return(

        <div id="app">

          {switch_$===0 && <Hello set={setSwitch_$}/>}
          {switch_$===1 && <InputInfo set={setSwitch_$}/>}
          {switch_$===2 && <Result set={setSwitch_$} state={switch_$}/>}
          {switch_$===9 && <Table set={setSwitch_$}/>}
        </div>
    )
}