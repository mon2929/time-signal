class Beep {
	constructor(parent) {
		this.parent = parent;
		this.ctx = this.parent.ctx;

		this.osc = new Tone.Oscillator(500, 'sine');
		this.osc.toMaster();
	}

	playStart() {
		this.osc.frequency.value = 495;
		this.osc.start();
		this.osc.stop('+1.2');
	}

	playCountdown() {
		this.osc.frequency.value = 495;
		this.osc.start();
		this.osc.stop('+0.15');
	}

	playFinish() {
		this.osc.frequency.value = 1000;
		this.osc.start();
		this.osc.stop('+1');
	}
}
