import { MenuCounter } from "../menu-counter/menu-counter.jsx";

export const Menu = ({ menu }) => {
    return (
        <div className(style.root)>
            {menu?.map((item) => (
                <li key={item.id}>
                    {item.name} - ${item.price}
                    <MenuCounter key={item.id} />
                </li>
            ))}
        </div>
    );
};