import { Outlet } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className=" w-full">
        <Header />
      </header>
      <main className="flex-grow flex justify-center items-center pt-5">
        <Outlet />
      </main>
      <footer className="w-full py-5">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
