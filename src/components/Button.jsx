
const Button = props => {
    return (
        <button className={`btn ${props.className}` } onClick = {props.onClick ? () => props.onClick() : null}>{props.children}</button>
    )
}

const OutlineButton = props => {
    return (
        <Button className ={`btn-outline ${props.className}`}  onClick = {props.onClick ? () =>  props.onClick() : null}>{props.children}</Button>
    )
}




export default Button
export {OutlineButton}