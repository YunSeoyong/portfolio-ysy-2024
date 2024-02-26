const HexaIcons = ({name}) => {
    return (
        <p 
            className={`${name} hexaicon`}
        >
            <img 
                src={`/assets/icon/icon_${name}.png`}
                alt={name}
            />
        </p>
    );
};

export default HexaIcons;