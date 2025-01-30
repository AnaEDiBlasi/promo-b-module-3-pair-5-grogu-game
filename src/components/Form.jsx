

function Form({setName}) {

  const handleChange = (ev) => {
    const value = ev.target.value;
    setName(value);
  }

  return (
    <form action="">
      <label htmlFor="name">Introduce el nombre: </label>
      <input type="text" name="name" id="name" placeholder="Anacleta" onChange={handleChange}/>
    </form>
  )
}

export default Form