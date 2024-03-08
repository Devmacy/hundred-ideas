/**
 * 计算元素时间加权平均值。
 *
 * @param {number} [element=500] - 元素值。
 * @param {number} [unit=5] - 单位值。
 * @param {number} [time=3] - 时间值。
 * @returns {number} 元素时间加权平均值。
 */
function eTACalculator(element: number = 500, unit: number = 5, time: number = 180000): number {
    return element * time / unit;
}

/**
 * 获取结束时间。
 *
 * @param {number} durationTime - 持续时间（毫秒）。
 * @param {number} [startTime=Date.now()] - 开始时间（毫秒），默认为当前时间。
 * @returns {Date} 结束时间的 Date 对象。
 */
function getEndTime(durationTime: number, startTime: number = Date.now()): Date {
    const start = new Date(startTime).getTime()
    return new Date(start + durationTime)
}

export {
    eTACalculator,
    getEndTime
}
