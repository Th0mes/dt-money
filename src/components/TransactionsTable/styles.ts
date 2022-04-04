import styled from 'styled-components'

export const Container = styled.table`
	margin-top: 4rem;

	width: 100%;
	border-spacing: 0 0.5rem;

	th {
		color: ${({ theme }) => theme.colors.text};
		font-weight: 400;
		padding: 1rem 2rem;
		text-align: left;
		line-height: 1.5rem;
	}

	td {
		padding: 1rem 2rem;
		border: 0;
		background-color: ${({ theme }) => theme.colors.shape};
		color: ${({ theme }) => theme.colors.text};

		&:first-child {
			color: ${({ theme }) => theme.colors.title};
		}
	}

	.positive {
		color: ${({ theme }) => theme.colors.green};
	}

	.negative {
		color: ${({ theme }) => theme.colors.red};
	}
`
