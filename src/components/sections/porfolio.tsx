import Image from 'next/image'

export const Porfolio = () => {
  return (
    <section id="porfolio" className='pt-40 pb-40 mb-40'>
      <h2 className="uppercase text-violet text-6xl">Porfolio</h2>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="grid gap-3 max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="https://marcoskuyoc.com/images/las_coloradas.jpg"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="https://marcoskuyoc.com/images/chiquitita.png"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="https://marcoskuyoc.com/images/flamenco.jpg"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="https://marcoskuyoc.com/images/caribephoto.png"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="https://marcoskuyoc.com/images/mexicohoteles.png"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="https://marcoskuyoc.com/images/dashboard-vsp.png"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="https://marcoskuyoc.com/images/trackpickup.jpeg"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="https://marcoskuyoc.com/images/ResumendevuelosenCancun.jpeg"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="https://marcoskuyoc.com/images/reservaciones.jpeg"
              width={100}
              height={100}
            />
          </div>
          <div className="">
              <Image alt='Galery'
                className="block w-full rounded-lg object-cover object-center"
                src="https://marcoskuyoc.com/images/mapperhouse.png"
                width={100}
                height={100}
              />
          </div>
          <div className="">
            <Image alt='Galery'
              className="block w-full rounded-lg object-cover object-center"
              src="https://marcoskuyoc.com/images/iluminarte.png"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <div className="w-full">
              <Image alt='Galery'
                className="block w-full rounded-lg object-cover object-center"
                src="https://marcoskuyoc.com/images/Tianguis.jpeg"
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