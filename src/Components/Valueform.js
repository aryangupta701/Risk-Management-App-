import React from 'react';
import '../App.css';
const Valueform = () => {
    return (
        <div>
            <form className="form-one">
                <div>
                <label>Enter Capital Amount</label>
                <input value="50000" />
                </div>
                <div>
                <label>Enter Risk Percentage(%)</label>
                <input value="1" />
                </div>
                <div>
                <label>Entry Price</label>
                <input />
                </div>
                <div>
                    <span>
                    <label>Stoploss Price</label>
                    </span>
                <input />
                </div>
            </form>
            <p>
                Target value : 
            </p>
        </div>
    )
}

export default Valueform
