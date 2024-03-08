import {NIL as uuidNIL, v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5, validate as uuidValidate} from 'uuid';

/**
 * 生成一定数量的v1 UUID
 * @param {number} num - 需要生成的UUID的数量
 * @returns {string[]} 生成的UUID列表
 */
function generateV1(num: number = 1): string[] {
    const list: string[] = [];
    for (let i = 0; i < num; i++) {
        list.push(uuidv1());
    }
    return list;
}

/**
 * 生成一定数量的v3 UUID
 * @param {string} namespace 命名空间
 * @param {string} name 名称字符串
 * @param {number} num - 需要生成的UUID的数量
 * @returns {string[]} 生成的UUID列表
 */
function generateV3(num: number = 1, name: string = "", namespace: string = uuidv3.DNS): string[] {
    const list: string[] = []

    if (uuidValidate(namespace)) {
        return list
    }

    for (let i = 0; i < num; i++) {
        // 需要一个命名空间和一个名字来生成v3 UUID
        list.push(uuidv3(name, namespace));
    }
    return list;
}

/**
 * 生成一定数量的v4 UUID
 * @param {number} num - 需要生成的UUID的数量
 * @returns {string[]} 生成的UUID列表
 */
function generateV4(num: number = 1): string[] {
    const list: string[] = []
    for (let i = 0; i < num; i++) {
        list.push(uuidv4())
    }
    return list;
}

/**
 * 生成一定数量的v5 UUID
 * @param {number} num - 需要生成的UUID的数量
 * @param {string} namespace 命名空间
 * @param {string} name 名称字符串
 * @returns {string[]} 生成的UUID列表
 */
function generateV5(num: number = 1, name: string = "", namespace: string = uuidv5.DNS): string[] {
    const list: string[] = []

    if (uuidValidate(namespace)) {
        return list
    }

    for (let i = 0; i < num; i++) {
        list.push(uuidv5(name, uuidv5.DNS));
    }
    return list;
}

/**
 * 生成一定数量的NIL UUID
 * @param {number} num - 需要生成的UUID的数量
 * @returns {string[]} 生成的UUID列表
 */
function generateNIL(num: number = 1): string[] {
    const list: string[] = []
    for (let i = 0; i < num; i++) {
        list.push(uuidNIL);
    }
    return list;
}

export {
    generateV1,
    generateV3,
    generateV4,
    generateV5,
    generateNIL,
}
