import React from 'react'
import styles from './InputControls.module.css'

function InputControls({label, ...props}) {
  return (
    <div className={styles.container}>
        {label && <label>{label}</label>}
        <input type="text" {...props} />
      
    </div>
  );
}

export default InputControls
