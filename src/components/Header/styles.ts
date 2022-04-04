import styled from 'styled-components'

export const Container = styled.header`
	background: ${({ theme }) => theme.colors.blue};
`

export const Wrapper = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem 1rem 10rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Logo = styled.img``

export const Button = styled.button`
	font-size: 1rem;
	color: #fff;
	background: ${({ theme }) => theme.colors.lightBlue};
	border: 0;
	padding: 0 2rem;
	border-radius: 0.25rem;
	height: 3rem;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}
`
