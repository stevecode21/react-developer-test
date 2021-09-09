import React, {useEffect, useState} from 'react';
import Address from '../address';
import NewRegister from '../newRegister';
import getCountries from '../../api/country';
import { useSelector, useDispatch } from 'react-redux';
import {storeContries, newAddress} from '../../store/actions';

import css from './style.module.css'

function App() {
	const {countries, addresses} = useSelector((state) => state)
	const dispatch = useDispatch();
	const [handleErrors, setError] = useState({message: '', disabled: false, isEmpty: false})
	const [sectionSelected, setSection] = useState(false)
	const [inputValues, setInput] = useState({'departamento': '', 'ciudad': '', 'país': 'Seleccionar'})

	useEffect(() => {
		getCountries()
			.then(contries => dispatch(storeContries(contries)))
			.catch(() => {
				setError({
					...handleErrors, 
					message: 'Ha surgido un Error solicitando los países. Por favor refresque la página he intente nuevamente.',
					disabled: true
				});
			})
	}, [])
	
	function getValue(value) {
		setInput({...inputValues, 'país': value})
	}

	function handleInput(event) {
		const {value, name} = event.target
		setInput({...inputValues, [name]: value})
	}

	function registerAddress() {
		const isNotEmpty = !Object.values(inputValues).some( element => ( element.trim() === '' ))
		if  (isNotEmpty) {
			setError({...handleErrors, isEmpty: false})
			dispatch(newAddress(inputValues))
			setInput({...inputValues, 'departamento': '', 'ciudad': '', 'país': 'Seleccionar' })
			return
		}
		return setError({...handleErrors, isEmpty: true})
	}
	
  	return (
		<div className="full flex center">
			<div className={`${css.container} flex-wrap center`}>
				<div className={`${css.header}full flex-wrap cente`}r>
					<h1 className={`${css.headerTitle} full`}>¡Bienvenido!</h1>
					<p className={`${css.headerText} full`}>Registra una dirección o selecciona una existente.</p>
				</div>
				<div className={css.section}>
					<p className={`${css.newAddress} ${!sectionSelected ? css.selected : ''} pointer`} onClick={() => setSection(false)}>Nueva Dirección</p>
					<p className={`${css.directions} ${sectionSelected ? css.selected : ''} pointer`} onClick={() => setSection(true)}>Direcciones Registradas</p>
				</div>
				{
					!sectionSelected ? (
						<>
						{
							handleErrors.message && (
								<p className={css.errorMessage}>{handleErrors.message}</p>
							)
						}
						<NewRegister 
							countries={countries} 
							onChange={handleInput} 
							getValue={getValue}
							values={inputValues} 
							disabled={handleErrors.disabled}
							submit={registerAddress}
							isEmpty={handleErrors.isEmpty}
						/>
						</>
					) : (
						<Address
							addresses={addresses}
						/>
					)
				}
			</div>
		</div>
    
  )
}
export default App;
