class Board {
	constructor(parent) {
		this.parent = parent;
		this.ctx = this.parent.ctx;

		this.margin = 6;
		this.height = this.parent.contentHeight - this.margin * 2;
		this.width = this.height;
		this.x = this.parent.width - this.parent.border - this.parent.padding - this.margin - this.width;
		this.y = this.parent.border + this.parent.padding + this.margin;

		this.dotRadius = 10.5;
		this.dotInterval = 0;
		this.charWidth;
		this.charHeight;
		this.charX;
		this.charY;
	}

	draw(num) {
		this.ctx.fillStyle = COLOR.black;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);

		this.charWidth = BITMAP[num].width * (this.dotRadius * 2 + this.dotInterval) - this.dotInterval;
		this.charHeight = BITMAP[num].height * (this.dotRadius * 2 + this.dotInterval) - this.dotInterval;
		this.charX = this.x + (this.width - this.charWidth) / 2;
		this.charY = this.y + (this.height - this.charHeight) / 2;

		this.ctx.fillStyle = COLOR.yellow;
		for (let i = 0; i < BITMAP[num].height; i++) {
			for (let j = 0; j < BITMAP[num].width; j++) {
				if (BITMAP[num].array[i][j] === 1) {
					this.ctx.beginPath();
					this.ctx.arc(this.charX + this.dotRadius * (2 * j + 1) + this.dotInterval * j, this.charY + this.dotRadius * (2 * i + 1) + this.dotInterval * i, this.dotRadius, 0, Math.PI * 2);
					this.ctx.closePath();
					this.ctx.fill();
				}
			}
		}
	}
}
