export const omit = function (obj, keys) {
	
	return Object.entries(obj)
		.filter(([key]) => !keys.includes(key))
		.reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
}

export const pick = function(obj, keys) {
	
	return Object.entries(obj)
		.filter(([key]) => keys.includes(key))
		.reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
}
