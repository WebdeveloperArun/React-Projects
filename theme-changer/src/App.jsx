import ThemeBtn from './components/Themebtn'
import Card from './components/Card'
import './App.css'
import {ThemeProvider} from './context/themeContext'
import { useEffect, useState } from 'react''react'

function App() {
      const [defaultTheme, setDefaultTheme] = useState("light")

      const darkTheme = ()=>{
        setDefaultTheme("dark")
      }

      const lightTheme = ()=>{
        setDefaultTheme("light")
      }

      useEffect(()=>{

        let style = document.querySelector('html').classList.remove("light", "dark")
        
        style.classList.add(defaultTheme)
        

      },[defaultTheme])


  return (
    <ThemeProvider value={{defaultTheme,darkTheme, lightTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
        </div>
    </ThemeProvider>
  )
}

export default App
