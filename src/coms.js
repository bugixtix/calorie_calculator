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
import $ from 'jquery'
var xy = 0
var alert_msg = 'BITTE TREFFEN SIE EINE AUSWAHL..' 
export var Hello = (prop) => {
    var [input_$, setInput_$] = useState('')
    var [done_$, setDone_$] = useState(false)
    var hello_s = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'120vh',
        background:`url(${bg_})`,
        // backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        // objectFit:'cover'
    }
    var con_s = {
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
    var label_s = {
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
    var in_s = {
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
        var in_element = document.getElementById('name_in')
        storage$('set','NAME',in_element.value)
        setInput_$(in_element.value)
    }
    // 1___
    // 2___ onKeyDown listener on input
    var input_keyDown = (event) =>{
        enter_key$(event)?handle_enter(input_$):notdo$()
    }
    // 2___ 

    // 3___ handling enter function()
    var handle_enter = (info) =>{
        setDone_$(true)
        let element_ = document.getElementById('td')
        element_.addEventListener('transitionend',()=>{prop.set(1)})
    }
    // 3___
    useEffect(()=>{
        document.getElementById('Hello').addEventListener('keydown',input_keyDown)
    },[input_$])
    return(

        <div id="Hello" style={hello_s}>
            <div style={con_s} id='td'>
            <label htmlFor='name_in' style={label_s}>
                Hi, bitte gib deinen Name ein
            </label>
            <input type={'text'} style={in_s} id='name_in' onChange={input_changed} value={input_$}>
            </input>
            </div>
        </div>
    )
}



// -------------------------------------------

export var InputInfo = (prop) =>{
    // var [switch_$, setSwitch_$] = useState(0)
    var [Schwer_$, setSchwer_$] = useState(null)
    var [Größe_$, setGröße_$] = useState(null)
    var [Alter_$, setAlter_$] = useState(null)

    var inputInfo_s = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'100vh',
        background:`url(${bg_})`,
        backgroundSize:'cover',
        padding:'50px 0px 0px 0px'
    }

    var cont_s = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        // flexWrap:'wrap',
        alignItems:'center',
        padding:'0px 20px',
        // width:'100%',
        background:'transparent',
        // margin:'120px 0px '
        // overflowX:'hidden',
        // borderBottom:'1px solid #10182055'
    }
    var cont_s_ = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:'0px 20px',
        background:'transparent',
        paddingBottom:'20px',
        borderBottom:'1px solid #10182044'
    }

    var range_cont = {
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        margin:'0px 0px 0px 20px',
        padding:'0px 0px 0px 10px',
        // borderLeft:'1px solid #101820',
        // borderRadius:'8px'
    }
    var p_s = {
        background:'#990011',
        color:'#fff',
        textShadow:'2px 2px 2px #000',
        margin:'10px 0px',
        padding:'2px 4px',
        borderRadius:'4px'
    }
    var wrapper_s = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRight:'1px solid #99999977',
        paddingRight:'20px',
    }
    var wrapper_s_ = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textTransform:'uppercase'
    }
    let [name_$,setName_$] = useState()
    let [check_$,setCheck_$] = useState(404)
    let [check_0$, setCheck_0$] = useState(404)

    useEffect(()=>{
        setName_$(storage$('get','NAME'))
    },[name_$])

    var handle_btn = (key_,) =>{
        var name_ = storage$('get', 'NAME') || 'ANONYMOUS'
        let gender_ = storage$('get','GENDER')
        let schwer_ = storage$('get','SCHWER')
        let alter_ = storage$('get','ALTER')
        let größe_ = storage$('get','GRÖßE')
        let sport_ = storage$('get','SPORT_MALE')
        // let sport_dauer = storage$('get','SPORT_DAUER')
        let aktivität_ = storage$('get','AKTIVITÄT')
        // let sport_total = storage$('get','DIT')
        let msg_ = isZero$(gender_) ? 'Bitte gib deinen Geschlecht ein' : isZero$(schwer_) ? 'Bitte gib ein, wie schwer du bist' : isZero$(alter_) ? 'Bitte gib ein, wie alt du bist': isZero$(größe_) ? 'Bitte gib deine Größe ein' : isZero$(sport_) ? 'Bitte gib ein, wie oft du Sport machst' :  isNull$(aktivität_) ? 'Bitte wähle aus, welche zur welchen Aktivitätstufe du gehörst' : 'ALLES GUT'
        if(isNull$(gender_)||isZero$(schwer_)||isZero$(größe_)||isZero$(alter_)||isNull$(sport_)||isNull$(aktivität_))alert(msg_)
        else{
            let activi_conv = aktivität_==0 ? 1.2 : aktivität_==1 ? 1.4 : aktivität_ ==2 ? 1.6 : aktivität_ ==3 ? 1.8 : aktivität_==4 ? 2.0 : 0
            let sport_conv = sport_===0 ? 0.01 : sport_===1 ? 0.06 : sport_===2 ? 0.13 : sport_===3 ? 0.2 : -1
            let RES_ARR = [gender_,schwer_,größe_,alter_,activi_conv,sport_conv,name_]
            let ALL_RES = storage$('get','ALL_RES') || []
            ALL_RES.push(RES_ARR)
            storage$('remove','GENDER'); storage$('remove','SCHWER'); storage$('remove','ALTER'); storage$('remove','GRÖßE'); storage$('remove','SPORT_MALE'); storage$('remove','AKTIVITÄT');
            storage$('set','RES_ARR',RES_ARR)
            storage$('set', 'ALL_RES', ALL_RES)
            prop.set(2)
            console.log(RES_ARR)
        }
    }
        // var handle_btn = ()=>{}
    var coms_ar = ['GENDER','SCHWER','GRÖßE']
    var activity_info =[
        'Stufe : 0',
        'Stufe : 1',
        'Stufe : 2',
        'Stufe : 3',
        'Stufe : 4',
    ]
    var activity_info_i = [
        ['ausschließlich sitzend/liegend','z.B. Alte, gebrechliche Menschen'],
        ['ausschließlich sitzend, wenig oder keine körperliche Freizeitaktivitäten','z.B. Schreibtischtätigkeit, Studierende'],
        ['überwiegend sitzende, zwischendurch gehend oder stehend','z.B. Kraftfahrer, Laboranten, Lehrer'],
        ['überwiegend gehend oder stehend, moderates Sportpensum','z.B. Kellner, Hausfrau /-mann, Handwerker'],
        ['körperlich anstrengende (Berufs-)Tätigkeiten','z.B. Waldarbeiter, Landwirter'],
    ]
    return(
        <div id="InputInfo" style={inputInfo_s}>

            <Name_bar name_$={name_$}/>

            <div style={cont_s}>
                <div style={wrapper_s_}>
                    <p style={p_s}>Ich Bin Ein<span>{check_$===0 ? 'e' : check_$===1 ? '' : '/e'}</span> <span>{check_$===0 ? ' Frau' : check_$===1 ? ' Mann' : ' ... '}</span></p>
                <div style={wrapper_s}>
                <Choice comp={0} text_I={'FEMALE'} info={'frau'} id={0} src={woman_} class={['label_I','radio_I']} state={check_$} set={setCheck_$}/>
                <Choice comp={0} text_I={'MALE'} info={'mann'} id={1} src={man_} class={['label_II','radio_II']} state={check_$} set={setCheck_$}/>
                </div>
                </div>
                <div id="range_container" style={range_cont}>
            <Range_ id={0} title={'Ich Wiege '} title_={''} unit_={'kg'} min={'30'} max={'99'} value={Schwer_$} set={setSchwer_$}/>
            <Range_ id={1} title={'Ich Bin '} title_={'Groß'} unit_={'cm'}min={'100'} max={'200'} value={Größe_$} set={setGröße_$}/>
            <Range_ id={2} title={'Ich Bin '} title_={'Alt'} unit_={'jahre'}min={'10'} max={'65'} value={Alter_$} set={setAlter_$}/>
                </div>

            </div>

            {<Athlete_ />}
            
            <p style={p_s}> Wie Verbringe Ich Meinen Tag?</p>
            <div style={cont_s_}>
                <Choice comp={1} text_I={0} info={activity_info[0]} info_i={activity_info_i[0]} id={2} src={activity_0} class={['label_II','radio_II']} state={check_0$} set={setCheck_0$}/>
                <Choice comp={1} text_I={1} info={activity_info[1]} info_i={activity_info_i[1]} id={3} src={activity_1} class={['label_II','radio_II']} state={check_0$} set={setCheck_0$}/>
                <Choice comp={1} text_I={2} info={activity_info[2]} info_i={activity_info_i[2]} id={4} src={activity_2} class={['label_II','radio_II']} state={check_0$} set={setCheck_0$}/>
                <Choice comp={1} text_I={3} info={activity_info[3]} info_i={activity_info_i[3]} id={5} src={activity_3} class={['label_II','radio_II']} state={check_0$} set={setCheck_0$}/>
                <Choice comp={1} text_I={4} info={activity_info[4]} info_i={activity_info_i[4]} id={6} src={activity_4} class={['label_II','radio_II']} state={check_0$} set={setCheck_0$}/>
            </div>
            
            <ForBack_btn handler={handle_btn} value={'Rechne mein Gesamtumsatz'}/>

        </div>
    )
}
export var Athlete_ = (pro) => {

    var [input_va$, setVa_$] = useState(0)
    var [times_va$, setTimes_$] = useState(1)
    var [show_$, setShow_$] = useState(false)
    var gr_con_s = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flexStart',
        margin:'10px 0px 30px 0px',
        background:'transparent',
        // height:'250px',
        transition:'all ease 500ms',
        padding:'4px 0px 0px 0px',
        borderBottom:'1px solid #10182055',
        borderTop:'1px solid #10182055',
    }
    var text_s = {
        background:'#990011',
        color:'#fff',
        textShadow:'2px 2px 2px #000',
        // fontWeight:'700'
        margin:'10px 0px',
        padding:'2px 4px',
        borderRadius:'4px'
    }
    var con_s = {
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
    var handle_times = (event) => {
        setTimes_$(event.target.id)
        storage$('set','SPORT_MALE',Number(event.target.id))
        let ele_array = document.querySelectorAll('.li_')
        ele_array.forEach(i=> i.style.background='transparent')
        ele_array[event.target.id].style.background='#fee715'
        
    }
    
    useEffect(()=>{
    },[times_va$])
    
    return(

        <div style={gr_con_s}>
            <p style={text_s}>Wie Oft Mach Ich Sport In Der Woche?</p>
            <div style={con_s}>
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
    
    let [range_va$, setRange_va$] = useState(0)
    let range__ = `range${pro.id}`
    let items_ = ['SCHWER','GRÖßE','ALTER']
    let units_ =['kg','cm','Jahre']
    // $('#range').on("input", function() {
    //     $('.output').val(this.value +",000  $" );
    //     }).trigger("change");

        useEffect(()=>{
            let range_ = document.getElementById(range__)
            let output_ = document.querySelector('.output')
            // range_.addEventListener('change',()=>{
            //     setRange_va$(range_.value)
            // })
            // console.log(range__)
            range_.addEventListener('input',()=>{
                pro.set(range_.value)
            })
            storage$('set',items_[pro.id],pro.value)

        },[pro.value])
        var range_con_s = {
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
        var output_change = (event) =>{
            
            pro.set(event.target.value)
        }
    return(
        <div style={range_con_s} >
            <p className="budget">{pro.title}<span>{pro.value ? `${pro.value} ${pro.unit_} `:' ... '}</span>{ pro.title_}</p>
            <label htmlFor="range">
                <input type="range" name="range" id={range__} min={pro.min} max={pro.max} step="0.5" defaultValue={0} />
            </label>
            <span className="conta_">
            <input type={"number"} htmlFor="range" step={1} value={`${pro.value}`} onChange={(event)=>{output_change(event)}} className="output"></input> <span id="unit_">{units_[pro.id]}</span>
            </span>
        </div>
    )
    // PROPLEM HERE!
}

export var Choice = (pro) => {
    var [com_0_$,setCom0_$] =useState()
    var [com_1_$,setCom1_$] =useState()

    var [checkedX_$,setCheckedX_$] = useState(false)
    var [s$,setS$] = useState(false)

    var choice_s = {
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
        background: pro.comp===0 ? (pro.state===0&&pro.id===0 ? '#fee715' : pro.state===1&&pro.id===1 ? '#fee715' : 'transparent' ) : pro.comp===1 ? (pro.state===2&&pro.id===2 ? '#fee715' : pro.state===3&&pro.id===3 ? '#fee715' :pro.state===4&&pro.id===4 ? '#fee715' :pro.state===5&&pro.id===5 ? '#fee715' :pro.state===6&&pro.id===6 ? '#fee715' : 'transparent' ) : 'transparent' 
        // pro.id<2 ?  
        // (pro.state===0 ? 
        // (pro.id === 0 ? '#fee715' : 'transparent') : 
        // pro.state===1 ? 
        // (pro.id === 1 ? '#fee715' : 'transparent') : 
        // 'transparent') :
        // (pro.state===2 ? 
        // (pro.id === 2 ? '#fee715' : 'transparent') : 
        // pro.state===3 ? 
        // (pro.id === 3 ? '#fee715' : 'transparent') :
        // pro.state===4 ? 
        // (pro.id === 4 ? '#fee715' : 'transparent') :
        // pro.state===5 ? 
        // (pro.id === 5 ? '#fee715' : 'transparent') :
        // pro.state===6 ? 
        // (pro.id === 6 ? '#fee715' : 'transparent') :
        // 'transparent')
    }
    var bg__ = (id_) =>{
        let x = document.querySelector("[aria-describedby='al']")
        pro.comp===0 ? (pro.id===0 ? pro.set(0) : pro.set(1)) : (pro.id===2 ? pro.set(2) : pro.id===3 ? pro.set(3) : pro.id===4 ? pro.set(4) : pro.id===5?pro.set(5) : pro.set(6))
    }
    var con_s = {
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
    var label_s = {
        position:'relative',
        zIndex:'1',
        padding:'0px 4px',
        fontSize:'14px',
        // fontWeight:'400',
        textShadow:'1px 1px 1px #fff',
        cursor:'pointer',
        textTransform:'uppercase',
    }
    var radio_s = {
        position:'relative',
        zIndex:'1',
        padding:'0px 0px',
        width:'22px',
        WebkitAppearance:'none',
        width:'4px',
        height:'0px',
        background:'transparent',
        borderRadius:'2px',
        // border: '2px solid #000',
        cursor:'pointer',
    }
    var info_s = {
        textAlign:'center',
        cursor:'pointer',
        textShadow:'0px 0px 1px #f1f2f3',
        fontSize:'18px',
        // color: pro.comp===1 ? (pro.state===2&&pro.id===2 ? '#990011' : pro.state===3&&pro.id===3 ? '#990011' :pro.state===4&&pro.id===4 ? '990011' :pro.state===5&&pro.id===5 ? '#990011' :pro.state===6&&pro.id===6 ? '#990011' : '#101820' ) : '#101820'
    }
    let x = Math.random()

    // 
    let update = (event) =>{
        storage$('set',figureKey(pro.state),event.target.title)
    }
    
    useEffect(()=>{
        // storage$('set',figureKey(pro.state),'false')
    },[x])
    var handle_click = (event) =>{
    //     pro.id<2 ?
    //    ( pro.id===0 ? pro.set(0) :
    //     pro.id===1 ? pro.set(1) : notdo$()) :
    //     (pro.id===2 ? pro.set(2) :
    //     pro.id===3 ? pro.set(3) :
    //     pro.id===4 ? pro.set(4) :
    //     pro.id===5 ? pro.set(5) :
    //     pro.id===6 ? pro.set(6) :
    //     pro.set(7))
    //     console.log(pro.state)
    bg__()
    }

    var figureKey = (key_) =>{
        return key_ === 0 ? 'GENDER' : key_ ===1 ? 'GENDER' : key_ === 2 ? 'AKTIVITÄT' : key_===3 ? 'AKTIVITÄT' : key_===4 ? 'AKTIVITÄT' : key_===5 ? 'AKTIVITÄT' : key_===6 ? 'AKTIVITÄT' : 'UNKNOWN ID'
    }
    return(
        <label aria-describedby={'al'} aria-label={`al${pro.id}`} id={pro.id} style={choice_s} htmlFor={x} className={`${pro.class[0]} choice_I`} onClick={(event)=>handle_click(event)}>
            <img src={pro.src} style={img_s}></img>
            <div style={con_s}>
                <label htmlFor={x} style={label_s}>{pro.info}</label>
                <input type={'radio'} name={'same'} title={pro.text_I}  onClick={(event)=>update(event)}  id={x} className={pro.class[1]} style={radio_s}></input>
            </div>
                {pro.info_i && <label htmlFor={x} style={info_s}>{pro.info_i[0]} <br></br> {pro.info_i[1]}</label>}
        </label>
    )
}
export var ForBack_btn = (pro) => {

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
        background:'transparent',
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
    var nameBar_s = {
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
    <div style={nameBar_s}>
        <p style={p_s}>KALORIE RECHNER</p>
        {pro.btn_ && <button style={btn_s} id='btn_' onClick={pro.btn_handler}><AiOutlineArrowLeft/></button>
        }
        <p style={p_s}>{pro.name_$}</p>
    </div>
    )
}
export var Result = (pro) =>{
    let name_ = storage$('get','NAME') || 'mein guter'
    let var_ = storage$('get','RES_ARR') || 0
    let res__ = calorieCalculator$(var_[0],var_[1],var_[2],var_[3],var_[4],var_[5],name_) || 0
    let USERS_ = storage$('get','USERS') || []
    USERS_.every(x=>x[2]!==res__[2]) ? USERS_.push(res__) : notdo$()
    // USERS_.push(res__)
    storage$('set','USERS', USERS_)
    console.log(USERS_)
    var con_s = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
        background:`url(${bg_})`,
        backgroundSize:'cover'
    }
    var flex_con = {
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
    var div_s = {
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
    var i_1 = {
        margin:'0px 0px 8px 0px'
    }
    // console.log(pro.state)
    var handle_btn = (id) =>{
        id === 0 ? pro.set(0) : id===1 ? pro.set(9) : <h1>404</h1>
    }

    return(
        <div style={con_s}>
            <div style={div_s}>
                <p style={i_1}>Hallo <span style={span_s}>{res__[2]}</span>,</p>
                <p>Dein Gesamtumsatz Am Tag liegt zwischen <span style={p_s}>{res__[1]-50}</span> und <span style={p_s}>{res__[1]+50}</span> kcal</p>
                 <p>Und Dein Grundumsatz Am Tag liegt zwischen <span style={p_s}>{res__[0]-50} </span> und <span style={p_s}> {res__[0]+50.0}</span> kcal</p>
            </div>
            
            <div style={flex_con}>
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

    var tabelcon_s = {
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

    var handle_btn = () => {
        pro.set(2)
    }

    var CUR_USERS = storage$('get','USERS');
    console.log(CUR_USERS)

    let myArray = [0,1,2,3,4,5,6,7,8,9,10]
    let Users_Map = CUR_USERS.map((x)=>{
            return <Table_row in={x} key={Math.random()}/>
        
    })
    console.log(storage$('get','RES_ARR')[6])

    return (
        <div>
            <Name_bar name_$={storage$('get','RES_ARR')[6]} btn_={true} btn_handler={handle_btn}/>
        <div id="tabel" style={ tabelcon_s }>

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

// TODO::
// Name bar, which doesn't get changed till the answers were gotten.
// coms, like Gender, Weight & Wize & Age , Activity & Athlete , 
//      Answer(with possibillity to convert it from kcal to kj and back)
//      Two buttons: Again & All users info in one table 