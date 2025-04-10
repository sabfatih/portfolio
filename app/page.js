import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import ToggleTheme from "@/components/ToggleTheme";
import Image from "next/image";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <ToggleTheme />
      </main>
    </>
  );
}
