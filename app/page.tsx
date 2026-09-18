import Container from "@/components/Container";
import Image from "next/image";
export default function Home() {
  return (
    <>
    <div className="min-h-screen flex items-start justify-start">
    <Container className="min-h-screen">
      <section id="about">
      <div className="px-10">
      <Image src=''
      alt=""
      />
      <div className="space-y-3">
      <h1 className="dark:text-white text-black font-ibmplexsans font-semibold text-2xl">Chithraksha</h1>
      <p className="font-heading">Full stack developer</p>
      <p className="font-sans text-sm">I’m a Full-Stack Developer, Freelancer, and UI-focused Designer who builds modern, responsive websites and web applications. I combine thoughtful design with scalable development
         to turn ideas into fast, functional, and engaging digital experiences.</p>
      </div>
      
      </div>
      </section>
    </Container>
    </div>
    </>
  );
}