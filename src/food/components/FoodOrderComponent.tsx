import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { MenuItem } from "../entities/MenuItem";
import { foodItemsContext } from "../pages/FoodPage";

import '../styles/FoodOrderComponent.css';

interface FoodOrderComponentProps {
    item: MenuItem;
    onOrderSubmit: () => void;
  }

function FoodOrderComponent({ item, onOrderSubmit }: FoodOrderComponentProps) {

    const [cantidad, setCantidad] = useState(1);
    const [cliente, setCliente] = useState("");
    const [numero, setNumero] = useState("");
    const [isOrdered, setIsOrdered] = useState(false);

    const menuItems: MenuItem[] = useContext(foodItemsContext);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

      event.preventDefault();
      setIsOrdered(true);
      menuItems.map((item: MenuItem) => {
        if (item.id === item.id) {
          item.quantity = item.quantity - cantidad;
          onOrderSubmit();
        }
      });
        
    };
   
    return (

          <div>
                <form className="enrolForm" onSubmit={handleSubmit}>
                  <h2>Datos de la compra - {item.name}</h2>
                  <label>Cantidad:</label>
                  <input
                    type="number"
                    min="1"
                    max={item.quantity}
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                  />
                  <br />
                  <label>Cliente:</label>
                  <input
                    type="text"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                  />
                  <br />
                  <label>Número:</label>
                  <input
                    type="text"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                  />
                  <br />
                  <input type="submit" value="Grabar" />
                  <button type="button" onClick={() => onOrderSubmit()}>
                    Cancelar
                  </button>
                </form>
          </div>

    );
   }

export default FoodOrderComponent;