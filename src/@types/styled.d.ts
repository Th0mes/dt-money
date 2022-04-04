import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			red: string
			blue: string
			lightBlue: string
			green: string
			title: string
			text: string
			background: string
			shape: string
		}
	}
}
