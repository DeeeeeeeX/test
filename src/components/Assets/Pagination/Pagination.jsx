import React from 'react';
import s from "./Pagination.module.scss";

const Pagination = ({currentPage, setCurrentPage}) => {

    return (
        <div>
            <div className={s.pagination}>
                <button
                    className={s.button}
                    onClick={() => setCurrentPage(currentPage <= 1 ? 1 : currentPage - 1)}
                >
                    ←
                </button>
                <input
                    className={s.styledInput}
                    type="number"
                    name="currentPage"
                    value={currentPage}
                    onChange={(e) => setCurrentPage(e.target.value <= 1 ? 1 : e.target.value)}
                />
                <button
                    className={s.button}
                    onClick={() => {setCurrentPage(currentPage + 1)}}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default Pagination;