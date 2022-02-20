import React, {useState} from 'react';
import {firebase} from "./firebase";

function Crud () {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [error, setError]= useState(null);

  const agregarComentario = async (e) => {
    e.preventDefault();

    if(!comentario.trim()) {
      setError("Escribe algo.....")
      return
    }

    try {
      const db = firebase.firestore();
      let nuevoComentario;

      if(nombre === "") {
        nuevoComentario = {
          name: "Anónimo",
          comment: comentario
        }
      } else {
        nuevoComentario = {
          name: nombre,
          comment: comentario
        }
      }
      const data = await db.collection("comentarios").add(nuevoComentario);

      setComentarios([    
        ...comentarios,
        {...nuevoComentario, id:data.id}
      ])
      setNombre("");
      setComentario("");
      setError(null);
    } catch (error) {
      console.log(error);
    }
  }

  const eliminarComentario = async (id) => {
    try {
      const db = firebase.firestore();
      await db.collection("comentarios").doc(id).delete();
      const arrayFilter = comentarios.filter(item=>item.id!==id);
      setComentarios(arrayFilter);
    } catch (error) {
      console.log(error);
    }    
  }

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("comentarios").get();
        const arrayData = data.docs.map (doc => ({id:doc.id, ...doc.data() }));
        setComentarios(arrayData);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerDatos();
  })
  

  return (
    <div className="container mt-5">
      <div className="row mt-2">
        <div className="col-12">
          <ul className="list-group">
          {
            comentarios.map (item=>
              <li className="mt-3 lista" key={item.id}>
                <h4 className='lista-nombre'>{item.name}</h4>
                <hr />
                <p className='lista-texto'>"{item.comment}"</p>
                <button className="btn btn-danger btn-sm float-end" onClick={(e)=>eliminarComentario(item.id)}>
                  Eliminar
                </button>
              </li>              
            )
          }
          </ul>
        </div>
        <div className="mt-5">
          <h3 className="formulario-titulo">Agregar comentario</h3>
          <form className='contenedorFormulario' onSubmit={agregarComentario}>
            <input type="text" className="mt-4 formulario" placeholder="Introduce tu nombre..." onChange={e=> setNombre(e.target.value)} value={nombre}/>
            <textarea className="formulario mt-2" cols="100" rows="5" placeholder="Introduce tu comentario..." onChange={e=> setComentario(e.target.value)} value={comentario}></textarea>
          <button className="btn btn-primary w-100 mt-2">Agregar</button> 
            {
              error? <span className="text-danger mx-2">{error}</span>:null
            }
          </form>
        </div>
      </div>
    </div>
  );
}
export default Crud;
