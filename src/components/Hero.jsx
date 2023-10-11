
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col  '>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz-logo" className='w-28 object-contain '/>
            <button
            type="button"
            onClick={() => 
              window.open ('https://github.com/noeamelya/project1-app')}
            className='black_btn'>
                GitHub
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAI GPT</span>
        </h1>
        <h2 className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus, placeat laborum libero impedit voluptates quisquam saepe tempora nam consequuntur ratione recusandae praesentium quis quam eveniet repellendus corrupti dicta facere?</h2>

    </header>
  )
}

export default Hero;