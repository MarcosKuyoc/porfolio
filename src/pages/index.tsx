import { Content, Navbar } from '@/components';


export default function Home() {
  return (
    <main className="h-screen flex flex-col md:flex-row">
      <section className="md:w-1/4">
        <Navbar />
      </section>
      <section className="scroll-smooth w-full h-screen bg-nav pl-10 pr-10 overflow-y-auto">
        <Content />
      </section>
    </main>
  )
}
