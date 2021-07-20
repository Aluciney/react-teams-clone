import React, { useState, useRef, useEffect, useCallback } from 'react';
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

declare global {
	interface window {
		require: any;
	}
}

const HeaderAuto: React.FC = () => {

	const [isMaximized, setIsMaximized] = useState(false);
	const searchRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const serach = searchRef.current;
		if (serach) {
			const unsubscribe = serach.addEventListener('focus', () => {
				setIsFocused(true);
			});
			return () => unsubscribe;
		}
	}, [searchRef]);

	useEffect(() => {
		const serach = searchRef.current;
		if (serach) {
			const unsubscribe = serach.addEventListener('blur', () => {
				setIsFocused(false);
			});
			return () => unsubscribe;
		}
	}, [searchRef]);

	const handleCloseWindow = useCallback(() => {
		const window_ = window.require('electron').remote.getCurrentWindow();

		window_.close();
	}, [])

	const handleMaximize = useCallback(() => {
		const window_ = window.require('electron').remote.getCurrentWindow();

		if (!window_.isMaximized()) {
			window_.maximize();
		} else {
			window_.unmaximize();
		}
	}, [])

	const handleMinimize = useCallback(() => {
		const window_ = window.require('electron').remote.getCurrentWindow();

		window_.minimize();
	}, [])

	useEffect(() => {
		const window_ = window.require('electron').remote.getCurrentWindow();
		setIsMaximized(window_.isMaximized());

		window_.on('maximize', () => {
			setIsMaximized(true);
		});
		window_.on('unmaximize', () => {
			setIsMaximized(false);
		});
	}, []);

	return (
		<Container>
			<SearchContainer>
				{!isFocused && (searchText.trim().length === 0) && (<IoIosSearch />)}
				<TextInput
					ref={searchRef}
					placeholder={isFocused ? 'Procure mensagens, arquivos e muito mais. Ou digite / para obter uma lista de comandos.' : 'Pesquisar'}
					onChange={e => setSearchText(e.target.value)}
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
				<WindowsButton onClick={handleMinimize}>
					<FiMinus size={20} />
				</WindowsButton>
				<WindowsButton onClick={handleMaximize}>
					{isMaximized ? (
						<BiWindows size={16} />
					) : (
						<BiWindow size={16} />
					)}
				</WindowsButton>
				<WindowsButton isClose={true} onClick={handleCloseWindow}>
					<FiX size={20} />
				</WindowsButton>
			</WindowsContainer>
		</Container>
	);
}

export default HeaderAuto;