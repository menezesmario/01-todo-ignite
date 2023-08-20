import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter, Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Header />
      <TaskList />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
