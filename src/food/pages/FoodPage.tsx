
import React from 'react';
import { ChangeEvent, useState } from 'react';
import { MenuItem } from '../entities/MenuItem';
import FoodsComponent from '../components/FoodsComponent';
import FoodOrderComponent from '../components/FoodOrderComponent';
export const foodItemsContext = React.createContext<MenuItem[]>([]);

import '../styles/FoodPage.css';

function FoodPage() {

    const textoGlobal = import.meta.env.VITE_EJEMPLO;

    const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        {
            "id": 1,
            "name": "Helado",
            "quantity": 40,
            "desc": "Helado de vainilla",
            "price": 24,
            "image": "image01.jpg"
        },
        {
            "id": 2,
            "name": "Pizza",
            "quantity": 45,
            "desc": "Pizza de peperoni",
            "price": 24,
            "image": "image02.jpg"
        },
        {
            "id": 3,
            "name": "Hamburguesa pequeña",
            "quantity": 64,
            "desc": "Hamburguesa que es más pequeña que una mano",
            "price": 12,
            "image": "image02.jpg"
        },
        {
            "id": 4,
            "name": "Hamburguesa grande",
            "quantity": 50,
            "desc": "Hamburguesa tamaño de cabeza",
            "price": 24,
            "image": "image02.jpg"
        }
    ]);

    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

    const handleOrderSubmit = () => {
      setSelectedItem(null); // Volver al listado
    };

    return (

    <foodItemsContext.Provider value={menuItems}>
      <div className="App">
        <h1>FoodPage</h1>
        <h2>{ textoGlobal }</h2>

        <button className="toggleButton" onClick={() =>
              setIsChooseFoodPage
              (!isChooseFoodPage)}>
              {isChooseFoodPage ? "Disponibilidad" : "Pedir Comida"}
          </button>

        <h3 className="title">Comida Rápida Online</h3>

        {!isChooseFoodPage && ( 
          <>
              <h4 className="subTitle">Menús</h4>
              <ul className="ulApp">
                  {menuItems.map((item) => {
                  return (
                  <li key={item.id} className="liApp">
                      <p>{item.name}</p>
                      <p>#{item.quantity}</p>
                  </li>
                  );
                  })}
              </ul>
          </>
        )}
          {/* {isChooseFoodPage && <FoodsComponent foodItems={menuItems}></FoodsComponent>} */}
          {isChooseFoodPage &&
          (selectedItem ? (
            <FoodOrderComponent
              item={selectedItem}
              onOrderSubmit={handleOrderSubmit}
            />
          ) : (
            <FoodsComponent
              foodItems={menuItems}
              onSelectItem={(item) => setSelectedItem(item)}
            />
          ))}
      </div>
    </foodItemsContext.Provider>


    )
}
export default FoodPage;
