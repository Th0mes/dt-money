import { ReactNode, StrictMode } from 'react'
import ThemeContext from './ThemeContext'

type ContextsProvidersProps = {
	children: ReactNode
}

const ContextsProviders: React.FC<ContextsProvidersProps> = ({ children }) => {
	return (
		<StrictMode>
			<ThemeContext>{children}</ThemeContext>
		</StrictMode>
	)
}

export default ContextsProviders
