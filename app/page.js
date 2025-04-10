import Navbar from "@/components/Navbar";
import ToggleTheme from "@/components/ToggleTheme";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ToggleTheme />
      </main>
    </>
  );
}
