import React from 'react'
// import Child from './Components/Child'
import images from './vijipass.jpg'




// class App extends React.Component
// {
//   render()
//   {
//     return <Child></Child>
//   }
// }
// export default App


// class Child extends React.Component
// {
//   render()
//   {
//     return <Child></Child>
//   }
// }
// export default Child





// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



class App extends React.Component
{
  render()
  {
    return <div>

            <div class="main"><u><h1><center>VIJI RESUME</center></h1></u></div>

            Full Stack Developer:VIJETH KALAVARKAR<br/>
            Phone:6363481135<br/>

            <a href="www.gmail.com">Email:abc@gmail.com</a><br/>
            <a href="www.facebook.com">facebook.com</a><br/>
            <a href="www.instagram.com">instagram.com</a><br/><br/>

            Address:Koteswara,kalavara<br/><br/>

            <img src={images} alt="" heigh="200" width="200"/><br/><br/><br/><br/>


            objective:
                <p>
                    <b>Determind,quick learner with strong interaction skills</b>
                </p>

            Skills
            
                <p>
                    <b>C++,java,Python,VB.NET,Photoshop</b>
                </p>

            Work Experience<br/><br/>
            
                <b>FULL STACK DEVELOPER</b><br/>

                   <ul> <b>HP</b>- December 2018<br/></ul>
                    <ul><b>Microdegree</b>- January 2020</ul>
                
                    

            <b>Educational Qualification</b><br/><br/>


            <table>
                        <tr>
                            <td>Degree</td>
                            <td>Name of the Institute</td>
                            <td>Percentage</td>
                            <td>Year</td>
                        </tr>

                        <tr>
                            <td>MCA</td>
                            <td>NITTE</td>
                            <td>70</td>
                            <td>2019</td>
                        </tr>

                        <tr>
                            <td>BCA</td>
                            <td>Bhandarkars' Arts and science college</td>
                            <td>74</td>
                            <td>2015</td>
                        </tr>

                        <tr>
                            <td>PUC</td>
                            <td>Excellent PU college</td>
                            <td>68</td>
                            <td>2014</td>
                        </tr>

                        <tr>
                            <td>SSLC</td>
                            <td>Govt high school kalavara</td>
                            <td>70</td>
                            <td>2013</td>
                        </tr>

                </table>
    </div>
  }
}
export default App