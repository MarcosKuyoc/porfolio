import Image from 'next/image'

export const Porfolio = () => {
  return (
    <section id="porfolio" className='pt-40 pb-40 mb-40'>
      <h2 className="uppercase text-violet text-4xl md:text-6xl">Porfolio</h2>
      <div className="pt-5">
        <div className="grid gap-3 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <Image alt='Las Coloradas Yucatán'
              className="block w-full rounded-lg object-cover object-center"
              src="images/las_coloradas.jpg"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Chiquitita of my life'
              className="block w-full rounded-lg object-cover object-center"
              src="images/chiquitita.png"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="images/flamenco.jpg"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="images/caribephoto.png"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="images/mexicohoteles.png"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Panel Administrativo'
              className="block w-full rounded-lg object-cover object-center"
              src="images/dashboard-vsp.png"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Trackpickup'
              className="block w-full rounded-lg object-cover object-center"
              src="images/trackpickup.jpeg"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="images/ResumendevuelosenCancun.jpeg"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Reservaciones San Felipe'
              className="block w-full rounded-lg object-cover object-center"
              src="images/reservaciones.jpeg"
              width={100}
              height={100}
            />
          </div>
          <div className="">
              <Image alt='MapperHouse'
                className="block w-full rounded-lg object-cover object-center"
                src="images/mapperhouse.png"
                width={100}
                height={100}
              />
          </div>
          <div className="">
            <Image alt='Iluminarte Fotografia'
              className="block w-full rounded-lg object-cover object-center"
              src="images/iluminarte.png"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <div className="w-full">
              <Image alt='Bazinga Travel'
                className="block w-full rounded-lg object-cover object-center"
                src="images/bazinga.png"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}