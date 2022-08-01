import './card-item.styles.css'

const CardItem = ({ monster }) => {
        
        const { name, url } = monster;

        let id = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '').toString()
        const picUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            return (
                <div className='card-container' key={id} >
                    <img    
                        className='card-image' 
                        alt={`Pokemon: ${name}`} src={picUrl} 

                    />
                    <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                    <a href={picUrl}>Abilities</a>
                </div>
            ) 
        

    }


export default CardItem;