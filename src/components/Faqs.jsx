import React from 'react'
import './Faqs.css'
const Faqs = (props) => {
    return (
        <details>
            <summary>{props.title}</summary>
            <p>{props.desc}</p>
        </details>
    )
}

export default Faqs