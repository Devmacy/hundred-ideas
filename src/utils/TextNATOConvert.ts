// 构建NATO字母表映射
const natoAlphabetMap = new Map([
    ['A', 'Alpha'],
    ['B', 'Bravo'],
    ['C', 'Charlie'],
    ['D', 'Delta'],
    ['E', 'Echo'],
    ['F', 'Foxtrot'],
    ['G', 'Golf'],
    ['H', 'Hotel'],
    ['I', 'India'],
    ['J', 'Juliet'],
    ['K', 'Kilo'],
    ['L', 'Lima'],
    ['M', 'Mike'],
    ['N', 'November'],
    ['O', 'Oscar'],
    ['P', 'Papa'],
    ['Q', 'Quebec'],
    ['R', 'Romeo'],
    ['S', 'Sierra'],
    ['T', 'Tango'],
    ['U', 'Uniform'],
    ['V', 'Victor'],
    ['W', 'Whiskey'],
    ['X', 'X-ray'],
    ['Y', 'Yankee'],
    ['Z', 'Zulu'],
]);

// 反转映射，从 NATO 单词到字母
const natoToLetterMap = new Map([...natoAlphabetMap.entries()].map(([letter, natoWord]) => [natoWord, letter]));

/**
 * 将普通文本转换为NATO字母表的表达形式。
 *
 * @param {string} [text=""] - 输入的普通文本。
 * @returns {string} 转换后的NATO字母表形式的字符串。
 */
function textToNATO(text: string = ""): string {
    if (!text) return ""

    const result: string[] = [];
    text = text.toUpperCase()

    for (const item of text) {
        // 如果字符在字母表中，则使用NATO字母表中的对应单词，否则保留原始字符
        const nato = natoAlphabetMap.get(item) || item
        result.push(nato);
    }
    return result.join(" ")
}

/**
 * 将NATO字母表形式的字符串转换为普通文本。
 *
 * @param {string} [natoString=""] - 输入的NATO字母表形式的字符串。
 * @returns {string} 转换后的普通文本。
 */
function natoToText(natoString: string = ""): string {
    if (!natoString) return ""

    const result: string[] = [];
    const natoList = natoString.split(" ")
    for (const item of natoList) {
        // 如果NATO单词在反转映射中，则使用对应的字母，否则保留原始NATO单词
        const letter = natoToLetterMap.get(item) || item
        result.push(letter)
    }
    return result.join("")
}

export {
    textToNATO,
    natoToText
}
