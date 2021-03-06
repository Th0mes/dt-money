import ContextsProviders from '@contexts/ContextsProvider'
import ReactDOM from 'react-dom'
import App from './App'
import { createServer } from 'miragejs'

createServer({
	routes() {
		this.namespace = 'api'

		this.get('/transactions', () => {
			return [
				{
					id: 1,
					title: 'Transaction 1',
					amount: 400,
					type: 'deposit',
					category: 'Food',
					createdAt: new Date(),
				},
			]
		})
	},
})

ReactDOM.render(
	<ContextsProviders>
		<App />
	</ContextsProviders>,
	document.getElementById('root')
)
