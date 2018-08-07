import React from 'react'
import { DatePicker, Input, Select, TreeSelect, Radio, Form, Button } from 'antd'
import 'antd/dist/antd.css'
import '../css/antdComStyle.css'

const RadioGroup = Radio.Group;
const Option = Select.Option;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: '苹果', value: 'Apple' },
    { label: '梨子', value: 'Pear' },
    { label: '橘子', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: '苹果', value: 'Apple' },
    { label: '梨子', value: 'Pear' },
    { label: '橘子', value: 'Orange', disabled: false },
];

class AntdModal extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value1: 'Apple',
            value2: 'Apple',
            value3: 'Apple'
        }
    }

    onChange1 = (e) => {
        console.log('radio1 checked', e.target.value);
        this.setState({
            value1: e.target.value,
        });
    }

    onChange2 = (e) => {
        console.log('radio2 checked', e.target.value);
        this.setState({
            value2: e.target.value,
        });
    }

    onChange3 = (e) => {
        console.log('radio3 checked', e.target.value);
        this.setState({
            value3: e.target.value,
        });
    }

    render(){
        return(
            <div>
                <Form action="www.baidu.com">
                    <Input defaultValue="default somthing" className="inputTest"/>
                    <Select style={{ width: 100 }} defaultValue="Apple" className="selectTest">
                        {plainOptions.map((option,index) =>
                            <Option key={index} value={option}>{option}</Option>
                        )}
                    </Select>
                    <TreeSelect style={{ width: 100 }}>
                        <Option>哪里</Option>
                    </TreeSelect>
                    <div>
                        <RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
                        <RadioGroup options={options} onChange={this.onChange2} value={this.state.value2} />
                        <RadioGroup options={optionsWithDisabled} onChange={this.onChange3} value={this.state.value3} />
                    </div>
                    <DatePicker />
                    <Button type="submit"/>
                </Form>
            </div>
        ) 
    }
}

export default AntdModal