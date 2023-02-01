import Navbar from './Components/Navbar.jsx'

import HomeConnect, { ConnectAcceptList, ConnectRejectList, ConnectBlockList } from './Container/HomeConnect.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeConnect />} />
          <Route path="/accept" element={<ConnectAcceptList />} />
          <Route path="/reject" element={<ConnectRejectList />} />
          <Route path="/block" element={<ConnectBlockList />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
