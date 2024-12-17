import { useForm } from "react-hook-form"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

import formu from "../assets/img/formulario800.jpg"

const Form = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const form = useRef()

  const sendEmail = async (data) => {
    console.log("datos del formulario:", data) //// Verifica que los datos se reciben correctamente
    try {
      const result = await emailjs.sendForm(
        "service_bspcu4g",
        "template_0e4nf08",
        form.current,
        "loUHsSLl1EQ5Et-Qe"
      )
      console.log("SUCCESS", result.text)
      alert("Formulario enviado con éxito")
      reset()
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      alert("Hubo un problema con el envío del formulario")
    }
  }

  return (
    <section className="form">
      <h4 className="form__title  margin-block-start-36 fs-600">
        Solicita tu prototipo
      </h4>
      <div className="form__wrapper">
        <img className="form__img" src={formu} alt="formulario" />
        <div className="form__container">
          <form
            className="form__lario"
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
          >
            <div>
              <input
                type="text"
                placeholder="Tu nombre por favor"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Nombre es requerido",
                  },
                  minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 25,
                    message: "Máximo de 25 caracteres",
                  },
                })}
              />
              {errors.nombre && (
                <span className="form__error">{errors.nombre.message}</span>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("correo", {
                  required: {
                    value: true,
                    message: "Ingresa tu correo electrónico",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Formato inválido",
                  },
                })}
              />
              {errors.correo && (
                <span className="form__error">{errors.correo.message}</span>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Celular"
                {...register("celular", {
                  required: {
                    value: true,
                    message: "Favor de ingresar número de celular",
                  },
                  pattern: {
                    value: /^9\d{8}$/,
                    message: "Formato inválido",
                  },
                })}
              />
              {errors.celular && (
                <span className="form__error">{errors.celular.message}</span>
              )}
            </div>
            <div>
              <textarea
                className="textArea"
                placeholder="preguntas/comentarios"
                {...register("mensaje")}
              />
            </div>

            <button type="submit" className="form__button">
              enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
