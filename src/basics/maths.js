/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
    if (typeof diameter !== 'number' || isNaN(diameter) || diameter < 0) {
        throw new Error('Unsupported type or negative diameter');
    }

    const radius = diameter / 2;
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error('Unsupported type');
    }

    return Math.round(n * 10) / 10;
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
    if (!Array.isArray(grades) || grades.some(value => typeof value !== 'number' || Number.isNaN(value))) {
        throw new Error('Unsupported type or invalid array');
    }

    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}


/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
    if (!Array.isArray(grades) || grades.some(isNaN)) {
        throw new Error('Unsupported type or invalid array');
    }
    const average = computeAverage(grades);
    return roundNumberToOneDecimals(average);
}
