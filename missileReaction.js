class Particle {
  constructor(simulare) {
    this.simulare = simulare;
    this.markedForDeletion = false;
  }
  update() {
    this.x -= this.speedX * this.simulare.speed;
    this.y -= this.speedY * this.simulare.speed;
    this.size *= 0.97;
    if (this.size < 0.5) this.markedForDeletion = true;
  }
}
export class Dust extends Particle {
  constructor(simulare) {
    super(simulare);
    this.size = Math.random() * 10 + 30;
    this.x = this.simulare.width / 1.78;
    this.y = this.simulare.height / 2.7;
    this.speedX = (Math.random() + 2) * this.simulare.speed
    this.speedY = (Math.random() * 2 - 2) * this.simulare.speed
    this.color = 'rgba(78, 70, 70, 0.1)';
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
  }
  update() {
    if (this.x > this.simulare.width / 1.5) this.speedX = this.speedX * -1;
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 1.005;
    if (this.size > 100) this.markedForDeletion = true;
  }
}
export class Dust2 extends Dust {
  constructor(simulare) {
    super(simulare);
    this.x = this.simulare.width / 2.25;
    this.y = this.simulare.height / 2.85;
    this.speedX = (Math.random() * 4 - 2) * this.simulare.speed;
  }
  update() {
    super.update();
    this.x += this.speedX;
    if (this.x < this.simulare.width / 3) this.speedX = this.speedX * -1;
  }
}
export class SmokeAK726 extends Dust2 {
  constructor(simulare, x, y) {
    super(simulare);
    this.x = x;
    this.y = y;
  }
  update() {
    super.update();
    if (this.x < this.simulare.width / 4) this.speedX = this.speedX * -1;
  }
}
class Cloud extends Particle {
	constructor(simulare, x, y) {
		super(simulare);
		// modificare dimensiune nor la start
		this.size = Math.random() * 5 + 5;
		this.x = x;
		this.y = y;
		this.opacity = 0.4;
		this.opacityDecrease = 0.001;
		this.timer = 0;
		this.interval = 50;
	}
	draw(context) {
		context.beginPath();
		context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		context.arc(this.x - 10, this.y, this.size, 0, Math.PI * 2);
		context.arc(this.x - 20, this.y, this.size, 0, Math.PI * 2);
		context.arc(this.x - 30, this.y, this.size, 0, Math.PI * 2);
		context.arc(this.x - 5, this.y - 5, this.size, 0, Math.PI * 2);
		context.arc(this.x - 15, this.y - 5, this.size, 0, Math.PI * 2);
		context.arc(this.x - 25, this.y - 5, this.size, 0, Math.PI * 2);
		context.arc(this.x - 35, this.y - 5, this.size, 0, Math.PI * 2);
		context.arc(this.x - 5, this.y + 5, this.size, 0, Math.PI * 2);
		context.arc(this.x - 15, this.y + 5, this.size, 0, Math.PI * 2);
		context.arc(this.x - 25, this.y + 5, this.size, 0, Math.PI * 2);
		context.arc(this.x - 35, this.y + 5, this.size, 0, Math.PI * 2);
		context.arc(this.x - 10, this.y + 10, this.size, 0, Math.PI * 2);
		context.arc(this.x - 20, this.y + 10, this.size, 0, Math.PI * 2);
		context.arc(this.x - 30, this.y + 10, this.size, 0, Math.PI * 2);
		context.arc(this.x - 10, this.y - 10, this.size, 0, Math.PI * 2);
		context.arc(this.x - 20, this.y - 10, this.size, 0, Math.PI * 2);
		context.arc(this.x - 30, this.y - 10, this.size, 0, Math.PI * 2);
		context.fillStyle = this.color;
		context.fill();
	}
}

export class Cloud0 extends Cloud {
	constructor(simulare, x, y) {
		super(simulare, x, y);
		// modificare culoare nor (trebuie modificata si mai jos in update)
		this.color = `rgba(144, 144, 144, ${this.opacity})`;
	}

	update(context) {
		this.draw(context);
		// modificare dimensiunea la care norul isi incetineste cresterea
		if (this.size > 100) {
			if (this.timer < this.interval) this.timer++;
			// modificare viteza cu care creste dupa acest punct
			else this.size *= 1.1;
		}
		// modificare viteza cu care creste norul de la inceput
		else this.size *= 1.01;
		this.opacity -= this.opacityDecrease;
		this.color = `rgba(144, 144, 144, ${this.opacity})`;
		if (this.size > 100 || this.opacity === 0) this.markedForDeletion = true;
	}
}
export class Cloud1 extends Cloud {
	constructor(simulare, x, y) {
		super(simulare);
		// modificare culoare nor (trebuie modificata si mai jos in update)
		this.color = `rgba(255, 139, 74, ${this.opacity})`;
	}

	update(context) {
		this.draw(context);
		// modificare dimensiunea la care norul isi incetineste cresterea
		if (this.size > 100) {
			if (this.timer < this.interval) this.timer++;
			// modificare viteza cu care creste dupa acest punct
			else this.size *= 1.1;
		}
		// modificare viteza cu care creste norul de la inceput
		else this.size *= 1.01;
		this.opacity -= this.opacityDecrease;
		this.color = `rgba(255, 139, 74, ${this.opacity})`;
		if (this.size > 100 || this.opacity === 0) this.markedForDeletion = true;
	}
}
export class Cloud2 extends Cloud {
	constructor(simulare, x, y) {
		super(simulare, x, y);
		// modificare culoare nor (trebuie modificata si mai jos in update)
		this.color = `rgba(255, 139, 74, ${this.opacity})`;
	}

	update(context) {
		this.draw(context);
		// modificare dimensiunea la care norul isi incetineste cresterea
		if (this.size > 100) {
			if (this.timer < this.interval) this.timer++;
			// modificare viteza cu care creste dupa acest punct
			else this.size *= 1.1;
		}
		// modificare viteza cu care creste norul de la inceput
		else this.size *= 1.01;
		this.opacity -= this.opacityDecrease;
		this.color = `rgba(255, 139, 74, ${this.opacity})`;
		if (this.size > 100 || this.opacity === 0) this.markedForDeletion = true;
	}
}

export class Cloud3 extends Cloud {
	constructor(simulare, x, y) {
		super(simulare, x, y);
		// modificare culoare nor (trebuie modificata si mai jos in update)
		this.color = `rgba(144, 144, 144, ${this.opacity})`;
	}

	update(context) {
		this.draw(context);
		// modificare dimensiunea la care norul isi incetineste cresterea
		if (this.size > 100) {
			if (this.timer < this.interval) this.timer++;
			// modificare viteza cu care creste dupa acest punct
			else this.size *= 1.1;
		}
		// modificare viteza cu care creste norul de la inceput
		else this.size *= 1.01;
		this.opacity -= this.opacityDecrease;
		this.color = `rgba(144, 144, 144, ${this.opacity})`;
		if (this.size > 100 || this.opacity === 0) this.markedForDeletion = true;
	}
}
export class Cloud4 extends Cloud {
	constructor(simulare, x, y) {
		super(simulare, x, y);
		// modificare culoare nor (trebuie modificata si mai jos in update)
		this.color = `rgba(255, 139, 74, ${this.opacity})`;
	}

	update(context) {
		this.draw(context);
		// modificare dimensiunea la care norul isi incetineste cresterea
		if (this.size > 100) {
			if (this.timer < this.interval) this.timer++;
			// modificare viteza cu care creste dupa acest punct
			else this.size *= 1.1;
		}
		// modificare viteza cu care creste norul de la inceput
		else this.size *= 1.01;
		this.opacity -= this.opacityDecrease;
		this.color = `rgba(255, 139, 74, ${this.opacity})`;
		if (this.size > 100 || this.opacity === 0) this.markedForDeletion = true;
	}
}
export class Cloud5 extends Cloud {
	constructor(simulare, x, y) {
		super(simulare, x, y);
		// modificare culoare nor (trebuie modificata si mai jos in update)
		this.color = `rgba(144, 144, 144, ${this.opacity})`;
	}

	update(context) {
		this.draw(context);
		// modificare dimensiunea la care norul isi incetineste cresterea
		if (this.size > 100) {
			if (this.timer < this.interval) this.timer++;
			// modificare viteza cu care creste dupa acest punct
			else this.size *= 1.1;
		}
		// modificare viteza cu care creste norul de la inceput
		else this.size *= 1.01;
		this.opacity -= this.opacityDecrease;
		this.color = `rgba(144, 144, 144, ${this.opacity})`;
		if (this.size > 100 || this.opacity === 0) this.markedForDeletion = true;
	}
}
