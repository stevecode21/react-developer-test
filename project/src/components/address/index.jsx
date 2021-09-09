import React, {useState} from 'react';
import css from './style.module.css';
import { deleteAddress } from '../../store/actions';
import { useDispatch } from 'react-redux';
import {ReactComponent as CheckIcon} from '../../assets/comprobado.svg';
import {ReactComponent as DeleteIcon} from '../../assets/garbage.svg';

function Address({addresses}) {
    const [addressId, setAddressId] = useState(null);
    const dispatch = useDispatch();

    addresses.sort((a, b) => {
          
        if (a.departamento.toLowerCase() > b.departamento.toLowerCase()) {
            return 1
        }
       if (a.departamento.toLowerCase() < b.departamento.toLowerCase()) {
            return -1
        }
        return 0
    });
    
    return (
        <div className={`${css.main} flex-wrap center`}>
            <div className={`${css.header} full flex`}>
                <p>País</p> 
                <p>Departamento</p>
                <p>Ciudad</p>
                <p>Opciones</p>
            </div>
            {
                addresses.length === 0 ? (
                    <p className={`${css.addressNotFound} full`}>No se encuentran direcciones registradas.</p>
                ) : (<>
                    {
                        addresses.map(({país, departamento, ciudad}, id) => (
                            <div key={`address-${id}`} className={`${css.wrapperList} ${addressId === id ? css.selected : ''} full flex between`}>
                                <p>{país}</p>
                                <p>{departamento}</p>
                                <p>{ciudad}</p>
                                <div className="flex-wrap center">
                                    <div className="pointer" onClick={() => setAddressId(id)}>
                                        <CheckIcon/>
                                    </div>
                                    <div className="pointer" onClick={() => dispatch(deleteAddress(id))}>
                                        <DeleteIcon/>
                                    </div>
                                </div>
                            </div>        
                        ))
                    } 
                </>)
            }
        </div>
    )
}

export default Address;