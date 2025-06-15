import { useState } from 'react'
import { MyThemeContext } from './MyThemeContext'

export function MyThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    background: '#ffffff',
    foreground: '#000000'
  })

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      background: prevTheme.background === '#ffffff' ? '#333333' : '#ffffff',
      foreground: prevTheme.foreground === '#000000' ? '#ffffff' : '#000000'
    }))
  }

  return (
    <MyThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </MyThemeContext.Provider>
  )
}

export default MyThemeProvider
