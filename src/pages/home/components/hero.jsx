import React from 'react'
import TopFlare from '../../../assets/images/hero_top_flare.png'
import Stars from '../../../assets/images/hero_stars.png'
import VectorImage from '../../../assets/images/Vector 4.svg'

const Hero = () => {
  return (
    <>
      <section className='hero h-screen w-screen overflow-hidden relative'>
        <div className='absolute opacity-[0.5] top-[-10%] left-[3%]'>
          <img src={TopFlare} width={'70%'} alt="purple flare" />
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
      </section>
    </>
  )
}

export default Hero