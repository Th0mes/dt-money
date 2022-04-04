import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import { GlobalStyle } from '@styles/globals'

const ThemeContext: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}

export default ThemeContext
