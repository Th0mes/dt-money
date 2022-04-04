import styled from 'styled-components'

export const Container = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	margin-top: -5rem;
`

export const Box = styled.div<{ green?: boolean }>`
	background: ${({ theme, green }) =>
		green ? theme.colors.green : theme.colors.shape};

	padding: 1.5rem 2rem;
	border-radius: 0.25rem;
	color: ${({ theme }) => theme.colors.title};

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	strong {
		display: block;
		margin-top: 1rem;
		font-size: 2rem;
		font-weight: 500;
		line-height: 3rem;
	}
`
