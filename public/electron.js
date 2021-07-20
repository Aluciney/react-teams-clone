// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1100,
		height: 750,
		minWidth: 715,
		minHeight: 700,
		resizable: true,
		backgroundColor: '#1f1f1f',
		frame: false, // removes the frame from the BrowserWindow. It is advised that you either create a custom menu bar or remove this line
		webPreferences: {
			devTools: isDev, // toggles whether devtools are available. to use node write window.require('<node-name>')
			nodeIntegration: true, // turn this off if you don't mean to use node,
			enableRemoteModule: true,
			contextIsolation: false
		}
	})

	// load the index.html of the app. (or localhost on port 3000 if you're in development)
	mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`
	)

	// Open the DevTools. will only work if webPreferences::devTools is true
	mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
	createWindow()

	app.on('activate', () => {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0)
			createWindow()
	})
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// to access anything in here use window.require('electron').remote
