import { MenuCounter } from "../menu-counter/menu-counter.jsx";

export const Menu = ({ menu }) => {
    return (
        <div>
            {menu?.map((item) => (
                <li key={item.id}>
                    {item.name} - ${item.price}
                    <MenuCounter/>
                </li>
            ))}
        </div>
    );
};