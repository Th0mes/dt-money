import { IncomeImg, OutcomeImg, TotalImg } from '@assets'
import { PropsWithChildren, SVGProps } from 'react'

import { Container, Box } from './styles'

type DataProps = {
	title: string
	image: PropsWithChildren<
		SVGProps<SVGSVGElement> & { title?: string | undefined }
	>
	price: string
	green?: boolean
}[]

const data: DataProps = [
	{
		title: 'Entradas',
		image: <IncomeImg />,
		price: 'R$ 1000,00',
	},
	{
		title: 'Saídas',
		image: <OutcomeImg />,
		price: '- R$ 500,00',
	},
	{
		title: 'Total',
		image: <TotalImg />,
		price: 'R$ 500,00',
		green: true,
	},
]

export const Summary = () => {
	return (
		<Container>
			{data.map(({ title, image, price, green }, index) => (
				<Box key={index} green={green}>
					<header>
						<p>{title}</p>
						{image}
					</header>
					<strong>{price}</strong>
				</Box>
			))}
		</Container>
	)
}
