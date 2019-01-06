class App {
	constructor() {
		this.width = 1020;
		this.height = 220;

		this.border = 2;
		this.padding = 10;
		this.contentWidth = this.width - this.border * 2 - this.padding * 2;
		this.contentHeight = this.height - this.border * 2 - this.padding * 2;

		let canvas = document.getElementById('canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		this.ctx = canvas.getContext('2d');

		this.canvasScale = 0.5;
		canvas.style.transform = 'scale(' + this.canvasScale + ')';
		ipcRenderer.send('asynchronous-message', canvas.width * this.canvasScale, canvas.height * this.canvasScale);

		this.nowSecond;
		this.prevSecond;
		this.timeSpan = 5;
		this.countdown = this.timeSpan;
		this.canCountdown = true;

		this.base = new Base(this);
		this.text = new Text(this);
		this.board = new Board(this);
		this.beep = new Beep(this);
	}

	draw() {
		this.ctx.clearRect(0, 0, this.width, this.height);

		this.base.draw();
		this.text.draw();
		this.board.draw(this.countdown);

		this.prevSecond = this.nowSecond;
		this.nowSecond = new Date().getSeconds();
		if (this.nowSecond !== this.prevSecond) {
			if (60 - this.nowSecond === this.timeSpan + 2) {
				ipcRenderer.send('asynchronous-message', 'show');
				this.beep.playStart();
			}
			if (60 - this.nowSecond === this.countdown) {
				this.beep.playCountdown();
				this.countdown--;
			}
			if (this.countdown === 0 && this.canCountdown === true) {
				this.beep.playFinish();
				this.canCountdown = false;
				setTimeout(() => {
					ipcRenderer.send('asynchronous-message', 'exit');
				}, 2500);
			}
		}

		window.requestAnimationFrame(this.draw.bind(this));
	}
}
