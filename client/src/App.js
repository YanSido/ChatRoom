import { Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import ChatScreen from "./components/ChatScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/chat/:username" element={<ChatScreen />} />
      </Routes>
    </>
  );
}

export default App;
