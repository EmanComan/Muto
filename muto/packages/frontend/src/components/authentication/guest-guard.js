import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export const GuestGuard = (props) => {
  const { children } = props
  const auth = useAuth()
  const navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  useEffect(() => {

    if(auth.isAuthenticated){
      navigate('/')
      window.location.reload(false);
    } else {
      setChecked(true)
    }
  },[auth.isAuthenticated, navigate])

  if(!checked){
    return null
  }

  return <>{children}</>
}