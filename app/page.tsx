import Container from "@/components/Container";
import Image from "next/image";
export default function Home() {
  return (
    <>
    <div className="min-h-screen flex items-start justify-start">
    <Container className="min-h-screen">
      <section id="about">
      <div className="px-10">
      <Image src={''}
      alt=""
      />
      <div>
      <h1 className="dark:text-white text-black font-ibmplexsans font-semibold text-2xl">Chithraksha</h1>
      <span>Full stack developer</span>
      </div>
      <p>text Content here</p>
      </div>
      </section>
    </Container>
    </div>
    </>
  );
}