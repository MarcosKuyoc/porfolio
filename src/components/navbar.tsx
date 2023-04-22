import { MouseEventHandler, useEffect, useState } from "react"
import { useRouter } from 'next/router';

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const router = useRouter();
  const [activeTag, setActiveTag] = useState('/');
  
  useEffect(() => {
    if (router.asPath.toString() !== '/') {
      setActiveTag(router.asPath.toString());
    }
  }, [router.asPath])
  
  const onTogleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    const href = e.currentTarget.href;
    router.push(href);
    setActiveTag(router.asPath);
  }
  return (
    <>
      <header className="h-1/5 md:hidden">
        <div className="flex flex-row pt-5 pb-5">
          <div className="w-11/12 pl-5">
            <h2 className='text-xl'>Marcos Kuyoc</h2>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={onTogleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
        </div>
      </header>
      <nav className='h-3/4'>
        <div className='pt-2 ml-3 max-md:hidden uppercase text-white text-xs pb-10'>Explorador</div>
        <ul className={isOpenMenu ? 'max-md:visible' : 'max-md:hidden'}>
          <li className={activeTag === '/#marcos' || activeTag === '/' ? 'bg-zinc-500' : 'hover:bg-zinc-600'}>
            <div className="flex flex-row pt-2 pb-2 pl-10">
              <svg width={20} height={20} className="text-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
              </svg>
              <a href="#marcos" onClick={handleClick} className="tracking-wider font-extrabold ml-2" aria-current="page">index</a>
            </div>
          </li>
          <li className={activeTag === '/#about' ? 'bg-zinc-500' : 'hover:bg-zinc-600'}>
            <div className="flex flex-row pt-2 pb-2 pl-10">
              <svg width={20} height={20} className="text-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
              </svg>
              <a href="#about" onClick={handleClick} className="tracking-wider font-extrabold ml-2" aria-current="page">Sobre mi</a>
            </div>
          </li>
          <li className={activeTag === '/#porfolio' ? 'bg-zinc-500' : 'hover:bg-zinc-600'}>
            <div className="flex flex-row pt-2 pb-2 pl-10">
              <svg width={20} height={20} className="text-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/>
              </svg>
              <a href="#porfolio" onClick={handleClick} className="tracking-wider font-extrabold ml-2" aria-current="page">Porfolio</a>
            </div>
          </li>
          <li className={activeTag === '/#skills' ? 'bg-zinc-500' : 'hover:bg-zinc-600'}>
            <div className="flex flex-row pt-2 pb-2 pl-10">
              <svg width={20} height={20} className="text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/>
              </svg>
              <a href="#skills" onClick={handleClick} className="tracking-wider font-extrabold ml-2" aria-current="page">Skills</a>
            </div>
          </li>
          <li className={activeTag === '/#proyectos' ? 'bg-zinc-500' : 'hover:bg-zinc-600'}>
            <div className="flex flex-row pt-2 pb-2 pl-10">
              <svg width={20} height={20} className="text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/>
              </svg>
              <a href="#proyectos" onClick={handleClick} className="tracking-wider font-extrabold ml-2" aria-current="page">Proyectos</a>
            </div>
          </li>
          <li className={activeTag === '/#contacto' ? 'bg-zinc-500' : 'hover:bg-zinc-600'}>
            <div className="flex flex-row pt-2 pb-2 pl-10">
              <svg width={20} height={20} className="text-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
              <a href="#contacto" onClick={handleClick} className="tracking-wider font-extrabold ml-2">Contacto</a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}