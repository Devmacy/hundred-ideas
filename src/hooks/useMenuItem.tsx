import {useNavigate} from "react-router-dom";
import {MenuProps} from "antd";

const useMenuItem = () => {
    const navigate = useNavigate();
    const items: MenuProps['items'] = [
        {
            key: "1",
            label: "主页",
            onClick: () => navigate("/"),
        },
        {
            key: "2",
            label: "IT工具箱",
            onClick: () => navigate("/itTools"),
            children: [
                {
                    key: "2-1",
                    label: "批量生成uuid"
                },
                {
                    key: "2-2",
                    label: "Token生成"
                },
                {
                    key: "2-3",
                    label: "URL解析"
                },
                {
                    key: "2-4",
                    label: "统计文本信息"
                }, {
                    key: "2-5",
                    label: "文本-NATO字母转换"
                },
                {
                    key: "2-6",
                    label: "字符串混淆"
                },
                {
                    key: "2-7",
                    label: "URL->Slug"
                },
                {
                    key: "2-8",
                    label: "罗马数字转换"
                },
                {
                    key: "2-9",
                    label: "随机数生成"
                },
                {
                    key: "2-10",
                    label: "百分数生成"
                },
                {
                    key: "2-11",
                    label: "生成 Numeronym"
                },
                {
                    key: "2-12",
                    label: "生成 MAC 地址"
                },
                {
                    key: "2-13",
                    label: "Lorem Ipsum 文本生成器"
                },
                {
                    key: "2-14",
                    label: "压缩 JSON 字符串"
                },
                {
                    key: "2-15",
                    label: "IPV4转换"
                },
                {
                    key: "2-16",
                    label: "HTTP 状态信息"
                },
                {
                    key: "2-17",
                    label: "随机端口号"
                },
                {
                    key: "2-18",
                    label: "RSA 密钥对"
                },
                {
                    key: "2-19",
                    label: "ETA计算器"
                }, {
                    key: "2-20",
                    label: "html-字符串"
                }, {
                    key: "2-21",
                    label: "Emoji生成"
                },{
                    key: "2-22",
                    label: "获取设备信息"
                },{
                    key: "2-23",
                    label: "MIME类型的映射"
                },{
                    key: "2-24",
                    label: "chmod 命令"
                },{
                    key: "2-25",
                    label: "字符串转换"
                },{
                    key: "2-26",
                    label: "Basic Auth"
                },{
                    key: "2-27",
                    label: "base64 编码"
                },
            ]
        },
    ]

    return {items}
}

export default useMenuItem
