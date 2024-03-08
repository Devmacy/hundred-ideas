/**
 * 表示具有额外参数的自定义 URL。
 * @interface
 */
interface CustomURL {
    url: URL;
    params: { key: string; value: string }[];
}

/**
 * 解析 URL 并提取参数。
 *
 * @param {string} [url=""] - 要解析的 URL。
 * @returns {CustomURL} 包含 URL 和提取参数的对象。
 */
function urlParser(url: string = ""): CustomURL {
    const urlObj: URL = new URL(url);

    const params: { key: string; value: string }[] = [];
    for (const [key, value] of urlObj.searchParams) {
        params.push({key, value});
    }

    return {
        url: urlObj,
        params
    };
}

export {urlParser};
