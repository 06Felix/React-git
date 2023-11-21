import React from 'react';
import Finalf from '../Footer/Finalf';
import Navbar from '../Navbar/Navbar';
import imge from './Content.jpg';

const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div style={{marginTop:'65px'}}>
            <img src={imge} alt='Background' style={{height:'690px',width:'100%'}}/>
        </div>
        <div>
            <Finalf/>
        </div>
    </div>
  )
}

export default Home;
