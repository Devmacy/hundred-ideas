/**
 * 移除 JSON 字符串中的空白字符，包括换行符、制表符和空格。
 *
 * @param {string} [jsonString=""] - 要压缩的 JSON 字符串。
 * @returns {string} 压缩后的 JSON 字符串。
 */
function JSONMinify(jsonString: string = ""): string {
    if (!jsonString) return ""

    // 移除 JSON 字符串中的空白字符（包括换行符、制表符和空格）
    return jsonString.replace(/\s/g, '');
}

export {
    JSONMinify
}
