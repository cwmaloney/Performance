"use strict";

const interations = 1000000000n;

function add(a, b) {
  const aStr = a.toString();
  const bStr = b.toString();
  const temp = BigInt(aStr) + BigInt(bStr);
  return temp;
}

function doCalcultionUsingFunction() {
  let sum = 0n;
  for (let i = 0n; i < interations; i++) {
    sum += add(i, 5n);
  }
  return sum;
}

function doCalcultionWithoutUsingFunction() {
  let sum = 0n;
  for (let i = 0n; i < interations; i++) {
    const aStr = i.toString();
    const bStr = (i + 5n).toString();
    const temp = BigInt(aStr) + BigInt(bStr);
    sum += temp;
    }
  return sum;
}

function test(name, testFunction) {
  console.log(`\n${name}`);

  const startTime = process.hrtime();
  const result = testFunction();
  const endTime = process.hrtime();

  const startNs = BigInt(startTime[0]*1000000000) + BigInt(startTime[1]);
  const endNs = BigInt(endTime[0]*1000000000) + BigInt(endTime[1]);
  const elapsedTime = BigInt(endNs - startNs);
  const timePerCalculation = elapsedTime / interations;
  console.log(`result=${result}, time per calculation=${timePerCalculation}ns`);
}

test("test using function", doCalcultionUsingFunction);
test("test without function", doCalcultionWithoutUsingFunction);
