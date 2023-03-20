
import './App.css'
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {GoPrimitiveDot} from 'react-icons/go'
function App() {

  return (
    <div className="App">
      <p style={{fontWeight:'bold'}}>Real thim sparameter //////<span>//////////</span><span className='fade'>/////////////</span><span>////////</span> </p><br />
      <div className="bars">
        <div className="bar">      
          <CircularProgressbarWithChildren value={75} counterClockwise 
          styles={buildStyles({
            pathColor: "turquoise",
            trailColor: "rgba(22, 22, 22, 1)"
          })}
          >
            <div style={{ fontSize: '2.4rem', marginTop: -5 }}>
              <strong>75%</strong><p style={{fontSize: '1.3rem', textAlign: 'center', marginTop:'15px'}}>SOH</p>
            </div>
          </CircularProgressbarWithChildren><br />
          <p style={{fontSize:'1.5rem', textAlign:'center',fontWeight:'bold'}}>Charged State</p>
          <div className="dot" style={{fontSize:'1rem', textAlign:'center'}}>
            <div style={{display:'flex'}}>
              <span><GoPrimitiveDot style={{color:'green'}} size={18}/></span>
              <span style={{color:'white'}}>ON</span> 
            </div>
            <div style={{display:'flex'}}>
              <span><GoPrimitiveDot style={{color:'gray'}} size={18}/></span>
              <span style={{color:'gray'}}>OFF</span> 
            </div>
          </div>

        </div>
        <div className="bar">      
          <CircularProgressbarWithChildren value={75} counterClockwise 
          styles={buildStyles({
            pathColor: "turquoise",
            trailColor: "rgba(22, 22, 22, 1)"
          })}
          >
            <div style={{ fontSize: '2.4rem', marginTop: -5 }}>
              <strong>75%</strong><p style={{fontSize: '1.3rem', textAlign: 'center', marginTop:'15px'}}>SOC</p>
            </div>
            </CircularProgressbarWithChildren><br />
          <p style={{fontSize:'1.5rem', textAlign:'center',fontWeight:'bold'}}>Charged State</p>
          <div className="dot" style={{fontSize:'1rem', textAlign:'center'}}>
            <div style={{display:'flex'}}>
              <span><GoPrimitiveDot style={{color:'gray'}} size={18}/></span>
              <span style={{color:'gray'}}>ON</span> 
            </div>
            <div style={{display:'flex'}}>
              <span><GoPrimitiveDot style={{color:'green'}} size={18}/></span>
              <span style={{color:'white'}}>OFF</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
