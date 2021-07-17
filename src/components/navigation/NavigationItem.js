const NavigationItem = ({ text, active, to }) => {
    return (
        <li>
            <a href={`/#${to}`}>{text}</a>
        </li>
    );
};

export default NavigationItem;
