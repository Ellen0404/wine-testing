// import './App.css';
import { Button, Image , Grid} from 'semantic-ui-react'
import FoodStyleCard from './components/FoodStyleCard'
import foodStyles from './foodStyles.json'

const MainComponent = () => {
  return (
    <div>
      <header className="App-header">
        <h2 className=" mb-4">What are you craving today?</h2>
        <Grid.Row columns={4}>
            {foodStyles.map(style=> (
              <Grid.Column>
              <FoodStyleCard name ={style.name} image={style.image}/>
            </Grid.Column>
            ))}
        </Grid.Row>
      </header>
    </div>
  )
}

export default MainComponent
