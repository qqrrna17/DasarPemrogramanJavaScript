import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum adds two positive numbers correctly', () => {
    const result = sum(2, 3);
    assert.strictEqual(result, 5);
});

test('sum adds two negative numbers correctly', () => {
    const result = sum(-5, -10);
    assert.strictEqual(result, -15);
});

test('sum adds positive and negative numbers correctly', () => {
    const result = sum(10, -3);
    assert.strictEqual(result, 7);
});

test('sum adds zero to a number correctly', () => {
    const result = sum(0, 5);
    assert.strictEqual(result, 5);
});

test('sum adds two zeros correctly', () => {
    const result = sum(0, 0);
    assert.strictEqual(result, 0);
});