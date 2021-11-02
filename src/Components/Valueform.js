import React from 'react';
import '../App.css';
const Valueform = () => {
    let flag=false;

    const calculate=()=>{
        const capitaltag=document.getElementById("capital-value")
        const capital=capitaltag.value

        const risktag=document.getElementById("risk-value")
        const risk=risktag.value

        const entrytag=document.getElementById("entry-value")
        const entry=entrytag.value

        const stoptag=document.getElementById("stoploss-value")
        const stoploss=stoptag.value

        const targettag=document.getElementById("target-value")
        const qtytag=document.getElementById("qty-value")
        if(!flag)
        {
        targettag.value=(parseFloat(entry)+parseFloat(2*(entry-stoploss))).toFixed(3)
        qtytag.value=(((risk*capital)/100)/(entry-stoploss)).toFixed(3)
        }
        else {
        targettag.value=(parseFloat(entry)-parseFloat(2*(stoploss-entry))).toFixed(3)
        qtytag.value=(((risk*capital)/100)/(stoploss-entry)).toFixed(3)
        }
    }

    const defaultbutton =()=>{
        const capitaltag=document.getElementById("capital-value")
        capitaltag.defaultValue=capitaltag.value

        const risktag=document.getElementById("risk-value")
        risktag.defaultValue=risktag.value
    }
    const reset=()=>{
        const capitaltag=document.getElementById("capital-value")
        capitaltag.value=capitaltag.defaultValue

        const risktag=document.getElementById("risk-value")
        risktag.value=risktag.defaultValue

        const entrytag=document.getElementById("entry-value")
        entrytag.value={}

        const stoptag=document.getElementById("stoploss-value")
        stoptag.value={}

        const targettag=document.getElementById("target-value")
        targettag.value={}

        const qtytag=document.getElementById("qty-value")
        qtytag.value={}
    }
    return (
        <div>
            <form className="form-one">
            <div id="toggle-bar" >
            <span>Trade Type (Buy/Sell)</span>
            <label className="switch">    
            <input type="checkbox" onClick={()=>{flag=!flag}}/>
            <span className="slider round"></span>
            </label>
                </div>
                <div>
                <label>Enter Capital </label>
                <input type="number" id="capital-value" defaultValue={50000} />
                </div>
                <div>
                <label>Enter Risk (%)</label>
                <input type="number" id="risk-value" defaultValue={1} />
                </div>
                <div>
                <label>Entry Price</label>
                <input type="number" id="entry-value" />
                </div>
                <div>
                <label>Stoploss Price</label>
                <input type="number" id="stoploss-value"/>
                </div>
                <div>
                <label>Target Price</label>
                <input type="number" id="target-value" value=""/>
                </div>
                <div>
                <label>Quantity </label>
                <input type="number" id="qty-value" value="" />
                </div>
            </form>
            <div id="Buttons">
            <div>
            <button id="Calculate-button" onClick={calculate}>Calculate </button>
            </div>
            <div>
            <button id="set-as-default" onClick={defaultbutton}> Set As Default </button>
            </div>
            <div>
            <button id="reset-button" onClick={reset}>Reset </button>
            </div>
            </div>
           
        </div>
    )
}

export default Valueform
