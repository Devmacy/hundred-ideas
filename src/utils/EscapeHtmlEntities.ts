/**
 * 转换html文本到编码后的字符串
 *
 * @param {string} [str = ""] - 待转换的字符串
 * @returns {string} 转换的字符串
 */
function escapeHtmlEntities(str: string = ""): string {
    return str
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
}

/**
 * 转换编码后的字符串到html文本
 *
 * @param {string} [str = ""] - 待转换的字符串
 * @returns {string} 转换的字符串
 */
function unEscapeHtmlEntities(str: string = ""): string {
    return str
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
}

export {
    escapeHtmlEntities,
    unEscapeHtmlEntities
}
