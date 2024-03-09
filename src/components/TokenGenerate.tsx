import {Button, Checkbox, Col, Input, InputNumber, Popconfirm, Row} from "antd";
import {useState} from "react";
import {CheckOutlined} from "@ant-design/icons";
import tokenGenerator from "@/utils/TokenGenerator.ts";

const {TextArea} = Input;

function TokenGenerate() {
    const [token, setToken] = useState("")
    const [count, setCount] = useState(1)
    const [needNumber, setNeedNumber] = useState(true)
    const [needUpper, setNeedUpper] = useState(true)
    const [needLower, setNeedLower] = useState(true)
    const [needSymbol, setNeedSymbol] = useState(true)

    /**
     * 刷新数据
     */
    const refresh = (): void => {
        const result = tokenGenerator(count, needNumber, needUpper, needLower, needSymbol)
        setToken(result)
    }

    /**
     * 数量变化
     * @param e
     */
    const countChange = (e: number | null) => {
        const num = e || 1
        setCount(num)
    }

    return (
        <div>
            <Row gutter={[10, 10]}>
                <Col span={12}>
                    <Checkbox checked={needNumber} onChange={(e) => setNeedNumber(e.target.checked)}>需要数字</Checkbox>
                </Col>
                <Col span={12}>
                    <Checkbox checked={needUpper} onChange={(e) => setNeedUpper(e.target.checked)}>需要大写</Checkbox>
                </Col>
                <Col span={12}>
                    <Checkbox checked={needLower} onChange={(e) => setNeedLower(e.target.checked)}>需要小写</Checkbox>
                </Col>
                <Col span={12}>
                    <Checkbox checked={needSymbol} onChange={(e) => setNeedSymbol(e.target.checked)}>需要符号</Checkbox>
                </Col>
                <Col span={21}>
                    <InputNumber style={{width: "100%"}} addonAfter={"长度"} value={count} min={1}
                                 changeOnWheel
                                 onChange={countChange}/>
                </Col>

                <Col span={3} style={{display: "flex", justifyContent: "flex-end"}}>
                    {count > 100 ?
                        <Popconfirm
                            title="数量过多"
                            description="数量过多可能卡顿，是否继续?"
                            okText="是"
                            cancelText="否"
                            onConfirm={refresh}
                        >
                            <Button type={"primary"} icon={<CheckOutlined/>}></Button>
                        </Popconfirm>
                        : <Button type={"primary"} icon={<CheckOutlined/>} onClick={refresh}></Button>
                    }
                </Col>

                <Col span={24}>
                    <TextArea rows={4} showCount value={token} style={{wordBreak: "break-all"}}/>
                </Col>
            </Row>
        </div>
    )
}

export default TokenGenerate
