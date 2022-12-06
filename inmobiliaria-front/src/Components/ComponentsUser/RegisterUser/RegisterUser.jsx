import React from "react";
import { useForm } from "react-hook-form";

import { registrarUsuario } from "../../../Api/Rule_user";

function RegisterUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await registrarUsuario(data)
      .then(() => {
        alert("El usuario se regsitro correctamente");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <div className="container-form ctn-form">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title-form">Añadir nuevo usuario</h2>

          <label>
            <input
              className="input-form"
              placeholder="Nombre"
              type="text"
              {...register("nombre", {
                required: true,
              })}
            />
            <br />
            {errors.nombre?.type === "required" && (
              <span>El nombre es requerido</span>
            )}
          </label>

          <label>
            <input
              placeholder="Email"
              required
              type="email"
              value={email}
              onChange={handleEmail}
            />
          </label>

          <label>
            <input
              className="input-form"
              placeholder="Email"
              required
              type="email"
              {...register("email", {
                required: true,
              })}
            />
            <br />
            {errors.email?.type === "required" && (
              <span>El email es requerido</span>
            )}
          </label>

          <label>
            <input
              placeholder="Password"
              required
              autoComplete="none"
              type="password"
              value={password}
              onChange={handlePassword}
            />
          </label>

          <label>
            <input
              className="input-form"
              placeholder="Password"
              required
              autoComplete="none"
              type="password"
              {...register("password", { required: true, minLength: 8 })}
            />
            <br />
            {errors.password?.type === "required" && (
              <span>El password es requerido</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>Como minimo 8 caracterers</span>
            )}
          </label>

          <label>
            <select className="input-form">
              <option>Seleccione tipo de usuario</option>
              <option
                {...register("tipo_usuario", {
                  required: true,
                })}
                value="1"
              >
                Administrador
              </option>
              <option
                value="2"
                {...register("tipo_usuario", {
                  required: true,
                })}
              >
                Usuario
              </option>
            </select>
          </label>

          <button className="btn" type="submit">
            Añadir usuario
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
