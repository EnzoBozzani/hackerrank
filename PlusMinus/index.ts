'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
	inputString += inputStdin;
});

process.stdin.on('end', function (): void {
	inputLines = inputString.split('\n');
	inputString = '';

	main();
});

function readLine(): string {
	return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
	let negative = 0;
	let positive = 0;
	let zero = 0;

	arr.forEach((num) => {
		if (num > 0) {
			positive++;
		}
		if (num === 0) {
			zero++;
		}
		if (num < 0) {
			negative++;
		}
	});

	console.log(
		(positive / arr.length).toLocaleString('en-US', { maximumFractionDigits: 6, minimumFractionDigits: 6 })
	);
	console.log(
		(negative / arr.length).toLocaleString('en-US', { maximumFractionDigits: 6, minimumFractionDigits: 6 })
	);
	console.log((zero / arr.length).toLocaleString('en-US', { maximumFractionDigits: 6, minimumFractionDigits: 6 }));
}

function main() {
	const n: number = parseInt(readLine().trim(), 10);

	const arr: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((arrTemp) => parseInt(arrTemp, 10));

	plusMinus(arr);
}
