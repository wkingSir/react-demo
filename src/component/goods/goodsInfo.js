import React from 'react'
import { Icon, Input, Button ,Form} from 'antd'

let goodsInfo = {skuName:'',skuNum:'',skuPrice:0.00}
let goods = []
class GoodsInfoItem extends React.Component{

    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind()
        this.addItem = this.addItem.bind()
        this.state={}
    }

    addItem(){

        goodsInfo = new GoodsInfoItem()
        goods.addItem(goodsInfo)
    }

    render(){
        retrun (
            
        )
    }
}