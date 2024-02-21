const HexaIcons = ({name}) => {
    return (
        <p className={name}>
            <img 
                src={`/assets/icon/icon_${name}.png`}
                alt={name}
            />
        </p>
    );
};

export default HexaIcons;