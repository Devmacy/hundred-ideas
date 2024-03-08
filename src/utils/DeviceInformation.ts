interface DeviceInformation {
    screen: Screen;
    pixelRatio: number;
    userAgent: string;
    language: string;
}

/**
 * 获取设备信息
 *
 * @returns {DeviceInformation} 设备信息
 */
function deviceInformation(): DeviceInformation {
    return {
        screen: window.screen,
        pixelRatio: window.devicePixelRatio || 1, // 默认值为 1
        userAgent: window.navigator.userAgent || "",
        language: window.navigator.language || ""
    };
}

export {
    deviceInformation
}
