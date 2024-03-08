interface Case {
    lowerCase?: string
    uppercase?: string
    dotCase?: string
    camelCase?: string
    noCase?: string
    paramCase?: string
    pathCase?: string
    sentenceCase?: string
    snakeCase?: string
    capitalCase?: string
    pascalCase?: string
    constantCase?: string
    headerCase?: string
}

/**
 * 将字符串转换为不同的命名约定。
 *
 * @param {string} [str=""] - 要转换的字符串
 * @returns {Case} 包含不同命名约定的对象
 */
function caseConverter(str: string = ""): Case {
    const result = {} as Case

    if (!str) return result

    const removeSpecial = str.trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, " ")

    result.lowerCase = str.toLowerCase()
    result.uppercase = str.toUpperCase()
    result.dotCase = str.trim().replace(/[^a-zA-Z0-9]+/g, ".").toLowerCase()
    result.pathCase = str.trim().replace(/[^a-zA-Z0-9]+/g, "/").toLowerCase()
    result.snakeCase = str.trim().replace(/[^a-zA-Z0-9]+/g, "_").toLowerCase()
    result.paramCase = str.trim().replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()
    result.constantCase = removeSpecial.toUpperCase().replace(/\s/g, "_")
    result.sentenceCase = str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1)
    result.camelCase = removeSpecial.replace(/\s(.)/g, (_, char: string) => char.toUpperCase())
    result.pascalCase = removeSpecial.replace(/\b\w/g, match => match.toUpperCase()).replace(/\s/g, '');

    result.headerCase = str.trim().toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, " ")
        .replace(/\b\w/g, match => match.toUpperCase())

    const specialList = str.trim().match(/[^a-zA-Z0-9]+/g) || [];
    const wordList = str.split(/[^a-zA-Z0-9]+/g).map((item) =>
        item.toLowerCase().replace(/\b\w/g, match => match.toUpperCase())
    );
    result.capitalCase = specialList.reduce((acc: string[], specialChar, index) => {
        acc.push(wordList[index], specialChar);
        return acc;
    }, []).concat(wordList.slice(specialList.length)).join('');

    result.noCase = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, " ")
    return result
}

export {
    caseConverter
}
