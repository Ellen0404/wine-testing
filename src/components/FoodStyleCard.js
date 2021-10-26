import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'


const FoodStyleCard = ({name, image}) => {

    return (

        <Card className="m-2">
          <Image src={image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
              <Card.Description className="description">
                <h6>Matthew is a musician living in Nashville.</h6>
              </Card.Description>
            </Card.Content>
          <Card.Content style={{backgroundColor: "#282c34"}}extra>
          <div style={{textAlign: "center"}}>
              <Button className="ui orange inverted button m-2">Order In</Button>
              {/* <Button.Or /> */}
              <Button className="ui green inverted button"><i class="fas fa-utensils"></i>Dine In</Button>
            </div>
          </Card.Content>
          </Card>
  )
}

export default FoodStyleCard