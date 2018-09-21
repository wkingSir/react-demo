import React from 'react'
import { Icon, Input, Button} from 'antd'
import 'antd/dist/antd.css'

const InputGroup = Input.Group;

let Apple ={name:'apple',price:200,count:0}
let Peal = { name: 'peal', price: 300,count:0 }
let Orange = { name: 'orange', price: 50, count:0 }
let goods = [Apple,Peal,Orange]

class Execise extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count:0,
            sumPrice:0
        }
    }

    handleClick(index){

        const goodsCount = goods[index].count;
        goods[index].count = goodsCount + 1;
        this.setState({
            count : this.state.count + 1,
            sumPrice : this.state.sumPrice + goods[index].price
        })
        console.info(goods)
    }

    render(){
        return(
            <div>
                {
                    goods.map((goodsItem,index)=>
                        <div key={index} postion={index}>
                            <InputGroup compact>
                                <Input style={{ width: '20%' }} defaultValue={goodsItem.name} />
                                <Input style={{ width: '30%' }} defaultValue={goodsItem.price} />
                                <Input style={{ width: '10%' }} value={goodsItem.count} />
                                <Button type="primary" onClick={()=>this.handleClick(index)} ><Icon type="plus" theme="outlined" /></Button>
                            </InputGroup>
                            <br></br>
                        </div>
                    )
                }
                <div>count:{this.state.count}</div>
                <div>sumPrice:{this.state.sumPrice}</div>
            </div>
        )
    }
}

export default Execise