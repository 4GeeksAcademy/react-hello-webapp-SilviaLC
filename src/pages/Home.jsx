import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useEffect,useState} from "react";

export const Home = () => {

	const [list, setList] = useState ([
		
	])

	useEffect(() => {

	}, [])

  return (
		<div className="d-flex flex-column w-100 vh-100 align-items-center mt-5">
			<Link to="/AddContact">
				<button className = "btn btn-success w-40">
					Crear contacto
				</button>
			</Link>	
			<ol className="list-group m-4 w-50">
				{
					list.map((item) => {
						return(
							<li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
								<span>{item.name}</span>
								<div className="btn-group d-flex gap-2">
									<Link to="/EditContact/:id">
										<button className="btn btn-outline-primary btn-sm">
										Editar
										</button>
									</Link>
									<button className="btn btn-outline-danger btn-sm">
										Eliminar
									</button>
								</div>
							</li>
						)
					})
				}
			</ol>
			
		</div>
	);
}; 