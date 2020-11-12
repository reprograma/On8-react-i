
const UpperCase = (props) =>{
    const textoInserido = props.texto
    const textoEmCapsLock = textoInserido.toUpperCase()
    return <div>{textoEmCapsLock}</div>    
}

export default UpperCase