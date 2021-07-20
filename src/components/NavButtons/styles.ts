import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
`;

export const NavButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	
	svg {
		font-size: 16px;
		color: #cecece;
		
	}

	&:disabled {
		cursor: default;
		svg {
			color: #9c9c9c;
		}
	}

	&:hover:not(:disabled) {
		svg {
			transform: scale(1.1);
			color: #FFF;
		}
	}
`;
