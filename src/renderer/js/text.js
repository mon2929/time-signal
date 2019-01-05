class Text {
	constructor(parent) {
		this.parent = parent;
		this.ctx = this.parent.ctx;

		this.x = this.parent.padding + 18;
		this.y = this.parent.height / 2 - 8;

		this.nowTime = new Date();
		this.nextTime = new Date();
		this.nextTime.setMinutes(this.nowTime.getMinutes() + 1);

		this.timeStr = '';
		if (this.nextTime.getHours() < 10) {
			this.timeStr += '0' + this.nextTime.getHours();
		}
		else {
			this.timeStr += this.nextTime.getHours();
		}
		this.timeStr += '：';
		if (this.nextTime.getMinutes() < 10) {
			this.timeStr += '0' + this.nextTime.getMinutes();
		}
		else {
			this.timeStr += this.nextTime.getMinutes();
		}
	}

	draw() {
		this.ctx.save();
		this.ctx.scale(0.9, 1);

		this.ctx.fillStyle = COLOR.white;
		this.ctx.font = '190px NotoSansCJKjp';
		this.ctx.textAlign = 'left';
		this.ctx.textBaseline = 'middle';
		this.ctx.fillText(this.timeStr + 'まで', this.x, this.y);

		this.ctx.restore();
	}
}
