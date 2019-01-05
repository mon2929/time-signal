class Base {
	constructor(parent) {
		this.parent = parent;
		this.ctx = this.parent.ctx;

		this.x = 0;
		this.y = 0;
		this.width = this.parent.width;
		this.height = this.parent.height;
	}

	draw() {
		this.ctx.fillStyle = COLOR.black;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);

		this.ctx.fillStyle = COLOR.white;
		this.ctx.fillRect(this.x + this.parent.border, this.y + this.parent.border, this.width - this.parent.border * 2, this.height - this.parent.border * 2);

		this.ctx.fillStyle = COLOR.red;
		this.ctx.fillRect(this.x + this.parent.border + this.parent.padding, this.y + this.parent.border + this.parent.padding, this.parent.contentWidth, this.parent.contentHeight);
	}
}
