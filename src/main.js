const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;

let win;

app.on('ready', () => {
	win = new BrowserWindow({
		x: 1390,
		y: 920,
		resizable: false,
		alwaysOnTop: true,
		show: false,
		frame: false
	});

	// Argument should be a path from the root of this application.
	win.loadFile('src/renderer/index.html');

	//win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
});

ipcMain.on('asynchronous-message', (event, arg1, arg2) => {
	if (arg1 === 'exit') {
		app.quit();
	}
	else if (arg1 === 'show') {
		win.setIgnoreMouseEvents(true);
		win.showInactive();
	}
	else {
		win.setContentSize(arg1, arg2);
	}
});
