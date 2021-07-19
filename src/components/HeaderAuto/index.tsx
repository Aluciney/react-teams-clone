import React, { useState, useRef, useEffect } from 'react';
import { FiX, FiMinus } from 'react-icons/fi';
import { BiWindow, BiWindows } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import Avatar from '../Avatar';

import {
	Container,
	SearchContainer,
	WindowsContainer,
	WindowsButton,
	EllipsisButton,
	TextInput
} from './styles';

const HeaderAuto: React.FC = () => {

	const [isMaximized] = useState(false);
	const searchRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const serach = searchRef.current;
		if(serach){
			const unsubscribe = serach.addEventListener('focus', () => {
				setIsFocused(true);
			});		
			return () => unsubscribe;
		}
	},[searchRef]);

	useEffect(() => {
		const serach = searchRef.current;
		if(serach){
			const unsubscribe = serach.addEventListener('blur', () => {
				setIsFocused(false);
			});
			return () => unsubscribe;
		}
	},[searchRef]);

	return (
		<Container>
			<SearchContainer>
				{!isFocused && (searchText.trim().length === 0) && (<IoIosSearch />)}
				<TextInput 
					ref={searchRef}
					placeholder={isFocused ? 'Procure mensagens, arquivos e muito mais. Ou digite / para obter uma lista de comandos.' : 'Pesquisar'}
					onChange={ e => setSearchText(e.target.value)}
					value={searchText} 
				/>
			</SearchContainer>
			<WindowsContainer>
				<EllipsisButton>
					<IoEllipsisHorizontal />
				</EllipsisButton>
				<WindowsButton style={{ marginRight: 5 }}>
					<Avatar />
				</WindowsButton>
				<WindowsButton>
					<FiMinus size={18} />
				</WindowsButton>
				<WindowsButton>
					{isMaximized ? (
						<BiWindows size={14} />
					) : (
						<BiWindow size={14} />
					)}
				</WindowsButton>
				<WindowsButton isClose={true}>
					<FiX size={18} />
				</WindowsButton>
			</WindowsContainer>
		</Container>
	);
}

export default HeaderAuto;