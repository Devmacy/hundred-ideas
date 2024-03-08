/**
 * 将字符串转换为 URL 友好的 Slug。
 * @param {string} str - 要转换的字符串。
 * @returns {string} 转换后的 Slug。
 */
function slugifyString(str: string = ""): string {
    /**
     * 转换为小写。
     * 移除非单词字符、空格和短横线。
     * 将空格替换为短横线。
     * 将多个连续的短横线替换为一个短横线。
     * @type {string}
     */
    return str
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-');
}

export {
    slugifyString
}
