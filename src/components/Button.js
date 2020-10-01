import React from 'react'
import './Button.css'

const STYLES = [
    
    'btn--primary',
    'btn--outline'

]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button =({
     children,
     type,
     onClick,
     buttonstyle,
     buttonsize
}) => {

    const checkButtonStyle=STYLES.includes(buttonstyle) ? buttonstyle:STYLES[0]
    const checkButtonSize=SIZES.includes(buttonsize) ? buttonsize : SIZES[0]
   
    return(
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
    </button>
    )
}