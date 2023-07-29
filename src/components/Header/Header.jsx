import s from "./Header.module.scss";
import React from "react";

const Header = ({filters, handleFilterChange}) => {

    const filterFields = [
        { name: 'name', placeholder: 'name' },
        { name: 'status', placeholder: 'status' },
        { name: 'species', placeholder: 'species' },
        { name: 'type', placeholder: 'type' },
        { name: 'gender', placeholder: 'gender' },
    ];

    return (
        <div>
            <header className={s.header}>
                <div className={s.title}>
                    the Rick and Morty
                    <br/>
                    characters
                </div>
                <div className={s.filterInputs}>
                    {filterFields.map((field) => (
                        <input
                            className={s.styledInput}
                            key={field.name}
                            type="text"
                            name={field.name}
                            value={filters[field.name]}
                            onChange={handleFilterChange}
                            placeholder={field.placeholder}
                        />
                    ))}
                </div>
            </header>
        </div>
    );
};

export default Header;