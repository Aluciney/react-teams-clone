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

const PageList: React.FC = () => {

	const [page, setPage] = useState('Chat');

	return (
		<Container>
			<ButtonList>
				<NavButtons />
				<button className={page === 'Active' ? 'active' : ''} onClick={()=> setPage('Active')}>
					<IoNotificationsOutline />
					<span>Atividade</span>
				</button>
				<button className={page === 'Chat' ? 'active' : ''} onClick={()=> setPage('Chat')}>
					<BsChatDots />
					<span>Chat</span>
				</button>
				<button className={page === 'Teams' ? 'active' : ''} onClick={()=> setPage('Teams')}>
					<HiOutlineUserGroup />
					<span>Equipes</span>
				</button>
				<button className={page === 'Calendar' ? 'active' : ''} onClick={()=> setPage('Calendar')}>
					<IoCalendarOutline />
					<span>Calendário</span>
				</button>
				<button className={page === 'Calls' ? 'active' : ''} onClick={()=> setPage('Calls')}>
					<FiPhone />
					<span>Chamadas</span>
				</button>
				<button className={page === 'Files' ? 'active' : ''} onClick={()=> setPage('Files')}>
					<AiOutlineFile />
					<span>Arquivos</span>
				</button>
				<button>
					<IoEllipsisHorizontal size={20} />
				</button>
			</ButtonList>
	
			<ButtonList>
				<button className={page === 'App' ? 'active' : ''} onClick={()=> setPage('App')}>
					<BiCube />
					<span>Aplicativos</span>
				</button>
				<button className={page === 'Helpe' ? 'active' : ''} onClick={()=> setPage('Helpe')}>
					<MdHelpOutline />
					<span>Ajuda</span>
				</button>
			</ButtonList>
		</Container>
	);
}

export default PageList;