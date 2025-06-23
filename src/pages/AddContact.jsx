import React from "react";
import { useNavigate } from "react-router-dom";
const AddContact = () => {

    const navigate= useNavigate ();


    
    return (
        <div className="d-flex flex-column w-100 vh-100 align-items-center mt-5">
            <h1> Nuevo contacto </h1>
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="validationDefault01" class="form-label">Nombre</label>
                    <input type="text" class="form-control"></input>
                </div>
                <div class="col-md-4">
                    <label for="validationDefault02" class="form-label">Apellidos</label>
                    <input type="text" class="form-control"></input>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">Número de Teléfono</label>
                    <input type="text" class="form-control"></input>
                </div>              
                <div class="col-md-9">
                    <label for="validationDefault03" class="form-label">Dirección</label>
                    <input type="text" class="form-control"></input>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-success" onClick={()=>navigate("/")}>Guardar</button>
                </div>
                </form>  
        </div>       
     
    )
}

export default AddContact