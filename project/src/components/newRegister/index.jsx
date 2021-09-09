import React from 'react';
import List from '../list';
import css from './style.module.css';

function NewRegister({countries, onChange, getValue, disabled, submit, isEmpty, values}) {
    return (
        <div className="full flex center">
            <div className={`${css.wrapper} flex-wrap center`}>
                <div className="full padd-bot-20">
                    <p className={css.title}>Seleccione su país</p>
                    <List countries={countries} getValue={getValue} title={values['país']}/>
                </div>
                <div className="full padd-bot-20">
                    <p className={css.title}>Departamento</p>
                    <input 
                        className={`${css.inputRegister} full`} 
                        onChange={onChange} 
                        disabled={disabled} 
                        name="departamento" 
                        placeholder="Ingrese su departamento"
                        value={values['departamento']}
                    />
                </div>
                <div className="full padd-bot-20">
                    <p className={css.title}>Ciudad</p>
                    <input 
                        className={`${css.inputRegister} full`} 
                        onChange={onChange} 
                        disabled={disabled} 
                        name="ciudad" 
                        placeholder="Ingrese su ciudad"
                        value={values['ciudad']}
                    />
                </div>
                <div className={`${css.registerButton} flex center`}>
                    <button className="pointer full" onClick={submit}>Registrar</button>
                </div>
                {
                    isEmpty && <div className={css.error}>Rellene todos los campos antes de continuar</div>   
                }
            </div>
		</div>
    )
}

export default NewRegister;