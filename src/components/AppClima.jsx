import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"
import useClima from "../hooks/useClima"

const AppClima = () => {

  const { resultado, cargando, noResultado } = useClima()

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {/* Optional Chaining (Objeto Inicial vacio o Undefined o null y luego tiene Contenido) - Logical Operators JavaScript */}
        { cargando ? <Spinner /> : 
          resultado?.name ? <Resultado /> :
          noResultado && <p>{noResultado}</p>
        } 
      </main>
    </>
  )
}

export default AppClima