// import React from 'react'
// import Navbar from './component/Navbar'
// import News from './component/News'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// // import About from './component/About'

// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//     <Navbar/>
//     <Routes>
//       <Route exact path='/' element={<News/>}></Route>
//     </Routes>
//     </BrowserRouter>
     
//       {/* <About/> */}
//       {/* <News/> */}
//     </>
//   )
// }

// export default App


import React, { Component } from 'react'
 import Navbar from './component/Navbar'
 import News from './component/News'
 import { BrowserRouter, Route, Routes } from 'react-router-dom' 

export class App extends Component {
  render() {
    return (
      <>
           <BrowserRouter>
           <Navbar/>
           <Routes>
             <Route exact path='/' element={<News/>}></Route>
           </Routes>
           </BrowserRouter>
        
           </>
    )
  }
}

export default App