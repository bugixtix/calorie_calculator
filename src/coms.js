import React, { useEffect, useState } from "react";
import './index.css'
import './range_style.css'
import { calorieCalculator$, enter_key$, isNull$, isZero$, notdo$, randomNum$, storage$ } from "./lainy";
import man_ from "./imges/man_.svg"
import woman_ from "./imges/woman_.svg"
import activity_0 from './imges/sofa_0.jpg'
import activity_1 from './imges/little_active_1.jpg'
import activity_2 from './imges/überwiegend_sitzend_2.jpg'
import activity_3 from './imges/überwiegend_gehend_3.jpg'
import activity_4 from './imges/anstrengende_4.jpg'
import bg_ from './imges/bg_.jpg'
import {AiOutlineArrowLeft} from 'react-icons/ai'
 
export var Hello = (prop) => {
    // state$ for whatever was typed inside the field
    var [in2input_$, setInput_$] = useState('')
    // state$, true after entering enter
    var [done_$, setDone_$] = useState(false)
    // Styles
    var outDiv_1 = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'120vh',
        background:`url(${bg_})`,
        backgroundSize:'cover',
        backgroundBlendMode: 'darken',

    }
    var outDiv_2 = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        background:'#3a3',
        padding:'20px 20px',
        border:'2px solid #ddd',
        borderRadius:'8px',
        boxShadow:'4px 4px 4px 3px #333',
        transition:'all ease 600ms',
        opacity:done_$ ? '0' : '1',
        margin:'0px 0px 10em 0px'
    }
    var in2label_ = {
        fontSize:'22px',
        fontWeight:'500',
        textDecoration:'underline',
        textTransform:'uppercase',
        color:'#fff',
        textShadow:'1px 1px 1px #000',
        padding:'4px',
        cursor:'pointer',
        margin:'10px 0px',
    }
    var in2input_ = {
        border:'none',
        outline:'none',
        padding:'8px 2px',
        fontSize:'20px',
        fontWeight:'600',
        color:'222',
        textAlign:'center',
        cursor:'pointer',
        width:'100%',
        textTransform:'uppercase',
        borderRadius:'4px',
        boxShadow:'2px 2px 8px 2px #555',
        textShadow:'1px 1px 1px #000'
    }

    // 1___ listener on input
    var input_changed = (event) =>{
        var in2input_ = document.getElementById('in2input_')
        storage$('set','NAME',in2input_.value)
        setInput_$(in2input_.value)
    }
    // 1___

    // 2___ onKeyDown listener on input, prepars handle_enter fun() to work once ENTER is clicked
    var input_keyDown = (event) =>{
        enter_key$(event)?handle_enter(in2input_$):notdo$()
    }
    // 2___ 

    // 3___ handling enter function()
    var handle_enter = (info) =>{
        setDone_$(true)
        let outDiv_2 = document.getElementById('outDiv_2')
        outDiv_2.addEventListener('transitionend',()=>{prop.set(1)})
    }
    // 3___

    // useEffect State$,
    useEffect(()=>{
        // adding an event listener to the outDiv_1/page, the fun() inside checks if ENTER was clicked
        document.getElementById('outDiv_1').addEventListener('keydown',input_keyDown)
    },[in2input_$])
    return(

        <div id="outDiv_1" style={outDiv_1}>
            <div id="outDiv_2" style={outDiv_2}>
            <label htmlFor='in2input_' style={in2label_}>
                Hi, bitte gib deinen Name ein
            </label>
            <input id="in2input_" type={'text'} style={in2input_} onChange={input_changed} value={in2input_$}>
            </input>
            </div>
        </div>
    )
}



// -------------------------------------------

export var InputInfo = (prop) =>{

    // couple of states for weight, size and age
    var [Schwer_$, setSchwer_$] = useState(0)
    var [Größe_$, setGröße_$] = useState(0)
    var [Alter_$, setAlter_$] = useState(0)
    // couple of states for name value, specifying to which group would a component belong
    var [name_$,setName_$] = useState()
    var [_num_$,setNum_$] = useState(404)
    var [_1num_$, set1Num_$] = useState(404)

    // Style§
    var outDiv_1 = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'100vh',
        background:`url(${bg_})`,
        backgroundSize:'cover',
        padding:'50px 0px 0px 0px',
        backgroundBlendMode: 'darken',

    }

    var outDiv_2 = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:'0px 20px',
        background:'transparent',
    }
    var outDiv_3 = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:'0px 20px',
        background:'transparent',
        paddingBottom:'20px',
        borderBottom:'1px solid #10182044'
    }

    var inDiv_2 = {
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        margin:'0px 0px 0px 20px',
        padding:'0px 0px 0px 10px',
    }
    var p_1 = {
        background:'#990011',
        color:'#fff',
        textShadow:'2px 2px 2px #000',
        margin:'10px 0px',
        padding:'2px 4px',
        borderRadius:'4px'
    }
    var inDiv_10 = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRight:'1px solid #99999977',
        paddingRight:'20px',
    }
    var inDiv_1 = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textTransform:'uppercase'
    }
    
    // Use Effect state$
    useEffect(()=>{
        // upload NAME in storage
        setName_$(storage$('get','NAME'))
    },[name_$])

    var handle_btn1 = (key_,) =>{
        // get all variables from the storage
        let name_ = storage$('get', 'NAME') || 'ANONYMOUS'
        let geschlecht_ = storage$('get','GESCHLECHT')
        let schwer_ = storage$('get','SCHWER')
        let alter_ = storage$('get','ALTER')
        let größe_ = storage$('get','GRÖßE')
        let sport_ = storage$('get','SPORT')
        let aktivität_ = storage$('get','AKTIVITÄT')
        // message text, in case some fields are not filled
        let msg_ = isZero$(geschlecht_) ? 'Bitte gib deinen Geschlecht ein' : isZero$(schwer_) ? 'Bitte gib ein, wie schwer du bist' : isZero$(alter_) ? 'Bitte gib ein, wie alt du bist': isZero$(größe_) ? 'Bitte gib deine Größe ein' : isZero$(sport_) ? 'Bitte gib ein, wie oft du Sport machst' :  isNull$(aktivität_) ? 'Bitte wähle aus, welche zur welchen Aktivitätstufe du gehörst' : 'ALLES GUT'
        // alerting the message, in case some fields are not filled
        if(isNull$(geschlecht_)||isZero$(schwer_)||isZero$(größe_)||isZero$(alter_)||isNull$(sport_)||isNull$(aktivität_))alert(msg_)
        // go on, if every field is alerady filled
        else{
            // interpretate activität_ , give it some real values(PalFactor)
            let _aktivität_ = aktivität_==0 ? 1.2 : aktivität_==1 ? 1.4 : aktivität_ ==2 ? 1.6 : aktivität_ ==3 ? 1.8 : aktivität_==4 ? 2.0 : 0
            // interpretate sport_, give it some real values(PalFactor)
            let _sport_ = sport_===0 ? 0.01 : sport_===1 ? 0.06 : sport_===2 ? 0.13 : sport_===3 ? 0.2 : -1
            // put inputed values in an array, 
            let inputed_values = [geschlecht_,schwer_,größe_,alter_,_aktivität_,_sport_,name_]
            // put all inputed values in an array,
            let allInputed_values = storage$('get','ALL_INPUTED_VALUES') || []
            allInputed_values.push(inputed_values)
            // make the storage empty from specific values
            storage$('remove','GESCHLECHT'); storage$('remove','SCHWER'); storage$('remove','ALTER'); storage$('remove','GRÖßE'); storage$('remove','SPORT_MALE'); storage$('remove','AKTIVITÄT');
            // upload allInputed_values and inputed_values to the storage
            storage$('set','INPUTED_VALUES',inputed_values)
            storage$('set', 'ALL_INPUTED_VALUES', allInputed_values)
            // switch to the next page, by setting a high-level state to 2
            prop.set(2)
        }
    }
    // some texts for the AKTIVITÄT SECTION
    // console.log(inputed_values + '_______')
    var aktivität_stufen =[
        'Stufe : 0',
        'Stufe : 1',
        'Stufe : 2',
        'Stufe : 3',
        'Stufe : 4',
    ]
    var aktivität_details = [
        ['ausschließlich sitzend/liegend','z.B. Alte, gebrechliche Menschen'],
        ['ausschließlich sitzend, wenig oder keine körperliche Freizeitaktivitäten','z.B. Schreibtischtätigkeit, Studierende'],
        ['überwiegend sitzende, zwischendurch gehend oder stehend','z.B. Kraftfahrer, Laboranten, Lehrer'],
        ['überwiegend gehend oder stehend, moderates Sportpensum','z.B. Kellner, Hausfrau /-mann, Handwerker'],
        ['körperlich anstrengende (Berufs-)Tätigkeiten','z.B. Waldarbeiter, Landwirter'],
    ]
    return(
        <div id="outDiv_1" style={outDiv_1}>
            {/* Namebar */}
            <Name_bar name_$={name_$}/>

            <div style={outDiv_2}>
                <div style={inDiv_1}>
                    {/* {specifying the text title, make sure that if FRAU was clicked then returns"e" if not then not} */}
                <p style={p_1}>Ich Bin Ein<span>{_num_$===0 ? 'e' : _num_$===1 ? '' : '/e'}</span> <span>{_num_$===0 ? ' Frau' : _num_$===1 ? ' Mann' : ' ... '}</span></p>
                <div style={inDiv_10}>
                    {/*     COME BACK LATER TO MODIFY THIS ----- */}
                <Choice id={0} comp={0} text_I={'FEMALE'} info={'frau'}  src={woman_} class={['label_I','radio_I']} state={_num_$} set={setNum_$}/>
                <Choice id={1} comp={0} text_I={'MALE'} info={'mann'}  src={man_} class={['label_II','radio_II']} state={_num_$} set={setNum_$}/>
                </div>
                </div>
                <div id="inDiv_2" style={inDiv_2}>
                <Range_ id={0} title={'Ich Wiege '} title_={''} unit_={'kg'} min={'30'} max={'99'} value={Schwer_$} set={setSchwer_$}/>
                <Range_ id={1} title={'Ich Bin '} title_={'Groß'} unit_={'cm'}min={'100'} max={'200'} value={Größe_$} set={setGröße_$}/>
                <Range_ id={2} title={'Ich Bin '} title_={'Alt'} unit_={'jahre'}min={'10'} max={'65'} value={Alter_$} set={setAlter_$}/>
                </div>

            </div>

            {<Sport />}
            
            <p style={p_1}> Wie Verbringe Ich Meinen Tag?</p>
            <div style={outDiv_3}>
                <Choice id={2} comp={1} text_I={0} info={aktivität_stufen[0]} info_i={aktivität_details[0]}  src={activity_0} class={['label_II','radio_II']} state={_1num_$} set={set1Num_$}/>
                <Choice id={3} comp={1} text_I={1} info={aktivität_stufen[1]} info_i={aktivität_details[1]}  src={activity_1} class={['label_II','radio_II']} state={_1num_$} set={set1Num_$}/>
                <Choice id={4} comp={1} text_I={2} info={aktivität_stufen[2]} info_i={aktivität_details[2]}  src={activity_2} class={['label_II','radio_II']} state={_1num_$} set={set1Num_$}/>
                <Choice id={5} comp={1} text_I={3} info={aktivität_stufen[3]} info_i={aktivität_details[3]}  src={activity_3} class={['label_II','radio_II']} state={_1num_$} set={set1Num_$}/>
                <Choice id={6} comp={1} text_I={4} info={aktivität_stufen[4]} info_i={aktivität_details[4]}  src={activity_4} class={['label_II','radio_II']} state={_1num_$} set={set1Num_$}/>
            </div>
            
            <Button1 handler={handle_btn1} value={'Rechne mein Gesamtumsatz'}/>

        </div>
    )
}
export var Sport = (pro) => {

    // state to specify inside how many time, client do sport. 
    var [times_$, setTimes_$] = useState(1)

    // style$
    var outDiv_1 = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flexStart',
        margin:'10px 0px 30px 0px',
        background:'transparent',
        transition:'all ease 500ms',
        padding:'4px 0px 0px 0px',
        borderBottom:'1px solid #10182055',
        borderTop:'1px solid #10182055',
    }
    var p_s = {
        background:'#990011',
        color:'#fff',
        textShadow:'2px 2px 2px #000',
        // fontWeight:'700'
        margin:'10px 0px',
        padding:'2px 4px',
        borderRadius:'4px'
    }
    var inDiv_1 = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    }
    var li_s = {
        textDecoration:'none',
        padding:'10px 16px',
        border:'1px solid #10182055',
        textAlign:'center',
        background:'transparent',
        listStyleType:'none',
        cursor:'pointer',
        borderRadius:'4px',
        margin:'0px 4px',
        textShadow:'1px 1px 2px #fff',
        transition:'all ease 400ms'
    }
    var span_s = {
        color:'#333',
        fontSize:'14px'
    }
    // handle click on one of <li>
    var handle_times = (event) => {
        // set times_$ value to li its id
        setTimes_$(event.target.id)
        // upgrade storage
        storage$('set','SPORT',Number(event.target.id))
        // change bg color of <li> once it gets clicked
        let li_all = document.querySelectorAll('.li_')
        li_all.forEach(i=> i.style.background='transparent')
        li_all[event.target.id].style.background='#fee715'
    }
    // useEffect state
    useEffect(()=>{
    },[times_$])
    
    return(
        <div style={outDiv_1}>
            <p style={p_s}>Wie Oft Mach Ich Sport In Der Woche?</p>
            <div style={inDiv_1}>
                <li id={0} className={'li_ li_0'} onClick={(event)=>handle_times(event)} style={li_s}>Überhaupt Nicht <br></br><span id={0} style={span_s}>-</span></li>
                <li id={1} className={'li_ li_1'} onClick={(event)=>handle_times(event)} style={li_s}>Ab Und ZU <br></br><span id={1} style={span_s}>Ein Oder 2 Mal</span></li>
                <li id={2} className={'li_ li_2'} onClick={(event)=>handle_times(event)} style={li_s}>Oft <br></br><span id={2} style={span_s}>3-4 Mal</span></li>
                <li id={3} className={'li_ li_3'} onClick={(event)=>handle_times(event)} style={li_s}>Sehr Oft<br></br><span id={3} style={span_s}>Mehr Als Fünf Mal</span></li>
            </div>
            <br></br>
        </div>
    )
}
export var Range_ = (pro)=>{
    // 
    let range__ = `range${pro.id}`
    let com_values = ['SCHWER','GRÖßE','ALTER']
    let com_units =['kg','cm','Jahre']

    // useEffect state
        useEffect(()=>{
            let range_ = document.getElementById(range__)
            range_.addEventListener('input',()=>{
                pro.set(range_.value)
            })
            // upgrade storage
            storage$('set',com_values[pro.id],pro.value)

        },[pro.value])
        var outDiv_1 = {
            width:'100%',
            display:'flex',
            flexWrap:'wrap',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'transparent',
            position:'relative',
            flexDirection:'column',
            padding:'20px 0px',
        }
        var input2handler = (event) =>{
            // push the inside value of input_2 into a state, located on top-level
            pro.set(event.target.value)
        }
    return(
        <div style={outDiv_1} >
            <p className="budget">{pro.title}<span>{pro.value ? `${pro.value} ${pro.unit_} `:' ... '}</span>{ pro.title_}</p>
            <label htmlFor="range">
                <input type="range" name="range" id={range__} min={pro.min} max={pro.max} step="0.5" defaultValue={0} />
            </label>
            <span className="span_1">
            <input type={"number"} htmlFor="range" step={1} value={`${pro.value}`} onChange={(event)=>{input2handler(event)}} className="output"></input> <span id="unit_">{com_units[pro.id]}</span>
            </span>
        </div>
    )
    // PROPLEM HERE!
}

export var Choice = (pro) => {

    // style
    var outLabel_1 = {
        position:'relative',
        zIndex:'999',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        margin:'10px 10px 0px 10px',
        border:'1px solid #777',
        padding:'10px',
        borderRadius:'20px',
        height:pro.id<2?'auto':'300px',
        width:pro.id<2 ?'100px' : '200px',
        cursor:'pointer',
        transition:'all ease-in-out 400ms',
        background: pro.comp===0 ? (pro.state===0&&pro.id===0 ? '#fee715' : pro.state===1&&pro.id===1 ? '#fee715' : 'transparent' ) : pro.comp===1 ? (pro.state===2&&pro.id===2 ? '#fee715' : pro.state===3&&pro.id===3 ? '#fee715' :pro.state===4&&pro.id===4 ? '#fee715' :pro.state===5&&pro.id===5 ? '#fee715' :pro.state===6&&pro.id===6 ? '#fee715' : 'transparent' ) : 'transparent',
    }
    // flexible background on click, as a fun()
    var bg__ = (event) =>{
        pro.comp===0 ? (pro.id===0 ? pro.set(0) : pro.set(1)) : (pro.id===2 ? pro.set(2) : pro.id===3 ? pro.set(3) : pro.id===4 ? pro.set(4) : pro.id===5?pro.set(5) : pro.set(6))
    }
    var inDiv_1 = {
     position:'relative',
     zIndex:'1',
     padding:'8px',
     display:'flex',
     flexDirection:'row',
     flexWrap:'wrap',
     justifyContent:'center',
     alignItems:'baseline'
    }
    var img_s = {
        position:'relative',
        zIndex:'1',
        width:'100%',
        height:pro.id<2?'auto':'100px',
        objectFit:'cover',
        borderRadius:'8px'
    }
    var inLabel_1 = {
        position:'relative',
        zIndex:'1',
        padding:'0px 4px',
        fontSize:'14px',
        textShadow:'1px 1px 1px #fff',
        cursor:'pointer',
        textTransform:'uppercase',
    }
    var input_ = {
        position:'relative',
        zIndex:'1',
        padding:'0px 0px',
        width:'22px',
        WebkitAppearance:'none',
        width:'4px',
        height:'0px',
        background:'transparent',
        borderRadius:'2px',
        cursor:'pointer',
    }
    var inLabel_2 = {
        textAlign:'center',
        cursor:'pointer',
        textShadow:'0px 0px 1px #f1f2f3',
        fontSize:'18px',
    }
    
    let x = Math.random()

    // update storage
    let update = (event) =>{
        storage$('set',comId2string(pro.state),event.target.title)
    }
    
    // use Effect state$
    useEffect(()=>{        },[x])

    // convert each component id to string
    var comId2string = (key_) =>{
        return key_ === 0 ? 'GESCHLECHT' : key_ ===1 ? 'GESCHLECHT' : key_ === 2 ? 'AKTIVITÄT' : key_===3 ? 'AKTIVITÄT' : key_===4 ? 'AKTIVITÄT' : key_===5 ? 'AKTIVITÄT' : key_===6 ? 'AKTIVITÄT' : 'UNKNOWN ID'
    }

    return(
        <label aria-describedby={'al'} aria-label={`al${pro.id}`} id={pro.id} style={outLabel_1} htmlFor={x} className={`${pro.class[0]} choice_I`} onClick={(event)=>bg__(event)}>
            <img src={pro.src} style={img_s}></img>
            <div style={inDiv_1}>
                <label htmlFor={x} style={inLabel_1}>{pro.info}</label>
                <input type={'radio'} title={pro.text_I}  onClick={(event)=>update(event)}  id={x} className={pro.class[1]} style={input_}></input>
            </div>
                {pro.info_i && <label htmlFor={x} style={inLabel_2}>{pro.info_i[0]} <br></br> {pro.info_i[1]}</label>}
        </label>
    )
}
export var Button1 = (pro) => {

    // style$
    var btn_s = {
        textAlign:'center',
        border:'none',
        padding:'8px',
        margin:'16px 0px 120px 0px',
        position:'relative',
        display:'inline',
        textTransform:'uppercase',
        // fontSize:'24px',
        fontWeight:'400',
        textShadow:'2px 2px 2px #fff',
        color:'#101820',
        background:'#fefefe',
        transition:'all ease-in-out 400ms',
        cursor:'pointer',
        width:'100%',

    }
    return(
        <button id="forbackbtn" style={btn_s} onClick={pro.handler}>
            {pro.value}
        </button>
    )
}

export var Name_bar = (pro) => {
    // style$
    var btn_s = {
        padding:'2px 2em',
        margin:'0em 0px 0px 5em ',
        fontSize:'24px',
        border:'none',
        borderRadius:'4px',
        outline:'none',
        cursor:'pointer',
        color:'#101820',
        transform:'scale(1.4)',
        background:'transparent',
        textShadow:'0px 0px 2px #101820ff',
        fontWeight:'600',
        transition:'all ease 500ms'
    }
    var outDiv_1 = {
        background:'#ffffff66',
        width:'100%',
        padding:'8px 0px',
        textAlign:'center',
        color:'#fff',
        textTransform:'uppercase',
        // fontSize:'22px',
        textShadow:'2px 1px 2px #101820ff',
        // borderBottom:'1px solid #10182033',
        display:'flex',
        position:'fixed',
        top:'0px',
        flexDirection:'row',
        justifyContent:'space-between'
    }
    var p_s = {
        margin:'0px 3em'
    }
    return(
    <div style={outDiv_1}>
        <p style={p_s}>KALORIE RECHNER</p>
        {pro.btn_ && <button style={btn_s} id='btn_' onClick={pro.btn_handler}><AiOutlineArrowLeft/></button>
        }
        <p style={p_s}>{pro.name_$}</p>
    </div>
    )
}
export var Result = (pro) =>{
    // getting some values from storage
    let name_ = storage$('get','NAME') || 'mein guter'
    let inputed_values = storage$('get','INPUTED_VALUES') || 0
    let USERS_ = storage$('get','USERS') || []
    // running function with inputed_values inside to get the result_
    let result_ = calorieCalculator$(inputed_values[0],inputed_values[1],inputed_values[2],inputed_values[3],inputed_values[4],inputed_values[5],name_) || 0
    // check that the value recent pushed is not alerady existing /if names are same, then donot push it to the end-result 
    USERS_.every( one => one[2]!==result_[2]) ? USERS_.push(result_) : notdo$()
    // upgrade/ upload storage
    storage$('set','USERS', USERS_)
    var outDiv_1 = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
        background:`url(${bg_})`,
        backgroundSize:'cover',
        backgroundBlendMode: 'darken',

    }
    var inDiv_2 = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        width:'100%',
    }
    var btn_s = {
        border:'1px solid #777',
        borderRadius:'4px',
        outline:'none',
        background:'transparent',
        color:'#101820ff',
        textShadow:'1px 1px 2px #fff ',
        padding:'8px',
        fontWeight:'600',
        margin:'8px',
        cursor:'pointer',
        transition:'all ease 600ms'
    }
    var p_s = {
        fontSize:'24px',
        color:'#55f',
        fontWeight:'600',
        textAlign:'center',
        textTransform:'capitalize'
    }
    var span_s = {
        textTransform:'uppercase',
        color:'#55f',
        fontSize:'24px',
        fontWeight:'600'
    }
    var inDiv_1 = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderLeft:'6px solid #000',
        padding:'0px 12px 12px 12px',
        margin:'0px 0px 8px 0px',
        borderRadius:'1px',
        color:'#101820ff',
        textShadow:'1px 1px 2px #fff'
    }
    var p2_s = {
        margin:'0px 0px 8px 0px'
    }
    // button handler, to switch to other sites
    var handle_btn = (id) =>{
        id === 0 ? pro.set(0) : id===1 ? pro.set(9) : <h1>404</h1>
    }

    return(
        <div style={outDiv_1}>
            <div style={inDiv_1}>
                <p style={p2_s}>Hallo <span style={span_s}>{result_[2]}</span>,</p>
                <p>Dein Gesamtumsatz Am Tag liegt zwischen <span style={p_s}>{result_[1]-50}</span> und <span style={p_s}>{result_[1]+50}</span> kcal</p>
                 <p>Und Dein Grundumsatz Am Tag liegt zwischen <span style={p_s}>{result_[0]-50} </span> und <span style={p_s}> {result_[0]+50.0}</span> kcal</p>
            </div>
            
            <div style={inDiv_2}>
                <button id="btn_" style={btn_s} onClick={()=>handle_btn(0)}>
                    ANDERE BENUTZER/IN
                </button>
                <button id="btn_" style={btn_s} onClick={()=>handle_btn(1)}>
                    SIEHE ALLE BENUTZER/IN ERGEBNISSE
                </button>
            </div>
        </div>
    )
}

export function Table(pro) {

    // style§
    var outDiv_1 = {
        minHeight: '100vh',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f7f9f2',
        textShadow:'0px 0px 2px #10182066',
        fontSize: '0.9em',
        backgroundColor: '#b3e7dc',
        alignContent:'space-around',
        justifyItems:'center',
        padding:'3em 0px 0px 0px'
    };
    var table_s = {
        borderCollapse: 'collapse',
        boxShadow: '20px 20px 20px 5px #777',
        background: '#a4af97',
        textAlign: 'left',
    };
    var th_s = {
        background: '#941d26',
        padding: '0.75rem 2rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        fontSize: '0.7rem',
        fontWeight: '900'
    };
    var td_s = {
        padding: '1rem 2rem'
    };
    var btn_s = {
        padding:'8px 2em',
        margin:'2em 0px ',
        fontSize:'24px',
        border:'1px solid #10182055',
        borderRadius:'4px',
        outline:'none',
        cursor:'pointer',
        color:'#777',
        background:'transparent',
        textShadow:'0px 0px 2px #10182099',
        fontWeight:'600',
        transition:'all ease 500ms'
    }

    // btn handler, set state$ to go back 
    var handle_btn = () => {
        pro.set(2)
    }

    // get USERS from the storage$, map over them
    var CUR_USERS = storage$('get','USERS');
    console.log(CUR_USERS)

    let Users_Map = CUR_USERS.map((x)=>{
            return <Table_row in={x} key={Math.random()}/>        
    })

    return (
        <div>

        <Name_bar name_$={storage$('get','ALL_INPUTED_VALUES')[6]} btn_={true} btn_handler={handle_btn}/>
        <div id="tabel" style={ outDiv_1 }>

            <table style={ table_s }>
                <thead>
                    <tr>
                        <th style={ th_s }>
                            NAME
                        </th>
                        <th style={ th_s }>
                            GESAMTUMSATZ
                        </th>
                        <th style={ th_s }>
                            GRUNDBEDARF
                        </th>
                    </tr>
                </thead>
                <tbody>
                {Users_Map}
                </tbody>
            </table>

            <div>
                <button style={btn_s} id='btn_' onClick={handle_btn}><AiOutlineArrowLeft/></button>
            </div>

        </div>
        
        </div>
    );
}
export var Table_row = (pro) =>{
    // get objects from prop
    let GRUNDBEDARF_ = pro.in[0]
    let GRUNDUMSATZ_ = pro.in[1]
    let NAME_ = pro.in[2] 

    var td_s ={
        padding:'1rem 2rem',
        textTransform:'uppercase',
        fontWeight:'700'
    }
    return(
        <tr>
            <td style={td_s}>{NAME_}</td>
            <td style={td_s}>{GRUNDUMSATZ_} kcal</td>
            <td style={td_s}>{GRUNDBEDARF_} kcal</td>
        </tr>
    )
}
