import { BrowserRouter } from "react-router-dom";

const RoutesProvider = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

export default RoutesProvider