const Button = () => {
    const handleClickButton = () => {
        alert("Funcionou 4")
      }
      
    return (
        <div className="container w-screen h-screen flex justify-center items-center">
            <button onClick={handleClickButton}className="p-3 bg-blue-700 rounded-md text-white">Clique Aqui</button>
      </div>
    )
}

export default Button;