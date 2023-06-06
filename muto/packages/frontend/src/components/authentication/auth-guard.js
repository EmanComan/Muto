import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export const AuthGuard = (props) => {
  const { children }  = props
  const auth = useAuth();
  const navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    
    if(!auth.isAuthenticated){
      navigate('/auth/login')
    } else {
      setChecked(true)
    }
    
  },[auth.isAuthenticated, navigate])

  if(!checked){
    return null
  }

  return <>{children}</>

}