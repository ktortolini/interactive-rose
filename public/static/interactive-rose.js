/**
 * @author ktortolini
 *
 * @name ~MyValentineRose~
 * @date on 02/06/2024
 */

/**
 * This value will change the color of the shape.
 * See below for the function {@link mouseMoved}
 */

let color = 0;

/**
 * This value will keep track of the number of draws.
 * See below for the function {@link mouseMoved}
 */

let drawCount = 0;

/**
 * This value will keep track of the random deviation.
 * See below for the function {@link mouseMoved}
 */

let randomDeviation = 4.3773;

// deno-lint-ignore no-unused-vars
function setup() {
	/**
	 * This application uses p5.js and p5 createCanvas() method,
	 * see: {@link https://p5js.org/reference/#/p5/createCanvas}
	 */

	const canvas = createCanvas(531, 944);

	/**/

	canvas.parent('interactive-rose');

	/**
	 * This application uses p5.js and p5 smooth() method,
	 * see: {@link https://p5js.org/reference/#/p5/smooth}
	 */

	smooth(3);

	/**
	 * This application uses p5.js and p5 frameRate() method,
	 * see: {@link https://p5js.org/reference/#/p5/frameRate}
	 */

	frameRate(0);
}

class CustomShape {
	constructor(paramX, paramY) {
		this.customX = paramX;
		this.customY = paramY;
	}

	CustomBezierShape(vertX, vertY, controlPoints) {
		for (let i = 0; i < controlPoints.length; i++) {
			const cPoint1X = vertX +
				random(
					(controlPoints[i][0]) - (0.50 + randomDeviation),
					(controlPoints[i][0]) + (0.50 + randomDeviation),
				);
			const cPoint1Y = vertY +
				random(
					(controlPoints[i][1]) - (1.00 + randomDeviation),
					(controlPoints[i][1]) + (1.00 + randomDeviation),
				);
			const cPoint2X = vertX +
				random(
					(controlPoints[i][2]) - (2.50 + randomDeviation),
					(controlPoints[i][2]) + (2.50 + randomDeviation),
				);
			const cPoint2Y = vertY +
				random(
					(controlPoints[i][3]) - (2.50 + randomDeviation),
					(controlPoints[i][3]) + (2.50 + randomDeviation),
				);
			const endPointX = vertX +
				random(
					(controlPoints[i][4]) - (1.00 + randomDeviation),
					(controlPoints[i][4]) + (1.00 + randomDeviation),
				);
			const endPointY = vertY +
				random(
					(controlPoints[i][5]) - (0.50 + randomDeviation),
					(controlPoints[i][5]) + (0.50 + randomDeviation),
				);

			/**/

			bezierVertex(
				cPoint1X,
				cPoint1Y,
				cPoint2X,
				cPoint2Y,
				endPointX,
				endPointY,
			);

			/**/

			vertX = endPointX;
			vertY = endPointY;
		}
		return new CustomShape(vertX, vertY);
	}
}

/**
 * @function mouseMoved()
 * {@link https://p5js.org/reference/#/p5/mouseMoved}
 */

// deno-lint-ignore no-unused-vars
function mouseMoved() {
	/**
	 * This application uses p5.js and p5 random() method,
	 * see: {@link https://p5js.org/reference/#/p5/random}
	 */

	randomDeviation = random(randomDeviation + 0.007, randomDeviation + 0.014);

	/**
	 * The variable below slightly changes the color of
	 * the shape when the mouse is moved.
	 */

	color = random(color + 0.1, color + 0.5);

	/**
	 * This application uses p5.js and p5 redraw() method,
	 * see: {@link https://p5js.org/reference/#/p5/redraw}
	 */

	redraw();
}

/* Start of Class */

class Rose {
	constructor() {
		/**/
	}

	/**
	 * @function stem
	 *
	 * The following function is used to draw the stem.
	 */

	stem() {
		/**
		 * This application uses p5.js and p5 noStroke() method,
		 * see: {@link https://p5js.org/reference/#/p5/noStroke}
		 */

		noStroke();

		/**
		 * This application uses p5.js and p5 fill() method,
		 * see: {@link https://p5js.org/reference/#/p5/fill}
		 */

		fill(random(91, 110), random(196, 212), random(91, 110), color);

		/**/

		beginShape();

		/**/

		const startingX = 271.5459 + randomDeviation;
		const startingY = 898.8915 + randomDeviation;

		/**
		 * This application uses p5.js and p5 vertex() method,
		 * see: {@link https://p5js.org/reference/#/p5/vertex}
		 */

		vertex(
			random(startingX - 12.7101, startingX + 14.3483),
			random(startingY - 14.9217, startingY + 12.4502),
		);

		/**/

		let stem = new CustomShape(startingX, startingY);
		stem = stem.CustomBezierShape(
			startingX,
			startingY,
			[
				[-8.3345, 19.3039, -40.3255, 20.3544, -36.9006, -5.3032],
				[4.0006, -26.1968, 19.6006, -49.9968, 27.7006, -75.0968],
				[33.2387, -116.5274, 33.0627, -241.1774, 30.6026, -361.0996],
				[81.3791, -90.8256, 6.4697, 411.1166, -21.4026, 441.4996],
			],
		);

		/**/

		endShape();
	}

	/**
	 * @function leaf
	 *
	 * The following function is used to draw the leaf.
	 */

	leaf() {
		/**
		 * This application uses p5.js and p5 noStroke() method,
		 * see: {@link https://p5js.org/reference/#/p5/noStroke}
		 */

		noStroke();

		/**
		 * This application uses p5.js and p5 fill() method,
		 * see: {@link https://p5js.org/reference/#/p5/fill}
		 */

		fill(random(196, 212), random(196, 212), random(145, 161), color);

		/**/

		beginShape();

		/**/

		const startingX = 286.4163 + randomDeviation;
		const startingY = 443.8655 + randomDeviation;

		/**/

		vertex(
			random(startingX - 13.4255, startingX + 15.7588),
			random(startingY - 12.3115, startingY + 17.3473),
		);

		/**/

		let leaf = new CustomShape(startingX, startingY);
		leaf = leaf.CustomBezierShape(
			startingX,
			startingY,
			[
				[-55.2487, -3.9407, -104.032, 80.4779, -17.9948, 54.9472],
				[71.676, -67.7159, 47.0587, -12.0599, 126.0694, -22.2062],
				[34.9724, -2.1158, 14.434, -37.1722, -8.5439, -40.8141],
				[-33.4504, -6.3534, -65.7477, 11.3929, -99.5307, 8.0731],
			],
		);

		/**/

		endShape();
	}

	/**
	 * @function pedal
	 *
	 * The following function is used to draw the pedal.
	 */

	pedal() {
		/**
		 * This application uses p5.js and p5 noStroke() method,
		 * see: {@link https://p5js.org/reference/#/p5/noStroke}
		 */

		noStroke();

		/**
		 * This application uses p5.js and p5 fill() method,
		 * see: {@link https://p5js.org/reference/#/p5/fill}
		 */

		fill(random(196, 212), random(91, 110), random(91, 110), color);

		/**/

		beginShape();

		/**/

		const startingX = 226.8094 + randomDeviation;
		const startingY = 60.6707 + randomDeviation;

		/**/

		vertex(
			random(startingX - 14.2325, startingX + 9.3754),
			random(startingY - 11.9348, startingY + 13.2660),
		);

		/**/

		let pedal = new CustomShape(startingX, startingY);
		pedal = pedal.CustomBezierShape(
			startingX,
			startingY,
			[
				[-18.9232, 6.1307, -31.2077, 20.5915, -46.329, 34.7545],
				[-28.8397, 30.4375, -81.3475, 12.953, -109.0683, 43.057],
				[-14.8322, 47.5185, 49.7508, 84.2433, 64.3415, 126.8874],
				[22.4906, 55.17, 42.7002, 117.2309, 100.2469, 145.5717],
				[153.6391, 82.8454, 134.1572, -150.0104, 194.2453, -228.5806],
				[41.6976, -74.288, -69.7475, -82.5763, -114.6553, -105.7221],
				[-26.9665, -12.541, -58.9179, -25.1607, -88.7811, -15.9679],
			],
		);

		/**/

		endShape();
	}

	/**
	 * @function heart
	 *
	 * The following function is used to draw the heart.
	 */

	heart() {
		/**
		 * This application uses p5.js and p5 noStroke() method,
		 * see: {@link https://p5js.org/reference/#/p5/noStroke}
		 */

		noStroke();

		/**
		 * This application uses p5.js and p5 fill() method,
		 * see: {@link https://p5js.org/reference/#/p5/fill}
		 */

		fill(random(193, 215), random(91, 110), random(91, 110), color);

		/**/

		beginShape();

		/**/

		const startingX = 286.2428 + randomDeviation;
		const startingY = 392.7408 + randomDeviation;

		/**/

		vertex(
			random(startingX - 13.1295, startingX + 14.2444),
			random(startingY - 9.1246, startingY + 13.7397),
		);

		/**/

		let heart = new CustomShape(startingX, startingY);
		heart = heart.CustomBezierShape(
			startingX,
			startingY,
			[
				[-21.5851, -32.1638, -34.9433, -70.8276, -58.3575, -102.6381],
				[-15.9451, -30.5293, -49.7786, -52.1803, -59.9208, -84.9515],
				[1.3608, -47.9829, 66.8073, -50.1872, 98.6752, -34.6206],
				[46.7777, -60.6267, 149.6143, -27.3447, 87.1662, 49.3004],
				[-35.5085, 51.0043, -46.6086, 118.4179, -67.5631, 172.9098],
			],
		);

		/**/

		endShape();
	}
}

/* End of Class */

/**
 * @function check
 *
 * The following function is used to check and update the custom shape.
 */

function check() {
	/**
	 * The {@link color} value is reset to 0 when
	 * the value accumulates above the value of 2.
	 */

	if (color > 2) {
		color = 0;
	}

	/**/

	if (drawCount > 255) {
		background(0, 0, 0, 0.3242 + (drawCount / 255));
	}

	/**/

	if (drawCount > 510) {
		noLoop();
		drawCount = 0;
	}

	/**/

	if (randomDeviation < 4.3773) {
		randomDeviation = 4.3773;
	} else if (randomDeviation > 8.3773) {
		randomDeviation -= 0.429;
	}
}

// deno-lint-ignore no-unused-vars
function draw() {
	/**/

	scale(0.75);

	/**
	 * This application uses p5.js and p5 noStroke() method,
	 * see: {@link https://p5js.org/reference/#/p5/noStroke}
	 */

	noStroke();

	/**
	 * This application uses p5.js and p5 background() method,
	 * see: {@link https://p5js.org/reference/#/p5/background}
	 */

	background(1, 1, 1, 0.1);

	const rose = new Rose();

	/**/

	check();

	/**/

	rose.stem();

	/**/

	rose.leaf();

	/**/

	rose.pedal();

	/**/

	rose.heart();

	/**/

	drawCount++;
}
