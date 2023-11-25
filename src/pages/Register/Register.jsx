import React from "react";

function Register() {
  return (
    <div>
      <h1>Crear Una Nueva Cuenta</h1>
      <form action="">
        <input type="text" placeholder="ingrese su nombre completo" />
        <input type="email" placeholder="ingrese su correo " />
        <input type="password" placeholder="ingrese su contraseña" />
        <input type="password" placeholder="confirme su contraseña" />
        <input type="file" />
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
}

export default Register;
