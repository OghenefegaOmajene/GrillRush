import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Nav from "./components/Navbar/Nav"
import Homepage from "./Homepage/Homepage"
import NotFound from "./NotFound"
const AppRouter = () => {
  return (
    <>
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" index element={<Homepage />} />
                <Route path="#about"/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    </>
  )
}

export default AppRouter;
