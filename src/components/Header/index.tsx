import { LogoImg } from '@assets'

import { Container, Wrapper, Logo, Button } from './styles'

export const Header = () => {
	return (
		<Container>
			<Wrapper>
				<LogoImg />
				<Button type="button">Nova Transação</Button>
			</Wrapper>
		</Container>
	)
}
