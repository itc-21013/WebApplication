import React, {Component} from 'react';
import { CardList } from './card-list.component';
import { SearchBox } from './search-box.component';
import { NavigationBtn } from './back-to-top';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      pokemons: [],
      search:''
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(name => this.setState({pokemons:name.results}));
  }

  handleChange=(e) => {
    this.setState({search: e.target.value});
  };

  render(){

    const {pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div className="App">
        <h4><a href="https://www.linkedin.com/in/surojit-manna" target="_blank" noreferrer>Author</a></h4>
        <h1>Pokemon Database</h1>
        <SearchBox
          placeholder='Search Pokemon' 
          handleChange= {this.handleChange}
        />
        <NavigationBtn/>
        <CardList pokemons={fileteredPokemons}></CardList>

      </div>
    );
  }
}

export default App;
DEV Community – A constructive and inclusive social network for software developers. With you every step of your journey.

Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community © 2016 - 2021.
