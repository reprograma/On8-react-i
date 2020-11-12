const Tick = () => {
    return(
       <div>
            <h1>Meu Tick</h1>
            <h2>Horário Brasileiro de Verão: {new Date().toLocaleTimeString()}</h2>
       </div> 
    )
}

export default Tick