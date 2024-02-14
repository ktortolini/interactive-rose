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
				random((controlPoints[i][0]) - (0.50 + randomDeviation), (controlPoints[i][0]) + (0.50 + randomDeviation));
			const cPoint1Y = vertY +
				random((controlPoints[i][1]) - (1.00 + randomDeviation), (controlPoints[i][1]) + (1.00 + randomDeviation));
			const cPoint2X = vertX +
				random((controlPoints[i][2]) - (2.50 + randomDeviation), (controlPoints[i][2]) + (2.50 + randomDeviation));
			const cPoint2Y = vertY +
				random((controlPoints[i][3]) - (2.50 + randomDeviation), (controlPoints[i][3]) + (2.50 + randomDeviation));
			const endPointX = vertX +
				random((controlPoints[i][4]) - (1.00 + randomDeviation), (controlPoints[i][4]) + (1.00 + randomDeviation));
			const endPointY = vertY +
				random((controlPoints[i][5]) - (0.50 + randomDeviation), (controlPoints[i][5]) + (0.50 + randomDeviation));

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
	randomDeviation = random(randomDeviation + 0.007, randomDeviation + 0.014);
	color = random((color + 0.1), (color + 0.5));
	redraw();
}

/**
 * @function stem
 *
 * The following function is used to draw the stem.
 */

function stem() {
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

	const startingX = 271.5459;
	const startingY = 898.8915;

	/**
	 * This application uses p5.js and p5 vertex() method,
	 * see: {@link https://p5js.org/reference/#/p5/vertex}
	 */

	vertex(random(startingX - 12.7101, startingX + 14.3483), random(startingY - 14.9217, startingY + 12.4502));

	/**/

	let stem = new CustomShape(startingX, startingY);
	stem = stem.CustomBezierShape(
		startingX,
		startingY,
		[
			[-5.2153, 8.3487, -14.5928, 17.1786, -25.1635, 14.5597],
			[-8.9269, -2.3363, -12.9872, -11.1798, -11.6771, -19.857],
			[3.9501, -26.1614, 19.6352, -50.0156, 27.7097, -75.0979],
			[15.0135, -46.637, 21.4032, -95.4902, 25.0498, -144.1903],
			[3.6756, -49.0874, 7.6441, -98.8359, 7.6945, -148.1483],
			[0.012, -11.7078, -0.277, -23.4181, -0.9705, -35.106],
			[-0.6395, -10.7789, -3.8137, -23.1646, -1.0636, -33.7326],
			[2.039, -7.8354, 10.5819, -17.031, 19.3748, -16.043],
			[11.9354, 1.3411, 13.0325, 17.2375, 13.4907, 26.4142],
			[6.4916, 122.565, -6.18, 247.5539, -34.9945, 366.7625],
			[-5.0294, 21.0856, -7.3329, 45.7234, -19.4504, 64.4387],
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

function leaf() {
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

	const startingX = 286.4163;
	const startingY = 443.8655;

	/**/

	vertex(random(startingX - 13.4255, startingX + 15.7588), random(startingY - 12.3115, startingY + 17.3473));

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

function pedal() {
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

	const startingX = 226.8094;
	const startingY = 60.6707;

	/**/

	vertex(random(startingX - 14.2325, startingX + 9.3754), random(startingY - 11.9348, startingY + 13.2660));

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

function heart() {
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

	const startingX = 285.3557;
	const startingY = 394.0055;

	/**/

	vertex(random(startingX - 13.1295, startingX + 14.2444), random(startingY - 9.1246, startingY + 13.7397));

	/**/

	let heart = new CustomShape(startingX, startingY);
	heart = heart.CustomBezierShape(
		startingX,
		startingY,
		[
			[-0.1623, 0.1623, -0.2853, 0.1623, -0.3623, 0.2853],
			[-21.8397, -42.6015, -42.5533, -86.6123, -70.1910, -125.4342],
			[-3.9325, -5.4162, -7.9085, -10.7174, -12.123, -15.9101],
			[-5.473, -6.2243, -10.2306, -12.1793, -15.8397, -17.7174],
			[-4.4364, -4.5416, -9.0042, -8.8306, -12.7123, -13.8397],
			[-11.3225, -15.3225, -8.7908, -33.8306, 6.8910, -45.2101],
			[12.7306, -9.4174, 30.3204, -13.7908, 45.9118, -14.1623],
			[9.5675, -0.3235, 22.1277, -0.2126, 30.5317, 4.9621],
			[2.2864, 1.4976, 3.8947, 3.6742, 6.1653, 4.8352],
			[2.7634, 1.4635, 2.6425, 0.5947, 4.4817, -2.1263],
			[15.9973, -23.5623, 44.6128, -33.5837, 72.0025, -29.5234],
			[11.1648, 1.6943, 24.3854, 5.9854, 30.2057, 16.3234],
			[6.5837, 11.6236, 3.4873, 26.3352, -1.9335, 37.7234],
			[-9.4874, 20.2234, -23.4563, 38.2107, -33.4402, 58.0432],
			[-10.8345, 20.4234, -19.2734, 41.9001, -26.1012, 63.9002],
			[-6.1023, 19.4734, -10.9734, 39.2634, -15.2745, 59.1055],
			[-1.3324, 6.2024, -2.7234, 14.9125, -8.3333, 18.8832],
		],
	);

	/**/

	endShape();
}

/**
 * @function check
 * 
 * The following function is used to check and update the custom shape.
 */

function check() {
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

	/**/

	check();

	/**/

	stem();

	/**/

	leaf();

	/**/

	pedal();

	/**/

	heart();

	/**/

	drawCount++;
}
