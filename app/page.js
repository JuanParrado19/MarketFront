import Image from "next/image";
import CarouselClient from "./component/CarouselClient.js";

export default function Home() {
  return (
    <main className="contPrincipal">
      <CarouselClient />
    </main>
  );
}
