import React from "react"
import Landing from './components/Landing';
import FrameTwo from './components/FrameTwo';
import FrameFour from './components/FrameFour';
import FrameFive from './components/FrameFive';
import FrameSix from './components/FrameSix';
import FrameSeven from './components/FrameSeven';
import Footer from './components/Footer'
function HomePage () {
    return(
        <div className="HomePage">
            <Landing />,
            <FrameTwo />,
            <FrameFour />,
            <FrameFive />,
            <FrameSix />,
            <FrameSeven />,
             <Footer /> 
        </div>
    )

}
export default HomePage;