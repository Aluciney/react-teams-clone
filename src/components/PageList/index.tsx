import React, { useState } from 'react';
import { IoNotificationsOutline, IoEllipsisHorizontal, IoCalendarOutline } from 'react-icons/io5';
import { BsChatDots } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineFile } from 'react-icons/ai';
import { MdHelpOutline } from 'react-icons/md';
import { BiCube } from 'react-icons/bi';
import NavButtons from '../NavButtons';
import { Container, ButtonList } from './styles';

import PageButton from '../PageButton';

const PageList: React.FC = () => {

	const [page, setPage] = useState('Chat');

	return (
		<Container>
			<ButtonList>
				<NavButtons />
				<PageButton 
					title="Atividade" 
					icon={IoNotificationsOutline} 
					active={page === 'Active'} 
					onClick={()=> setPage('Active')}
				/>
				<PageButton 
					title="Chat" 
					icon={BsChatDots} 
					active={page === 'Chat'} 
					onClick={()=> setPage('Chat')}
				/>
				<PageButton 
					title="Equipes" 
					icon={HiOutlineUserGroup} 
					active={page === 'Teams'} 
					onClick={()=> setPage('Teams')}
				/>
				<PageButton 
					title="Calendário" 
					icon={IoCalendarOutline} 
					active={page === 'Calendar'} 
					onClick={()=> setPage('Calendar')}
				/>
				<PageButton 
					title="Chamadas" 
					icon={FiPhone} 
					active={page === 'Calls'} 
					onClick={()=> setPage('Calls')}
				/>
				<PageButton 
					title="Arquivos" 
					icon={AiOutlineFile} 
					active={page === 'Files'} 
					onClick={()=> setPage('Files')}
				/>
				<PageButton 
					icon={IoEllipsisHorizontal}
				/>
				<button>
					<IoEllipsisHorizontal size={20} />
				</button>
			</ButtonList>
	
			<ButtonList>
				<PageButton 
					title="Aplicativos" 
					icon={BiCube} 
					active={page === 'App'} 
					onClick={()=> setPage('App')}
				/>
				<PageButton 
					title="Ajuda" 
					icon={MdHelpOutline}
				/>
			</ButtonList>
		</Container>
	);
}

export default PageList;