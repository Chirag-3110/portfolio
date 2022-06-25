import React from 'react';
import './ProgressBar.css';

const ProgressBar=(props)=>{
    return(
        <div className='container'>
            <div className='progress' style={{width: 350}}>
                <div className='bar'>
                    <div className='percent' style={{width:props.percent}}><span>{props.percent}</span></div>
                </div>
                <div className='bar one'>
                    <div className='percent' style={{width:props.percent}}></div>
                </div>
                <div className='bar two'>
                    <div className='percent' style={{width:props.percent}}></div>
                </div>
                <div className='bar three'>
                    <div className='percent' style={{width:props.percent}}></div>
                </div>
                <div className='bar four'>
                    <div className='percent' style={{width:props.percent}}></div>
                </div>
            </div>
            <h1>{props.title}</h1>
        </div>
    )
}
export default ProgressBar