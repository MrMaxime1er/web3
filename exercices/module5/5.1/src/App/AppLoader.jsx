import { ProviderWrapper } from "../contexts/counterContext.jsx";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <ProviderWrapper >
        <App />
 
      </ProviderWrapper >
  )
}

export default AppLoader