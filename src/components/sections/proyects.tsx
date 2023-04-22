import Image from 'next/image'
export const Proyects = () => {
  return(
    <section id="proyectos" className='pt-40 pb-40 mb-40'>
      <h2 className="uppercase text-violet text-4xl md:text-6xl">Proyectos en GitHub</h2>
      <p className="pt-10 pb-10">Actualmente tengo algunos proyectos en github</p>
      <div className='pt-5'>
        <div className='grid gap-3 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className="block rounded-lg divide-y divide-white border text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="px-6 py-3 text-violet">
              Témplate de registro de usuarios
            </div>
            <div className="p-6 m-auto">
              <Image
                className="block w-full rounded-lg object-cover object-center"
                alt='template-registro-usuarios'
                src="images/template-registro-usuarios.png" width={400} height={300}
              />
              <div className='pt-5 flex flex-row'>
                <Image alt='Node'
                  src="https://img.shields.io/badge/-node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Typescript'
                  src="https://img.shields.io/badge/-typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='jest'
                  src="https://img.shields.io/badge/-jest-C21325?style=for-the-badge&logo=jest&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
              </div>
              <div className='pt-5 flex flex-row'>
                <Image alt='Express'
                  src="https://img.shields.io/badge/-express-404d59?style=for-the-badge&logo=express&logoColor=61d9fb"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Docker'
                  src="https://img.shields.io/badge/-Docker-2496ED?tyle=for-the-badge&logo=docker&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Logs'
                  src="https://img.shields.io/badge/-pino log-859947?style=for-the-badge&logo=pino&logoColor=61d9fb"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
              </div>
              <p className='pt-5'>Implementacion con TDD y Arquitectura Hexagonal</p>
            </div>
            <div className="border-t-2 px-6 py-3">
              <a href="https://github.com/MarcosKuyoc/node-typescript-tdd-skeleton" className='text-green-2' target='_blank'>
                https://github.com/MarcosKuyoc/node-typescript-tdd-skeleton
              </a>
            </div>
          </div>

          <div className="block rounded-lg divide-y divide-white border text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="px-6 py-3 text-violet">
              Extracción de precios de una imagen - OCR Tesseract
            </div>
            <div className="p-6">
              <Image
                className="block w-full rounded-lg object-cover object-center"
                alt='extraer-precios-de-imagen'
                src="images/convetir-precios-de-imagen.png" width={400} height={300}
              />
              <div className='pt-5 flex flex-row'>
                <Image alt='Nextjs'
                  src="https://img.shields.io/badge/-next.js-black?style=for-the-badge&logo=next.js&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Tailwindcss'
                  src="https://img.shields.io/badge/-tailwindcss-06B6D4?tyle=for-the-badge&logo=tailwindcss&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Tesseract'
                  src="https://img.shields.io/badge/-Tesseract-06B6D4?tyle=for-the-badge&logo=tesseract&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
              </div>
            </div>
            <div className="px-6 py-3">
              <a href="https://ocr-livestock-prices.vercel.app/" className='text-green-2'  target='_blank'>
                https://ocr-livestock-prices.vercel.app/
              </a>
            </div>
          </div>

          <div className="block rounded-lg divide-y divide-white border text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="px-6 py-3 text-violet">
              Ecommerce: Next.js
            </div>
            <div className="p-6">
              <Image
                className="block w-full rounded-lg object-cover object-center"
                alt='Ecomerce'
                src="images/teslo-shop.png" width={400} height={300}
              />
              <div className='pt-5 flex flex-row'>
                <Image alt='Nextjs'
                  src="https://img.shields.io/badge/-next.js-black?style=for-the-badge&logo=next.js&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Mui'
                  src="https://img.shields.io/badge/-Mui-007FFF?tyle=for-the-badge&logo=mui&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Docker'
                  src="https://img.shields.io/badge/-Docker-2496ED?tyle=for-the-badge&logo=docker&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='MongoDb'
                  src="https://img.shields.io/badge/-MongoDb-47A248?tyle=for-the-badge&logo=mongodb&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
              </div>
            </div>
            <div className="px-6 py-3">
              <a href="https://github.com/MarcosKuyoc/teslo-store" className='text-green-2' >
                https://github.com/MarcosKuyoc/teslo-store
              </a>
            </div>
          </div>

          <div className="block rounded-lg divide-y divide-white border text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="px-6 py-3 text-violet">
              Pokemon: Curso de Next.js
            </div>
            <div className="p-6">
              <Image
                className="block w-full rounded-lg object-cover object-center"
                alt='template-registro-usuarios'
                src="images/pokemon-favoritos.png" width={400} height={300}
              />
              <div className='pt-5 flex flex-row'>
                <Image alt='Nextjs'
                  src="https://img.shields.io/badge/-next.js-black?style=for-the-badge&logo=next.js&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Mui'
                  src="https://img.shields.io/badge/-Mui-007FFF?tyle=for-the-badge&logo=mui&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
              </div>
            </div>
            <div className="px-6 py-3">
              <a href="https://pokemon-static-generation.vercel.app/" className='text-green-2' target='_blank'>
                https://pokemon-static-generation.vercel.app/
              </a>
            </div>
          </div>

          <div className="block rounded-lg divide-y divide-white border text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="px-6 py-3 text-violet">
              Microservicios: Proyecto de microservicios
            </div>
            <div className="p-6">
              <Image
                className="block w-full rounded-lg object-cover object-center"
                alt='template-registro-usuarios'
                src="images/template-registro-usuarios.png" width={400} height={300}
              />
              <div className='pt-5 flex flex-row'>
                <Image alt='Node'
                  src="https://img.shields.io/badge/-node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Typescript'
                  src="https://img.shields.io/badge/-typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                  width={120}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='jest'
                  src="https://img.shields.io/badge/-jest-C21325?style=for-the-badge&logo=jest&logoColor=white"
                  width={110}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
              </div>
              <div className='pt-5 flex flex-row'>
                <Image alt='Express'
                  src="https://img.shields.io/badge/-express-404d59?style=for-the-badge&logo=express&logoColor=61d9fb"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Docker'
                  src="https://img.shields.io/badge/-Docker-2496ED?tyle=for-the-badge&logo=docker&logoColor=white"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
                <Image alt='Logs'
                  src="https://img.shields.io/badge/-pino log-859947?style=for-the-badge&logo=pino&logoColor=61d9fb"
                  width={100}
                  height={100}
                  className='pr-2 pb-2 md:w-fit h-auto'
                />
              </div>
            </div>
            <div className="px-6 py-3">
              <a href="https://pokemon-static-generation.vercel.app/" className='text-green-2' target='_blank'>
                https://pokemon-static-generation.vercel.app/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}