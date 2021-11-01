import React from 'react';
import '../App.css';
import Calculatedvalues from './Calculatedvalues';
const Valueform = () => {
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
        targettag.value=(parseFloat(entry)+parseFloat(2*(entry-stoploss)))
        const qtytag=document.getElementById("qty-value")
        qtytag.value=(((risk*capital)/100)/(entry-stoploss)).toFixed(3)

    }
    return (
        <div>
            <form className="form-one">
                <div>
                <label>Enter Capital Amount</label>
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
                <input type="number" id="target-value"/>
                </div>
                <div>
                <label>Quantity </label>
                <input type="number" id="qty-value"/>
                </div>
            </form>
            <Calculatedvalues />
            <div id="Buttons">
            <div>
            <button id="Calculate-button" onClick={calculate}>Calculate </button>
            </div>
            <div>
            <button id="set-as-default"> Set As Default </button>
            </div>
            <div>
            <button id="reset-button">Reset </button>
            </div>
            </div>
           
        </div>
    )
}

export default Valueform
