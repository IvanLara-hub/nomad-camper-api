const SignupModel = {
    firstName: {
      label: "Nombre",
      value: "",
      error: "",
      required: true,
    },
    lastName: {
      label: "Apellidos",
      value: "",
      error: "",
      required: true,
    },
    email: {
      label: "Email",
      value: "",
      error: "",
      required: true,
      validator: (value) => {
        if (!value) {
          return "Por favor, introduce tu email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          return "Dirección de email no válida";
        }
        return "";
      },
    },
    username: {
      label: "Nombre de usuario",
      value: "",
      error: "",
      required: true,
    },
    password: {
      label: "Contraseña",
      value: "",
      error: "",
      required: true,
      validator: (value) => {
        if (!value) {
          return "Por favor, introduce una contraseña";
        } else if (value.length < 6) {
          return "La contraseña debe tener al menos 6 caracteres";
        }
        return "";
      },
    },
    repeatPassword: {
      label: "Repetir contraseña",
      value: "",
      error: "",
      required: true,
      validator: (value, values) => {
        if (!value) {
          return "Por favor, confirma tu contraseña";
        } else if (value !== values.password) {
          return "Las contraseñas no coinciden";
        }
        return "";
      },
    },
  };
  
  const SignupModel = mongoose.model("Singup", singupSchema);
module.exports = Singup;
