import React, { useEffect, useState } from "react";

const Home = () => {

	const API = 'https://cataas.com'

	const [imagen, setImagen] = useState(null)    //para crear una variable para guardar la imagen
	const [listaGatos, setListaGatos] = useState(null) //para crear una variable de una lista de gatos 


	function getCat() {
		fetch(API + "/cat")
			.then((response) => response.blob())
			.then((dataImagen) => setImagen(URL.createObjectURL(dataImagen)))   //URL.createObjectURL(dataImagen) = convierte la imagen en una URL

	}

	function getListaGatos() {
		fetch(API + "/api/cats")
			.then((response) => response.json())
			.then((dataLista) => setListaGatos(dataLista))    // la lista de gatos esta en dataLista pero la guardamos dentro de setListaGatos (setListaGatos es solo para guardar pero lo llamamso con listaGatos)
	}

	useEffect(() => {
		getCat()
		getListaGatos()
	}, [])							//para que se actualice cada vez que se renderice el componente

	return (
		<>
			{imagen && <img src={imagen} /> //&& para comprobar si la variable esta vacía, si está vacía no se muestra
			}
			{listaGatos && listaGatos.map((item, index) => (   //item es el objeto que recorre en ese momento e index es el indice el numero
				<li>{item.id} contiene las siguiente etiquetas:
					{item.tags.map((objeto, indice) => (		//ponemso oobjeto e indicie porque item, index ya esta usado pero es lo mismo
						<li>{objeto}</li>
					))}
				</li>
			))}
		</>
	);
};

export default Home;