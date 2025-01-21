import { MenuItem } from "../entities/MenuItem";
import FoodOrderComponent from '../components/FoodOrderComponent';

import '../styles/FoodsComponent.css';

interface FoodsProps {
    foodItems: MenuItem[];
    onSelectItem: (item: MenuItem) => void;
  }

   function Foods({ foodItems, onSelectItem }: FoodsProps) {
    return (
    <>

        <h4 className="foodTitle">Choose from our Menu</h4>
            <ul className="ulFoods">
                {foodItems.map((item) => (
                <li
                    key={item.id}
                    className="liFoods"
                    onClick={() => onSelectItem(item)}
                >
                    <img
                    className="foodImg"
                    src={`/images/${item.image}`}
                    alt={item.name}
                    />

                    <div className="foodItem">
                    <p className="foodDesc">{item.desc}</p>
                    <p className="foodPrice">{item.price}$</p>
                    </div>
                </li>
                ))}
            </ul>

 </>
 );
};
export default Foods;