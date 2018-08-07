import React from 'react'

class ComponentHeader extends React.Component {
    render(){
        return (
            <div>
                <HeaderLeft />
                <HeaderRight />
            </div>
        )
    }


}

// 头的左部
class HeaderLeft extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <a><span>桌面</span></a>
                    </li>
                    <li >
                        <a href="">产品与服务 <em></em></a>
                        <div>
                            <ul >
                                <li >
                                    <a href="javascript:;" target="_blank">
                                        <i></i>
                                        <span>商城预览</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

// 头的右部
class HeaderRight extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    
    handleClick(event) {
        console.log(this.props)
        alert(event.content)
    }
    
    render(){

        const elementName = ["控制面板", "修改密码", "退出"];

        const element = elementName.map((item, index) =>
            <li key={index}>
                <a href="" data_id={index} onClick={this.handleClick.bind()}>{item}</a>
            </li>
        )

        return(
            <div>
                <ul>
                    <li >
                        <a
                            id="customerPopover"
                            role="button"
                            data-toggle="popover">
                            <i className="customer-icon"></i>
                        </a>
                        <div id="popoverContent" >
                            <p>如遇疑问，可通过以下方式联系我们</p>
                            <p><i className="tel-icon"></i>025-68586888-8697</p>
                        </div>
                    </li>
                    <li>
                        <a href="">admin</a>
                        <div>
                            <ul>
                                {element}
                            </ul>
                        </div>
                    </li>
                </ul>
           </div>
        )
    }
}

export default ComponentHeader