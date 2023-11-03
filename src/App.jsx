
import { BrowserRouter } from 'react-router-dom';
import {
  Experiences,
  About,
  Hero,
  Navbar,
  Tech,
  Work,
  Feedbacks,
  Contact,
  Chat,
} from './components';
import { StarsCanvas } from './components/canves';
import { useState } from 'react';
import { chatBot } from './assets';
 
function App() {
  const [isVisble,setVisble]=useState(false)
  

  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experiences />
          <Tech />
          <Work />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>

          <div className={`chatBot  ${isVisble ? 'show' : 'hide' } `  } >
             <Chat/>
          </div>

           <div className="fixed right-5 bottom-5 h-16 w-16 rounded-[50%] bg-black cursor-pointer text-[#915EFF] text-[30px] items-center border-4 border-[#915EFF] flex justify-center " onClick={()=>setVisble(!isVisble)}>
             {/* <FaCommentAlt/> */}
             <img src={chatBot} height='50' width='50' alt="chatBot" />
             </div>
         </div>
 
      </BrowserRouter>
  );
}

export default App;
