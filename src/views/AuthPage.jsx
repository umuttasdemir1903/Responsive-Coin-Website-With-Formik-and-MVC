import { useFormik } from "formik";
import InputFiled from "./InputFiled";
import { inputs } from "../constant";
import { schema } from "../schema";

const AuthPage = () => {
  // useFormik ==>> formik özelliklerini
  // kullanmamızı sağlayan hook.

  const formik = useFormik({
    // formda tutulacak verileri belirleme
    initialValues: {
      email: "",
      age: "",
      password: "",
      ConfirmPassword: "",
    },

    // form gönderilince çalışacak olan fonksiyon.
    onSubmit: (values, actions) => {
      localStorage.setItem("user", JSON.stringify(values));
      // bütün inputların içindekileri siler.
      actions.resetForm();
    },

    // Dogrulama şeması : todo
    validationSchema: schema,
  });

  return (
    <div className="auth-page">
      <div className="container">
        <h2 className="d-flex align-items-center justify-content-center gap-2 text-center my-5">
          <img height={60} src="./logo.png" alt="coin-logo" />
          <span>Coinmania</span>
        </h2>

        {/* form alanı */}
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputFiled formik={formik} data={data} />
          ))}
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
