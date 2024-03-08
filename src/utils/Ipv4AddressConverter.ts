interface IPV4Convert {
    decimal: number;
    hexadecimal: string;
    binary: string;
    ipv6: string;
    ipv6Short: string;
}

/**
 * 将IPv4地址转换为其十进制、十六进制、二进制以及IPv6表示。
 *
 * @param {string} address - 要转换的IPv4地址，默认为 "192.168.1.1"。
 * @returns {IPV4Convert} 包含转换结果的对象。
 */
function ipv4AddressConverter(address: string = "192.168.1.1"): IPV4Convert {
    let decimal: number = 0;
    let hexadecimal: string = "";
    let binary: string = "";
    let ipv6: string = "";
    let ipv6Short: string = "";

    if (!isValidIpv4Address(address)) {
        return {
            decimal,
            hexadecimal,
            binary,
            ipv6,
            ipv6Short,
        }
    }

    const list = address.split(".");
    for (const [index, item] of list.entries()) {
        decimal = decimal + parseInt(item, 10) * Math.pow(256, 3 - index);
        binary = binary + parseInt(item, 10).toString(2).padStart(8, "0");
        hexadecimal = hexadecimal + parseInt(item, 10).toString(16).toUpperCase().padStart(2, "0");
    }
    const splitString = hexadecimal.match(/.{1,4}/g)?.join(":") || "0000:0000"
    ipv6 = `0000:0000:0000:0000:0000:FFFF:${splitString}`
    ipv6Short = `::FFFF:${splitString}`
    hexadecimal = `0x${hexadecimal}`

    return {
        decimal,
        hexadecimal,
        binary,
        ipv6,
        ipv6Short,
    };
}

/**
 * 检查是否为有效的IPv4地址。
 *
 * @param {string} address - 要验证的IPv4地址。
 * @returns {boolean} 如果是有效的IPv4地址，则为true；否则为false。
 */
function isValidIpv4Address(address: string): boolean {
    const reg = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/;
    return reg.test(address);
}

export {
    ipv4AddressConverter,
    isValidIpv4Address
};
