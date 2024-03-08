/**
 * 将字符串转换为 base64 编码
 *
 * @param {string} str - 要转换的输入字符串。
 * @returns {string} base64 编码的字符串。
 */
function stringToBase64(str: string): string {
    return btoa(String.fromCodePoint(...new TextEncoder().encode(str)))
}

/**
 * 将 base64 编码的字符串转换为原始字符串
 *
 * @param {string} str - 要解码的 base64 编码的输入字符串。
 * @returns {string} 解码后的字符串。
 */
function base64ToString(str: string): string {
    if (!isValidBase64(str)) return ""
    const uint8Array = new Uint8Array(Array.from(atob(str), (char) => char.charCodeAt(0)));
    return new TextDecoder().decode(uint8Array);
}

/**
 * 判断字符串是否是有效的 base64 格式。
 *
 * @param {string} str - 要检查的字符串。
 * @returns {boolean} 如果是有效的 base64 格式返回 true，否则返回 false。
 */
function isValidBase64(str: string): boolean {
    // 有效的 base64 字符集，包括 URL 安全字符
    const base64Charset = /^[A-Za-z0-9+/=_-]+$/;

    // 检查字符串长度是否为 4 的倍数，并且只包含有效字符
    return str.length % 4 === 0 && base64Charset.test(str);
}


export {
    stringToBase64,
    base64ToString,
    isValidBase64
}
