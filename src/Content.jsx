import React from "react";
import List from "./List";

const Content = ({ items, setItems }) => {
    return (
        <ul>
            {items.map((item) => (
                <List key={item.id} 
                      item={item}
                      
                />
            )
            )}
        </ul>
    )

}

export default Content;