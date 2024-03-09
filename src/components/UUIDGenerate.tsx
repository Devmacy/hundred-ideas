import {useState} from "react";
import {Button, Col, Input, InputNumber, Popconfirm, Radio, RadioChangeEvent, Row} from "antd";
import {generateNIL, generateV1, generateV3, generateV4, generateV5} from "@/utils/GenerateUUID.ts";
import {CheckOutlined} from "@ant-design/icons";
import {validate as uuidValidate} from "uuid";

const {TextArea} = Input;

function UUIDGenerate() {
    const [count, setCount] = useState(1)

    const [list, setList] = useState<string[]>([])

    const [type, setType] = useState("v4")
    const [namespace, setNamespace] = useState("")

    /**
     * 数量变化
     * @param e
     */
    const countChange = (e: number | null) => {
        const num = e || 1
        setCount(num)
    }

    /**
     * 刷新数据
     */
    const refresh = (): void => {
        let result: string[] = []
        switch (type) {
            case "v4":
                result = generateV4(count)
                break;
            case "v1":
                result = generateV1(count)
                break;
            case "v3":
                result = generateV3(count)
                break;
            case "v5":
                result = generateV5(count)
                break;
            case "NIL":
                result = generateNIL(count)
                break;
            default:
                break
        }
        setList(result)
    }

    /**
     * 类型变化
     * @param e 事件
     */
    const typeChange = (e: RadioChangeEvent): void => {
        setType(e.target.value);
    }

    return (
        <>
            <Row gutter={[10, 10]}>
                <Col span={24}>
                    <Radio.Group onChange={typeChange} value={type}>
                        <Radio value={"v4"}>v4</Radio>
                        <Radio value={"v1"}>v1</Radio>
                        <Radio value={"v3"}>v3</Radio>
                        <Radio value={"v5"}>v5</Radio>
                        <Radio value={"NIL"}>NIL</Radio>
                    </Radio.Group>
                </Col>

                <Col span={24}>
                    {["v3", "v5"].includes(type) ?
                        <Input status={uuidValidate(namespace) ? "" : "warning"} count={{show: true}} allowClear
                               addonBefore={"namespace"}
                               value={namespace}
                               onChange={(e) => {
                                   setNamespace(e.target.value)
                               }}/> : null}
                </Col>

                <Col span={21}>
                    <InputNumber style={{width: "100%"}} addonAfter={"个"} value={count} min={1}
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
                    <TextArea rows={4} showCount value={list.join("\n")}/>
                </Col>
            </Row>
        </>
    )
}

export default UUIDGenerate
