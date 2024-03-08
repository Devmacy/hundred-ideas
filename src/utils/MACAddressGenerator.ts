/**
 * 生成指定数量的 MAC 地址。
 *
 * @param {number} [quantity=1] - 要生成的 MAC 地址数量。
 * @param {string} [prefix="64:16:7F"] - MAC 地址的前缀。
 * @param {boolean} [upperCase=true] - 是否将生成的 MAC 地址转换为大写。
 * @param {string} [separator=":"] - 分隔符。
 * @returns {string[]} 生成的 MAC 地址数组。
 */
function macAddressGenerator(quantity: number = 1, prefix: string = "64:16:7F", upperCase: boolean = true, separator: string = ":"): string[] {
    const result: string[] = []
    const prefixList = prefix.match(/[0-9A-Fa-f]+/g) || []


    for (let i = 0; i < quantity; i++) {
        let address = ``
        for (let j = 0; j < 6; j++) {
            if (j < prefixList.length) {
                address += `${prefixList[j].length == 1 ? `0${prefixList[j]}` : prefixList[j]}`
            } else {
                address += `${generateRandomHex()}`
            }
        }
        result.push(upperCase ? address.toUpperCase() : address.toLowerCase())
    }

    return result.map((item: string) => {
        const list = item.match(/(\w{2})/g) || []
        return list.join(separator)
    })
}

/**
 * 生成随机的两位十六进制数。
 * @returns {string} 生成的十六进制数。
 */
function generateRandomHex(): string {
    const randomHex = Math.floor(Math.random() * 256).toString(16);
    // 如果生成的值是单个字符，前面补充一个0
    return randomHex.length === 1 ? `0${randomHex}` : randomHex;
}

export {
    macAddressGenerator,
    generateRandomHex
}
