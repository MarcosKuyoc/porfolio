import { robotoCondensed } from "@/fonts"

export const About = () => {
  return(
    <section id="about" className='pt-36 pb-40 mb-40'>
      <h2 className="uppercase text-violet text-4xl md:text-6xl">Sobre Mi</h2>
      <div className="container max-w-screen-lg">
        <p className={`${robotoCondensed.className} pt-10 pb-5 text-2xl leading-8 font-normal`}>
          Empecé mi trayectoria profesional como desarrollador web hace más de 14 años, una gran aventura desde entonces. He llegado a trabajar en diferentes empresas y he creado proyectos que van desde portales webs, E-comerces, sitios web de turismo, aplicaciones móviles, sistemas de monitoreo de vehículos, sistemas para control referidos(Lealtad), sistemas para control de descuentos, aplicaciones backend(Paneles administrativos), desarrollo de APIS REST etc., personalmente me desenvuelvo mejor como Backend; sin embargo, durante toda mi trayectoria he pasado por todas las diferentes etapas.
        </p>
      </div>
      <div className="pt-5 pb-2">
        <p className="text-orange">
          Soy egresado de la Facultad de Matemáticas con la Licenciatura en Ciencias de la Computación, por la Universidad Autónoma de Yucatán(UADY)
        </p>
      </div>
      <div className="pt-5 pb-10 container max-w-screen-lg">
        <h3 className="uppercase text-3xl text-violet">Hobbies</h3>
        <p className="pt-5">Como Hobbies, he logrado desarrollar <a href="https://mappercode.com" className="text-green underline underline-offset-1" target="_black">MapperCode.com</a> un sitio web donde ofrezco a mis clientes consultoría y creación productos a la medida. También construí un sitio web <a href="https://visitasanfelipeyucatan.com" target="_black" className="text-green underline underline-offset-1">VisitaSanfelipeYucatan.com</a> que ofrece 9 tours a la Reserva de la Biosfera de Ría Lagartos.</p>
      </div>
      <h4 className="uppercase text-violet">Actualmente, estoy aprendiendo Flutter(para desarrollo de aplicaciones móviles)</h4>
      <p className="pt-5 pb-5">Puedes entrar a mi <a href='https://github.com/MarcosKuyoc' target="_blank" className="underline underline-offset-1 text-green">GitHub</a> para mirar mis proyectos, puedes descargarlos, probarlos y dejar tus comentarios.</p>
    </section>
  )
}