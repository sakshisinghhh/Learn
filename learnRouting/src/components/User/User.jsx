
import { useParams } from "react-router-dom"
function User() {
    const {userid} = useParams()
  return (
    
    <div className="bg-orange-100 py-6 text-center text-blue-950 text-3xl p-4">
      User:{userid}
    </div>
  )
}

export default User
