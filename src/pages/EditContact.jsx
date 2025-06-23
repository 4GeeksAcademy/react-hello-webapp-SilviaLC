import { useNavigate } from "react-router-dom";
export const EditContact = () => {

    const navigate = useNavigate ();

  
    return (
        <div className="d-flex flex-column w-100 vh-100 align-items-center mt-5">
            <h1> Editar contacto </h1>
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="validationDefault01" class="form-label">Nombre</label>
                    <input type="text" class="form-control"></input>
                </div>
                <div class="col-md-4">
                    <label for="validationDefault02" class="form-label">Apellido</label>
                    <input type="text" class="form-control"></input>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">Phone Number</label>
                    <input type="text" class="form-control"></input>
                </div>              
                <div class="col-md-9">
                    <label for="validationDefault03" class="form-label">Address</label>
                    <input type="text" class="form-control"></input>
                </div>
                <div class="col-12">
                    <button class="btn btn-success" type="submit" onClick={()=>navigate("/")}>Guardar</button>
                </div>
                </form>  
        </div>       
     
    )
}
