
const NavigationItem = ({ text, active, to }) => {

    return (
        <li className={"item"}>
            <a
                className={`link ${active && "active"}`}
                href={`/#${to}`}
            > </a>
        </li>
    );
};

export default NavigationItem;
