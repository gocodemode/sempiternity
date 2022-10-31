import React from 'react'
import './switch.scss'

const Switch = ({ onChange }) => {
    return (
      <div>
        <label className="ui-switch">
          <input id="check" className="input" type="checkbox" 
            onChange={onChange} />
          <div className="circle"></div>
        </label>
      </div>
    )
}

export default Switch