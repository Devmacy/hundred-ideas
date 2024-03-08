/**
 * 生成指定范围内的随机端口号。
 *
 * @param {number} [min=1024] - 端口范围的最小值，默认为 1024。
 * @param {number} [max=65535] - 端口范围的最大值，默认为 65535。
 * @returns {number} 生成的随机端口号。
 */
function getRandomPort(min: number = 1024, max: number = 65535): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export {
    getRandomPort
};
