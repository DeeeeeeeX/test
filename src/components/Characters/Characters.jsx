import s from "./Characters.module.scss";
import Popup from "../Assets/Popup/Popup";

const Characters = ({characters, handleMouseEnter, handleMouseLeave, activeCharacter}) => {

    return (

        <div>
            <div className={s.characters}>
                {characters.map((character) => (
                    <div
                        className={s.charactersBlock}
                        onMouseOver={() => handleMouseEnter(character)}
                        onMouseOut={handleMouseLeave}
                        key={character.id}
                    >
                        name: {character.name}
                        <img src={character.image} alt="avatar"/>
                        {activeCharacter === character && (
                            <Popup>
                                <div className={s.description}>
                                    <div className={s.descriptionText}>
                                        <div className={s.descriptionEl}>name: {character.name}</div>
                                        <div className={s.descriptionEl}>status: {character.status}</div>
                                        <div className={s.descriptionEl}>species: {character.species}</div>
                                        <div className={s.descriptionEl}>type: {character.type}</div>
                                        <div className={s.descriptionEl}>gender: {character.gender}</div>
                                    </div>
                                    <img src={character.image} alt="avatar"/>
                                </div>
                            </Popup>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;