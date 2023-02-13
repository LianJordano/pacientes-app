import React, { useState } from "react";
import { Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({crearCita}) => {

    //Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    });

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value,    
        })
    }

    const [error, actualizarError] = useState(false);

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = (e) => {
        e.preventDefault();
        //validar
            if(mascota.trim() === "" || propietario === "" || fecha === "" || hora === "" || sintomas === "" ){
                actualizarError(true)
                return;
            }

        // eliminar error
        actualizarError(false);
        
        //asignar ID
        cita.id=uuidv4();

        //Crear Cita
        crearCita(cita);

        //Reiniciar form

        actualizarCita({
            mascota:"",
            propietario:"",
            fecha:"",
            hora:"",
            sintomas:""
        });
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>  : null}
            <form 
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota..."
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Propietario..."
                    onChange={actualizarState}
                    value={propietario}

                />
                  <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                  <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                >
                </textarea>  

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>


            </form>
        </Fragment>
    );
}
 
export default Formulario;