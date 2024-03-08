/**
 * 生成 RSA 密钥对
 * @param {string} name - 算法名称，默认为 "RSA-OAEP"
 * @param {number} modulusLength - RSA 密钥的模数长度，默认为 2048 位
 * @param {Uint8Array} publicExponent - 公钥指数，默认为 [0x01, 0x00, 0x01]
 * @param {string} hashName - 使用 SHA-256 哈希算法
 * @returns {Promise<{ privateKey: ArrayBuffer, publicKey: ArrayBuffer }>} - 包含导出的私钥和公钥的 Promise 对象
 */
async function generateRSAKeyPair(
    name: string = "RSA-OAEP",
    modulusLength: number = 2048,
    publicExponent: Uint8Array = new Uint8Array([0x01, 0x00, 0x01]),
    hashName: string = "SHA-256"
): Promise<{ privateKey: ArrayBuffer, publicKey: ArrayBuffer }> {
    try {
        // 使用 Web Crypto API 生成 RSA 密钥对
        const keyPair = await window.crypto.subtle.generateKey(
            {
                name,
                modulusLength,
                publicExponent,
                hash: {name: hashName}
            },
            true,
            ['encrypt', 'decrypt']
        );

        // 导出公钥和私钥
        const publicKey = await window.crypto.subtle.exportKey('spki', keyPair.publicKey);
        const privateKey = await window.crypto.subtle.exportKey('pkcs8', keyPair.privateKey);

        // 返回包含导出的私钥和公钥的对象
        return {privateKey, publicKey};
    } catch (error) {
        // 捕获并记录错误
        console.error('Error generating RSA key pair:', error);
        // 抛出错误以供外部处理
        throw error;
    }
}

// 导出函数以供其他模块使用
export {
    generateRSAKeyPair
}
