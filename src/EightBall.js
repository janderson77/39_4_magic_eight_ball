import React, {useState} from 'react';
import './EightBall.css'

const choice = (arr) => {
    const randomIdx = Math.floor(Math.random() * arr.length)
    return arr[randomIdx]
}

const EightBall = (props) => {
    const [msg, setMsg] = useState('Think of a question')
    const [color, setColor] = useState('black')
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [maybe, setMaybe] = useState(0)
    const handleClick = () => {
        const {msg, color} = choice(props.answers);
        setMsg(msg);
        setColor(color)
        if(color === 'green'){
            setGood(good+1)
        }else if(color==='goldenrod'){
            setMaybe(maybe+1)
        }else if(color==='red'){
            setBad(bad+1)
        }else{}
    }
    const reset = () => {
        const [msg, color] = ['Think of a question', 'black']
        setMsg(msg);
        setColor(color)
    }
    return (
        <div className='board'>
            <div className="EightBall-header">
                <h1>MAGIC EIGHT BALL</h1>
            </div>
            <div className="EightBall" 
                onClick={handleClick}
                style={{backgroundColor: color}}
                >
            <p>{msg}</p>
            </div>
        <button onClick={reset}>Reset</button>
        <div className='EightBall-scoreHeader'>
            <h2>OUTCOMES</h2>
        </div>
        <div className="EightBall-scoreBoard">
                <h3 className='EightBall-score good'>Good: {good}</h3>
                <h3 className='EightBall-score maybe'>Maybe: {maybe} </h3>
                <h3 className='EightBall-score bad' >Bad: {bad} </h3>
            </div>
        </div>
        
    )
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}

export default EightBall