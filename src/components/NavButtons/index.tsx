import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Container, NavButton } from './styles';

const NavButtons: React.FC = () => {
	return (
		<Container>
			<NavButton>
				<BsChevronLeft style={{ marginRight: 5 }} />
			</NavButton>
			<NavButton disabled>
				<BsChevronRight style={{ marginLeft: 5 }} />
			</NavButton>
		</Container>
	);
}

export default NavButtons;