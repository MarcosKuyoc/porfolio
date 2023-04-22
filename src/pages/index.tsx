import { Content, Navbar } from '@/components';


export default function Home() {
  return (
    <main className="h-screen flex flex-col md:flex-row">
      <section className="bg-nav w-full md:w-1/6">
        <Navbar />
      </section>
      <section className="w-full pl-5 pr-5">
        <Content />
      </section>
    </main>
  )
}
