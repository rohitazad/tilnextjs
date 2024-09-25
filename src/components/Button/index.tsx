"use client"

const Button = ()=>{
    const onClick = ()=>{
        alert("clicked")
    }
    return (
        <button onClick={onClick}>Click me</button>
    )
}

export default Button;