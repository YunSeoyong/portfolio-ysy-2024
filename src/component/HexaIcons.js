const HexaIcons = ({name, over, out}) => {
    return (
        <p 
            className={`${name} hexaicon`}
            onMouseOver={over}
            onMouseOut={out}
        >
            <img 
                src={`/assets/icon/icon_${name}.png`}
                alt={name}
            />
        </p>
    );
};

export default HexaIcons;