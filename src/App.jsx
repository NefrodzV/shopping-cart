import React from 'react'
import './App.css'
import Header from './components/Header'
import Specials from './components/Specials'

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <Header />
        <Specials />
      </>
    )
  }
}
