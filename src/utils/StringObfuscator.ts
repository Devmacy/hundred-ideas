/**
 * 对字符串进行混淆，保留部分字符。
 * @param {string} str - 要混淆的字符串。
 * @param {number} [keepFirst=0] - 保留开头的字符数。
 * @param {number} [keepLast=0] - 保留结尾的字符数。
 * @param {boolean} [keepSpace=true] - 是否保留空格。
 * @returns {string} 混淆后的字符串。
 */
function stringObfuscator(str: string, keepFirst: number = 0, keepLast: number = 0, keepSpace: boolean = true): string {
    if (keepFirst < 0 || keepLast < 0 || !Number.isInteger(keepFirst) || !Number.isInteger(keepLast)) {
        return ""
    }

    const strList = str.split("")
    const strLeft = strList.slice(0, keepFirst).join("")
    const strMiddle = strList.slice(keepFirst, str.length - keepLast).join("")
    const strRight = strList.slice(strLeft.length + strMiddle.length, str.length).join("")

    let result: string
    if (keepSpace) {
        result = `${strLeft}${strMiddle
            .replace(/\S/g, "*")}${strRight}`
    } else {
        result = `${strLeft}${strMiddle.replace(/./g, '*')}${strRight}`
    }
    return result.replace(/\s+/g, ' ');
}

export {
    stringObfuscator
}
