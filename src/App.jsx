import logo from './assets/logo.svg'

import Main from './components/sections/Main'

function App() {

  return (
    <div className="App">
      <header className="w-[100%] h-[80px] flex justify-center items-center">
        <div className="w-[70%] flex justify-between">
          <img src={logo} className="w-[45px]"/>
          <nav className="flex items-center">
            <ul className="flex gap-[20px] items-center">
              <li id="underline-hover-text-wrapper"><a href="#" id="underline-hover-text">Home</a></li>
              <li id="underline-hover-text-wrapper"><a href="#" id="underline-hover-text">About</a></li>
              <li><a href="#" className="text-black p-[10px] bg-green rounded-[60px] hover:bg-[#24B517] duration-150">Download CV</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Main/>
      </main>
    </div>
  )
}

export default App
