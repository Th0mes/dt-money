import { api } from '@services/api'
import { useEffect } from 'react'
import { Container } from './styles'

export const TransactionsTable = () => {
	useEffect(() => {
		api.get('/transactions').then((response) => response.data)
	}, [])

	return (
		<Container>
			<thead>
				<tr>
					<th>Título</th>
					<th>Valor</th>
					<th>Categoria</th>
					<th>Data</th>
				</tr>
			</thead>
			<tbody>
				{Array.from({ length: 3 }).map((_, index) => (
					<tr key={index}>
						<td>Desenvolvimento de website</td>
						<td className="positive">R$12.000</td>
						<td>Desenvolvimento</td>
						<td>04/04/2021</td>
					</tr>
				))}
			</tbody>
		</Container>
	)
}
