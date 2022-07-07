export * from './storeRef';
export * from './types';

export const currencyParamType2: [number, string, boolean] = [2, '', true]
export function currency(val: string | number | undefined | null, digit = 2, unit = '', rmZero = false) {
	if (val === undefined || val === null) return val
	if (Number.isNaN(Number(val))) return val
	const v = RoundDown(val, digit)
	const temp = rmZero ? parseFloat(v.toFixed(digit)).toString() : v.toFixed(digit);
	const result = temp.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	return isNaN(v) ? val : (result + unit)
}

function RoundDown(val: string | number, digit = 2) {
	const v = parseFloat(val.toString())
	const c = Math.pow(10, digit)
	let tmp = v * c
	tmp = parseInt(tmp.toFixed(0))
	return isNaN(v) ? v : tmp / c
}

export function compare(a: string, b: string) {
	return toNum(a) > toNum(b) ? -1 : (toNum(a) < toNum(b) ? 1 : 0);
}

export function toNum(val?: string) { return +(val ?? '0').replace(/[^\d]/g, ''); }

/**
 * 深層拷貝
 * @param {Object|Array} value
 * @returns {Object|Array}
 */
export const deepCopy = (value: any) => {
	return JSON.parse(JSON.stringify(value));
};

/**
 * 文字超出長度用省略號
 * @param {string} text
 * @param {number} max
 * @returns {string}
 */
export function textMore(text: string, max: number) {
	return text.length < max ? text : `${text.substring(0, max)}...`;
}

// 圓周長算法
export function circumference(radius: number) {
	return radius * 2 * 3.14
}

export function arrayToMap<T extends { [K2 in K]: number }, K extends string = 'id'>(arr: T[], key = 'id' as K) {
	return arr.reduce((obj, item) => {
		obj[item[key]] = item;
		return obj;
	}, {} as Record<number, T>);
}
