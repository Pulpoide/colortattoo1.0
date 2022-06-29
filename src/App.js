import img_logo from './imgs/Logo_apaizado.jpg';
import ImgGalery from './components/ImgGalery';
import Bar from './components/Bar';
/* css */
import './App.css';


function App() {
  return (
    <div className="grid-container bg-dark">
        <Bar/>
        <div className="container bg-dark">
        {<img src={img_logo} className="img-fluid"/>}
         <ImgGalery/> 
        <div className='container-down' />
      </div>
    </div>
  );
}

export default App;
