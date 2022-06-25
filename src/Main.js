import './App.css';
import AndroidCard from './Components/AppCard';
import Header from './Components/Header';
import CBar from './Components/CBar';
import CppBar from './Components/CppBar';
import JavaBar from './Components/Java';
import JavaSciptBar from './Components/JavaScript';
import InfoCard from './Components/InfoCard.js';
import Footer from './Components/Fotter.js';
import WebCard from './Components/WebCard';
import ProjectCard from './Components/ProjectCard';
import ProgressBar from './Components/ProgressBar';
const Main=()=>{
  return (
      <div  className="main">
        <Header/>
        <InfoCard/>
        <h1 className='title'>Knowlodege & Skills</h1>
        <div style={{
          display:'flex',
          flexWrap:'wrap',
          alignItems:"center",
          justifyContent:"center"
        }}>
          <CBar/>
          <CppBar/>
          <JavaBar/>
          <JavaSciptBar/>
        </div>
        <div style={{
          display:'flex',
          flexWrap:'wrap',
          alignItems:"center",
          justifyContent:"center",
        }}>
          <ProgressBar title="React Native" percent="60%"  />
          <ProgressBar title="React JS" percent="70%" />
          <ProgressBar title="Php & mySQL" percent="40%" />
          <ProgressBar title="AWS services" percent="50%" />
        </div>
        <div style={{
          display:'flex',
          flexWrap:'wrap',
          alignItems:"flex-start",
          justifyContent:"space-evenly",
          width:'100%',
        }}>
          <WebCard/>
          <AndroidCard/>
        </div>
        <h1 className='title'>Projects</h1>
        <div style={{
          display:'flex',
          flexWrap:'wrap',
          alignItems:"center",
          justifyContent:"center"
        }}>
          <ProjectCard title="Brevity App" technolody={["React for FrontEnd","Aws for BackEnd"]} uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5z__pPmgqwMrXds3ptRT5lAjp9p_TLqSsA&usqp=CAU" />
          <ProjectCard title="Augmented reality" technolody={["React Native for FrontEnd","Viro react for AR"]} uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BTAIDOpW8I67exlsE9BoUgksWaAPjDhqKg&usqp=CAU" />
          <ProjectCard title="Personal Project" technolody={["React Native for FrontEnd","Aws for BackEnd"]} uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRVhukXoBOBn4mVv_MJC35i0JcvuNxOvRzQ&usqp=CAU" />
          <ProjectCard title="Portfolio" technolody={["HTML,CSS JS for FrontEnd","Three JS for effects"]} uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1FmqAdkN3Z2KnD-g_U1KWy367TitHrj3BCQ&usqp=CAU" />
        </div>
        <Footer/>
      </div>
  );
}

export default Main;
