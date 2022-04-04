import { Summary, TransactionsTable } from '@components'
import { Container } from './styles'

export const Dashboard = () => {
	return (
		<Container>
			<Summary />
			<TransactionsTable />
		</Container>
	)
}
