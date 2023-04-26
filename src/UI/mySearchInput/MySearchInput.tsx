import React, { ChangeEvent } from 'react';
import searchIcon from '../../assets/searchIcon.svg'
import './mySearchInput.scss'

export interface IMySearchInput{
    placeholder?: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const MySearchInput: React.FC<IMySearchInput> = ({ placeholder, onChange }) => {

    return (
        <>
            <div className="searchWrapper" >
                <input
                    type="text"
                    placeholder={placeholder ? placeholder : 'Текст для поиска'}
                    onChange={onChange}
                />
                <img src={searchIcon} alt="search icon" />
            </div>
        </>
    )
}

export {MySearchInput}