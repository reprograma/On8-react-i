import filmes from '../Services/dados'

const OutraLista = () =>{
    return(
        <div>
            {filmes.map(filme => 
                <li key={filme.id}>
                    {filme.nome}
                </li>
            )}
        </div>
    )
}

export default OutraLista
