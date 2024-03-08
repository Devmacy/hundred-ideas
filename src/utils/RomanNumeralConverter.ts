// 定义<数字,罗马数字>map
const romanMap = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
]);

/**
 * 罗马数字到数字
 * @param roman 罗马数字
 */
function romanToNumber(roman: string): number {
    if (!isValidRomanNumeral(roman)) {
        return -1
    }

    let sum = 0
    const romanList = roman.split("").map((item) => {
        return romanMap.get(item)
    }) as number[]

    for (let i = 0; (i + 1) < romanList.length; i++) {
        if (romanList[i] >= romanList[i + 1]) {
            sum = sum + romanList[i]
        } else {
            sum = sum - romanList[i]
        }
    }
    sum = sum + romanList[romanList.length - 1]
    return sum
}

/**
 * 数字到罗马数字
 * @param number 数字
 */
function numberToRoman(number: number): string {
    if (number < 1 || number > 3999) {
        return ""
    }
    let str = '';

    for (const [key, value] of romanMap) {
        const q = Math.floor(number / value);
        number = number - (q * value);
        str += key.repeat(q);
    }

    return str;
}

/**
 * 判断罗马数字是否合理
 * @param roman 罗马数字
 * @returns {boolean} 如果合理，返回 true；否则返回 false。
 */
function isValidRomanNumeral(roman: string): boolean {
    if (!roman) return false;

    // 检查是否符合基本规则
    const basicPattern = /^M*(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!basicPattern.test(roman)) return false;

    // 所有条件满足，返回 true
    return true;
}

export {
    romanToNumber,
    numberToRoman,
    isValidRomanNumeral
}
