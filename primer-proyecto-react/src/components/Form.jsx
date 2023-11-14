import { useState } from "react";
import { getDatos, postDatos } from "../scripts/api";

export const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Petición para hacer un get y mostrar los objetos
    try {
      const response = await getDatos();
      response.forEach((objeto, index) => {
        console.log(`Objeto ${index + 1}:`, objeto);
      });
    } catch (error) {
      console.log('error al hacer la solicitud: ', error)
    }

    // Construcción del body que enviaremos
    const datos = {
      "name": nombre,
      "surname": apellido,
      "age": edad,
      "email": correo
    }

    // Petición para hacer un post
    try {
      const response = await postDatos('http://localhost:3002/api/users', datos);
      console.log(response)
    } catch (error) {
      console.error('Ha ocurrido un error: ', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br/>
        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <br/>
        <label>Edad:</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <br/>
        <label>Correo electrónico:</label>
        <input
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <br/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
