 import React, { Component } from 'react'
 import Navbar from './component/Navbar'
 import News from './component/News'
 import { BrowserRouter, Route, Routes } from 'react-router-dom' 

export class App extends Component {
  pageSize = 14;
  render() {
    return (
      <>
           <BrowserRouter>
           <Navbar/>
           <Routes>
           <Route exact path='/' element={<News  key='general' pageSize={this.pageSize} country='us' category='general'/>} /> 

           </Routes>
           </BrowserRouter>
        
           </>
    )
  }
}

export default App