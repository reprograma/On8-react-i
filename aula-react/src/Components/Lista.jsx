import filmes from '../Services/dados'

const Lista = () =>{
    return(
        <div>
            {filmes.map(filme => 
                <div key={filme.id}>
                    <img width={100} src={filme.capa} alt="capa de filme"/>                    
                    <h1>{filme.nome}</h1>
                    <p>{filme.genero}</p>
                </div>                
            )}
        </div>
    )
}

export default Lista