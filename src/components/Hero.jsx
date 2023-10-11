
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
            Learning Summarize an article with <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAI GPT</span>
        </h1>
        <h2 className='desc'>Summarization tool that allows you to take an article, paper, or document and condense it into the most important information at a click of a button.</h2>

    </header>
  )
}

export default Hero;