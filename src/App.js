import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'


const App = () => {
      console.log('render')
      const [monsters, setMonsters] = useState([]);
      const [searchField, setSearchField] = useState('');
      const [filteredPokemons, setFilteredPokemons] = useState(monsters)

      useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then((res) => res.json())
        .then((body) => setMonsters(body.results))


      }, []) 

      useEffect(() => {
        const newFilteredPokemons = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField);
          
          } 
        )
        setFilteredPokemons(newFilteredPokemons);

      }, [monsters, searchField])


      const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)
        
      }



      return (
        
        <div className="App">

            <h1 className='app-title'>Pokédex</h1>

            <SearchBox 
            className='search-box'
            onChangeHandler={ onSearchChange } 
            placeholder='search for pokemon'/>

            <CardList monsters={ filteredPokemons } />

        </div>
       ) 
}


// eslint-disable-next-line
{/* class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      // monsterId: [],
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then((res) => res.json())
    .then((body) => (

      this.setState(() => {
      return ({
        monsters: body.results,
        // monsterId: 
      })
    })
    )

  )

    
  }


  onSearchChange = (e) => {
    // console.log(e)
    const searchField = e.target.value.toLocaleLowerCase()


    this.setState(() => {
      return ({ searchField })
    })
  }

  render () {

    const { monsters, searchField } = this.state;
    const { onSearchChange  }  = this;

    const filteredPokemons = monsters.filter((monster) => (
      monster.name.toLocaleLowerCase().includes(searchField)
      )  
    )

    return (

        <div className="App">
          <h1 className='app-title'>Pokédex</h1>
          <SearchBox 
          className='search-box'
          onChangeHandler={ onSearchChange } 
          placeholder='search for pokemon'/>

          <CardList monsters={ filteredPokemons } />
        </div>
        
    )
}

} */}


export default App;
