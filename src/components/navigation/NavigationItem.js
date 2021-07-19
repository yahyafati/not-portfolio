import styled from "styled-components";

const NavigationItem = ({ text, active, to }) => {
    const display = active ? text + " ●" : " ○";
    const ListItemStyle = styled.li``;

    // const [active, setActive] = useState(active);

    const AnchorStyle = styled.a`
        display: block;
        color: black;
        transition: all 0.5s;

        &.active {
            font-size: 14px;
        }

        &::before {
            content: "${display}";
        }

        &:hover {
            transform: translateX(-5px);
        }
    `;

    return (
        <ListItemStyle>
            <AnchorStyle
                className={active && "active"}
                href={`/#${to}`}
            ></AnchorStyle>
        </ListItemStyle>
    );
};

export default NavigationItem;
