import React, {useState} from 'react'
import css from './style.module.css'


function List({countries, getValue, disabled, title}) {
    const [isListOpen, setList] = useState(false)

    function handleOption(value) {
        setList(!isListOpen)
        getValue(value)
	}

    return (
		<div className={`${css.container} full`}>
            <div className={`${css.wrapper} ${isListOpen && css.open} flex`}>
                <div 
                    className={`${css.headerTitle} flex between pointer`}
                    onClick={() => setList(!isListOpen)}
                    disabled={disabled}
                >
                    <span className={css.title}>{title}</span>
                    <div className={css.arrow}></div>
                </div>
            </div>
            {
                isListOpen && (
                    <div
                        className={css.listWrapper}
                        onMouseLeave={() => setList(false)}
                    >
                        {
                            countries.map(({name, code}) => {
                                return(
                                <p 
                                    className={`${css.option} pointer`}
                                    key={code}
                                    name={code}
                                    onClick={() => handleOption(name)}
                                >
                                {name}
                                </p>
                            )})
                        }
                    </div>
                )
            }
        </div>
    )
}
export default List;