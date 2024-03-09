import {MenuProps} from "antd";

const useMenuItem = () => {

    const keys: string[] = ["/itTools"]

    const items: MenuProps['items'] = [
        {
            key: "/",
            label: "主页",
        },
        {
            key: keys[0],
            label: "IT工具箱",
            children: [
                {
                    key: `${keys[0]}/UUIDGenerate`,
                    label: "批量生成uuid",
                },
                {
                    key: `${keys[0]}/TokenGenerate`,
                    label: "Token生成",
                },
                {
                    key: `${keys[0]}/URLParse`,
                    label: "URL解析",
                },
                {
                    key: `${keys[0]}/TextStatistics`,
                    label: "统计文本信息",
                },
                {
                    key: `${keys[0]}/TextToNato`,
                    label: "文本-NATO字母转换",
                },
                {
                    key: `${keys[0]}/StringObfuscation`,
                    label: "字符串混淆",
                },
                {
                    key: `${keys[0]}/UrlToSlug`,
                    label: "URL->Slug",
                },
                {
                    key: `${keys[0]}/RomanNumberConverter`,
                    label: "罗马数字转换",
                },
                {
                    key: `${keys[0]}/RandomNumberGenerator`,
                    label: "随机数生成",
                },
                {
                    key: `${keys[0]}/PercentageGenerator`,
                    label: "百分数生成",
                },
                {
                    key: `${keys[0]}/NumeronymsGenerator`,
                    label: "生成 Numeronym",
                },
                {
                    key: `${keys[0]}/MacAddressGenerator`,
                    label: "生成 MAC 地址",
                },
                {
                    key: `${keys[0]}/LoremIpsumGenerator`,
                    label: "Lorem Ipsum 文本生成器",
                },
                {
                    key: `${keys[0]}/JsonCompressor`,
                    label: "压缩 JSON 字符串",
                },
                {
                    key: `${keys[0]}/Ipv4Converter`,
                    label: "IPV4转换",
                },
                {
                    key: `${keys[0]}/HttpStatusInfo`,
                    label: "HTTP 状态信息",
                },
                {
                    key: `${keys[0]}/RandomPortGenerator`,
                    label: "随机端口号",
                },
                {
                    key: `${keys[0]}/RSAGenerator`,
                    label: "RSA 密钥对",
                },
                {
                    key: `${keys[0]}/EtaCalculator`,
                    label: "ETA计算器",
                },
                {
                    key: `${keys[0]}/HtmlEncode`,
                    label: "html-字符串",
                },
                {
                    key: `${keys[0]}/EmojiGenerator`,
                    label: "Emoji生成",
                },
                {
                    key: `${keys[0]}/DeviceInfo`,
                    label: "获取设备信息",
                },
                {
                    key: `${keys[0]}/MimeTypeMapper`,
                    label: "MIME类型的映射",
                },
                {
                    key: `${keys[0]}/ChmodCommand`,
                    label: "chmod 命令",
                },
                {
                    key: `${keys[0]}/StringConvertor`,
                    label: "字符串转换",
                },
                {
                    key: `${keys[0]}/BasicAuthGenerator`,
                    label: "Basic Auth",
                },
                {
                    key: `${keys[0]}/Base64Encoder`,
                    label: "base64 编码",
                },
            ]
        },
    ]

    return {items}
}

export default useMenuItem
