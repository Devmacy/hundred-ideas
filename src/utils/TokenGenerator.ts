/**
 * 生成随机字符串的函数
 * @param {number} length - 生成字符串的长度，默认为1
 * @param {boolean} needNumber - 是否需要包含数字，默认为true
 * @param {boolean} needUpper - 是否需要包含大写字母，默认为true
 * @param {boolean} needLower - 是否需要包含小写字母，默认为true
 * @param {boolean} needSymbol - 是否需要包含符号，默认为true
 * @returns {string} 生成的随机字符串
 */
function tokenGenerator(
    length: number = 1,
    needNumber: boolean = true,
    needUpper: boolean = true,
    needLower: boolean = true,
    needSymbol: boolean = true): string {
    if (length <= 0) return ''

    const result: string[] = []
    // 默认字符集
    const defaultChars: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    const chars: string[] = [
        ...(needLower ? 'abcdefghijklmnopqrstuvwxyz' : ''),
        ...(needUpper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''),
        ...(needNumber ? '0123456789' : ''),
        ...(needSymbol ? '!@#$%^&*()-_=+' : ''),
    ];
    // 随机化字符集的顺序
    const randomizedChars = chars.sort(() => Math.random() - 0.5).join('');

    // 如果没有选择任何字符集，使用默认字符集
    const effectiveChars = chars.length > 0 ? randomizedChars : defaultChars;

    const effectCharsLength = effectiveChars.length
    for (let i = 0; i < length; i++) {
        result.push(effectiveChars[Math.floor(Math.random() * effectCharsLength)])
    }
    return result.join('')
}

export default tokenGenerator
