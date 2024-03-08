/**
 * 计算给定百分比对应的数量。
 *
 * @param {number} [percentage=1] - 百分比值，应在 0 到 100 之间。
 * @param {number} [count=100] - 初始数量。
 * @returns {number} 给定百分比对应的数量。
 */
function getCount(percentage: number = 1, count: number = 100): number {
    // 确保百分比在有效范围内
    const validPercentage = Math.min(100, Math.max(0, percentage));
    // 确保 count 是有效的数字
    if (isNaN(count)) return 0

    return count * (validPercentage / 100)
}

/**
 * 计算两个数字的百分比。
 *
 * @param {number} [numerator=1] - 分子。
 * @param {number} [denominator=100] - 分母，不能为零。
 * @returns {number} 两个数字的百分比。
 */
function getPercentage(numerator: number = 1, denominator: number = 100): number {
    if (!denominator) return 0

    if (isNaN(numerator) || isNaN(denominator)) return 0

    return numerator / denominator * 100
}

/**
 * 计算从第一个数到第二个数的增长百分比。
 *
 * @param {number} [first=2] - 第一个数。
 * @param {number} [second=1] - 第二个数。
 * @returns {number} 增长百分比。
 */
function getIncrease(first: number = 2, second: number = 1): number {
    if (!first || !second) return 0

    return (second - first) / first * 100
}

export {
    getCount,
    getPercentage,
    getIncrease
}
