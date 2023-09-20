import React from 'react'
import TopFlare from '../../../assets/images/hero_top_flare.png'
import Stars from '../../../assets/images/hero_stars.png'
import Matrix from '../../../assets/images/metrix 1.png'
import VectorImage from '../../../assets/images/Vector 4.svg'
import ChainImage from '../../../assets/images/chain-9365116-7621444.png'
import BlastImage from '../../../assets/images/1f4a5.png'
import SmartGlasses from '../../../assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import GlowGlobe from '../../../assets/images/Image 1.png'
import Button from '../../../components/button'

const Hero = () => {
  return (
    <>
      <section className='hero h-screen w-screen overflow-hidden relative'>
        <div className='absolute opacity-[0.4] top-[-30%] left-[0%]'>
          <img src={TopFlare} width={'100%'} alt="purple flare" />
        </div>

        <div className='absolute left-[20%] top-[20%] bottom-[10%]'>
          <img src={Stars} width={'70%'} alt="stars illustration" />
        </div>
        <div className="hr_text absolute w-full top-[15%] left-0 right-0">
          <h1 className='text-white text-right mr-[50px] text-[32px] leading-[32px] font-[600]'>
            <i>Igniting a Revolution in
              <span className='vector_wrap ml-2 relative'>
                HR Innovation
                <img src={VectorImage} width={'100%'} className='absolute -bottom-[50%] left-0 right-0' alt="vactor illustration" />
              </span>.</i>
          </h1>
        </div>
        <div className="w-[50%] right-0 bottom-0 h-screen absolute">
          <img src={Matrix} width={'100%'} alt="matrix illustration" />
        </div>
        <div className='absolute -right-[10%] bottom-0'>
          <img src={SmartGlasses} className='main_hero_img' width={'70%'} alt="man wearing smart glasses" />
          <img src={GlowGlobe} className='absolute right-0 top-0 left-0 bottom-0' width={'70%'} alt="man wearing smart glasses" />
        </div>

        <div className='mx-auto relative max-w-[1200px]'>
          <div className="hero_text w-[50%] h-screen flex items-center">
            <div>
              <h1 className='text-white font-[800] leading-[60px] text-[60px]'>
                getlinked Tech
              </h1>
              <h1 className='text-white hero_text_content relative font-[800] mt-2 leading-[60px] text-[60px]'>
                Hackathon <span className='text-primary'>1.0</span>
                <div className='absolute top-0 flex -right-[23%]'>
                  <img src={ChainImage} width={60} alt="chain illustration" />
                  <img src={BlastImage} width={60} alt="blast illustration" />
                </div>
              </h1>
              <p className="mt-5 text-white">
                Participate in getlinked tech Hackathon 2023 stand <br />
                a chance to win a Big prize
              </p>
              <div className="mt-5">
                <Button
                  text={'Register'}
                />
              </div>

              <div className="mt-8 absolute bottom-0 mb-[5%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea error et adipisci, nemo obcaecati minus impedit labore esse dolor corrupti voluptatibus! Eum eveniet quisquam temporibus repudiandae tempora ipsam dolorem rem!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero