import useClima from '../hooks/useClima'

const Resultado = () => {

  const { resultado } = useClima()
  const { name, main: {temp, temp_min, temp_max} } = resultado
  const kelvin = 273.15

  return (
    <div className='contenedor clima'>
      <h2>El Clima de {name} es: </h2>
      <p>
        { parseInt(temp-kelvin) } <span>&#x2103;</span>
      </p>
      <p>
        Temperatura Actual Exacta: { (temp-kelvin).toFixed(2) } <span>&#x2103;</span>
      </p>
      <div className='temp_min_max'>
        <p>
          Min: { parseInt(temp_min-kelvin) } <span>&#x2103;</span>
        </p>
        <p>
          Max: { parseInt(temp_max-kelvin) } <span>&#x2103;</span>
        </p>
      </div>
    </div>
  )
}

export default Resultado