import { useState } from "react"
import useClima from "../hooks/useClima"

const Formulario = () => {

  const [alerta, setAlerta] = useState('')
  const { busqueda, handleChangeBusqueda, consultarClima } = useClima()
  const { ciudad, pais } = busqueda

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(busqueda).includes('')) return setAlerta('Todos los campos son obligatorios')

    setAlerta('')
    consultarClima(busqueda)
  }

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form
        onSubmit={handleSubmit}
      >
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input 
            type="text" 
            name="ciudad" 
            id="ciudad" 
            placeholder="Ingresa una ciudad"
            value={ciudad}
            onChange={handleChangeBusqueda}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select 
            name="pais" 
            id="pais"
            value={pais}
            onChange={handleChangeBusqueda}
          >
            <option value="" disabled>--Seleccione--</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="PE">Peru</option>
          </select>
        </div>

        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  )
}

export default Formulario