import React from 'react';

import { BsChevronDown } from 'react-icons/bs';
import { MdFilterList } from 'react-icons/md';
import { RiEditBoxLine } from 'react-icons/ri';
import { 
	Container, 
	ButtonsLeft, 
	ButtonsRight
} from './styles';

const PageInfo: React.FC = () => {
	return (
		<Container>
			<ButtonsLeft>
				<h3>Chat</h3>
				<button>
					<BsChevronDown />
				</button>
			</ButtonsLeft>
			<ButtonsRight>
				<button>
					<MdFilterList />
				</button>
				<button>
					<RiEditBoxLine />
				</button>
			</ButtonsRight>
		</Container>
	);
}

export default PageInfo;