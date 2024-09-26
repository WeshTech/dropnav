import desktopImg from '../assets/image-hero-desktop.png'
import databiz from '../assets/client-databiz.svg'
import audiphine from '../assets/client-audiophile.svg'
import meet from '../assets/client-meet.svg'
import maker from '../assets/client-maker.svg'

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-2 ">
        <div className="flex flex-col mx-auto py-16 px-2 items-center lg:items-start justify-center">
                <h1 className="text-3xl lg:text-7xl mb-10 font-bold">Make {<br/>}
                    <span> remote work</span></h1>
            
            <p className="mb-10 text-stone-600 w-96">Get your team in sync, no matter your location. Streamline processes.
                create team rituals, and watch productivity soar.
            </p>

            <a className = "border border-neutral-950 bg-black text-slate-50 px-4 py-2 rounded-xl hover:bg-transparent hover:text-black" href="#"><p>Learn more</p></a>

            <div className='flex mt-28 gap-7 text-xs h-5 w-18'>
                <img className = "h-3" src={databiz} alt="databiz" />
                <img className='h-7' src={audiphine} alt="audiophile" />
                <img className='h-4' src={meet} alt="meet" />
                <img src={maker} alt="maker" />
            </div>

        </div>

        <div>
            <img className = "h-100 w-96 mr-48" src={desktopImg} alt="" />
        </div>

    </div>
  )
}

export default Hero