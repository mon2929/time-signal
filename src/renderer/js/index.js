const electron = require('electron');
const { ipcRenderer } = electron;

const Tone = require('tone');

const COLOR = {
	black : '#000000',
	white : '#f5f5f5',
	red   : '#ff0033',
	yellow: '#ffff33'
};

let app = new App();
app.draw();
