import { useNavigate } from "react-router-dom"
import './BackBtn.css'

const BackBtn = () => {
    const navigate = useNavigate()
  return (
    <>
      <button
        onClick={()=> navigate(-1)}>
        Voltar
        </button>
    </>
  )
}

export default BackBtn
