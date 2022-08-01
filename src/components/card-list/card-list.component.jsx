import './card-list.styles.css'
import CardItem from "../card-item/card-item.component";

const CardList = ({ monsters }) => {

            return (<div className="card-list">
                
                {
                    monsters.map((monster) => {

                    return <CardItem monster={ monster } />
                    })}
                    
            </div>
            )
        }

export default CardList;