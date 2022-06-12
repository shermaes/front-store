import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { stateType } from "../../state/Store";


const WelcomePage: React.FunctionComponent = () => {

  const {user} = useSelector((state:stateType) => state.logged)

  const navigate = useNavigate()

  console.log(user);

  useEffect(()=> {
    if(user=== null){
      navigate('/logInGoogle')
    }
  }, [])
  
  return (
    <h1 style={{textAlign: "center"}}>Welcome you have logged in succesfully</h1>
  );
};

export default WelcomePage;