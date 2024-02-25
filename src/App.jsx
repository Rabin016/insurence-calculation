import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <main className="font-bold bg-gradient-to-r from-rose-500 via-red-400 to-red-500 min-h-screen pb-4 font-nunito px-3 capitalize text-gray-800 text-sm">
      <Navbar />
      <div className="md:max-w-3xl mx-auto bg-gray-100 rounded-xl p-2">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
