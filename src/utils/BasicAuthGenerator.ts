/**
 * 生成 Basic Auth 头部字符串。
 *
 * @param {string} username - 用户名。
 * @param {string} password - 密码。
 * @returns {string} 包含 Basic Auth 头部的字符串。
 */
function basicAuthGenerator(username: string = "", password: string = ''): string {
    const baseStr = `${username}:${password}`;

    if (isASCII(baseStr)) {
        return `Authorization: Basic ${btoa(baseStr)}`;
    } else {
        return `Authorization: Basic ${bytesToBase64(new TextEncoder().encode(baseStr))}`;
    }
}

/**
 * 检查字符串是否包含 ASCII 字符。
 *
 * @param {string} str - 要检查的字符串。
 * @returns {boolean} 如果字符串包含 ASCII 字符，则为 true，否则为 false。
 */
function isASCII(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 127) {
            return false;
        }
    }
    return true;
}

/**
 * 将字节数组转换为 Base64 字符串。
 *
 * @param {Uint8Array} bytes - 要转换的字节数组。
 * @returns {string} 转换后的 Base64 字符串。
 */
function bytesToBase64(bytes: Uint8Array): string {
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
}

export {
    basicAuthGenerator,
    isASCII,
    bytesToBase64
};
