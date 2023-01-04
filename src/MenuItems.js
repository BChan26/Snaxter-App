import { useState, useEffect } from "react";
import axios from "axios";

const MenuItems = () => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        const getMenuItems = async () => {
            const response = await axios.get(
                `http://localhost:8000/api/menu_items/`
            );
            setMenuItems(response.data);
        };
        getMenuItems();
        console.log(menuItems);
    }
    , []);
    return menuItems;
}

const itemsArray = menuItems

function getItemData() {
    let itemData = itemsArray.find(item => item.id === id)

    if (itemdata == undefined) {
        console.log("Item not found for ID: " + id)
        return undefined
    }
    return itemData
}

export { getItemData, itemsArray}