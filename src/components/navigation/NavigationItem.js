
const NavigationItem = ({ text, active, to }) => {
    const display = active ? text + " ●" : " ○";

    return (
        <li className={"item"}>
            <a
                className={`link ${active && "active"}`}
                href={`/#${to}`}
            />
        </li>
    );
};

export default NavigationItem;
