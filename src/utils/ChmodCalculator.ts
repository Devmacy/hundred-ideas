/**
 * 权限配置对象。
 * @interface
 */
interface Chmod {
    read: boolean
    write: boolean
    execute: boolean
    value: number
}

/**
 * 获取 chmod 命令字符串。
 * @param {Chmod[]} [permissions=[]] - 包含权限配置对象的数组。
 * @returns {string} chmod 命令字符串。
 */
function getChmodCommand(permissions: Chmod[] = []): string {
    if (permissions.length !== 3) return ""

    for (let i = 0; i < permissions.length; i++) {
        permissions[i].read ? permissions[i].value += 4 : ""
        permissions[i].write ? permissions[i].value += 2 : ""
        permissions[i].execute ? permissions[i].value += 1 : ""
    }
    return `chmod ${permissions[0].value || 0}${permissions[1].value || 0}${permissions[2].value || 0} file`;
}

/**
 * 获取 chmod 权限字符串。
 * @param {Chmod[]} [permissions=[]] - 包含权限配置对象的数组。
 * @returns {string} chmod 权限字符串。
 */
function getPermissionString(permissions: Chmod[] = []): string {
    let result = ""
    for (let i = 0; i < permissions.length; i++) {
        result += (permissions[i].read ? "r" : "-") + ((permissions[i].write ? "w" : "-")) + ((permissions[i].execute ? "x" : "-"))
    }
    return result
}

export {
    getChmodCommand,
    getPermissionString
}
