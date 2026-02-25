import {FoodMenuList} from "../data/foodmenu.js"
import "./foodmenu.css"
const FoodMenu =()=>{
    return(
       <div>
         <h1>Food Menu</h1>
           <div  className="foodmenubody">
            {
              FoodMenuList.map(
                (fm,i)=>{
                    return(
                        <div className="menucard" key={`${fm.id}-${fm.name}-${i}`}>
                            <h3>{fm.name}</h3>
                            <b>price:Rs.{fm.price}</b>
                            <img src={fm.image} alt={fm.name} width="200px"></img>

                        </div>

                    )
                }

              )

            }

          </div>
       </div>
    )
}
export default FoodMenu
