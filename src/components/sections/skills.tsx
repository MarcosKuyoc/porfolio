import Image from 'next/image'

export const Skills = () => {
  return (
    <section id="skills" className='pt-40 pb-40 mb-40'>
      <h2 className="uppercase text-violet text-4xl md:text-6xl">Skills</h2>
      <h3 className="text-3xl uppercase pt-10 pb-10">Lenguajes de programación</h3>

      <div id="backend" className='pl-5'>
        <div className='text-2xl uppercase pb-5'>Backend</div>
        <div className="flex max-md:flex-col">
          <Image alt='Javascript'
            src="https://img.shields.io/badge/-javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
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
          <Image alt='Node'
            src="https://img.shields.io/badge/-node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          
          <Image alt='Php'
            src="https://img.shields.io/badge/-php-777BB4?style=for-the-badge&logo=php&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          
          <Image alt='Pyhton'
            src="https://img.shields.io/badge/-python-3670a0?style=for-the-badge&logo=python&logoColor=fedd54"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
        </div>
      </div>
      
      <div id="front-end" className='pl-5'>
        <div className='text-2xl uppercase pt-5 pb-5'>FrontEnd</div>
        <div className="flex max-md:flex-col">
          <Image alt='HTML5'
            src="https://img.shields.io/badge/-html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          <Image alt='CSS3'
            src="https://img.shields.io/badge/-css3-blue?style=for-the-badge&logo=css3&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          <Image alt='Bootstrap'
            src="https://img.shields.io/badge/-bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"
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

          <Image alt='Mui'
            src="https://img.shields.io/badge/-Mui-007FFF?tyle=for-the-badge&logo=mui&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
        </div>
      </div>

      <div id="framework" className='pl-5'>
        <div className="text-2xl uppercase pt-5 pb-5">FramesWorks</div>
        <div className="flex max-md:flex-col">
          <Image alt='Express'
            src="https://img.shields.io/badge/express-404d59?style=for-the-badge&logo=express&logoColor=61d9fb"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          <Image alt='Nestjs'
            src="https://img.shields.io/badge/-nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          <Image alt='Loopback'
            src="https://img.shields.io/badge/-loopback-2c81ff.svg?style=for-the-badge&logo=loopback&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          
          <Image alt='Laravel'
            src="https://img.shields.io/badge/-laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          
          <Image alt='Django'
            src="https://img.shields.io/badge/-django-49cec7?style=for-the-badge&logo=django&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
        </div>
        <div className="flex pt-5 max-md:flex-col">
          <Image alt='React'
            src="https://img.shields.io/badge/react-35485e?style=for-the-badge&logo=react&logoColor=61d9fb"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          <Image alt='Nextjs'
            src="https://img.shields.io/badge/-next.js-black?style=for-the-badge&logo=next.js&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          <Image alt='React native'
            src="https://img.shields.io/badge/-react native-61DAFB?style=for-the-badge&logo=react&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          <Image alt='Vue'
            src="https://img.shields.io/badge/-Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          <Image alt='Nuxtjs'
            src="https://img.shields.io/badge/-nuxt.js-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
          <Image alt='Angular'
            src="https://img.shields.io/badge/-Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"
            width={100}
            height={100}
            className='pr-2 pb-2 md:w-fit h-auto'
          />
        </div>
      </div>
    </section>
  )
}