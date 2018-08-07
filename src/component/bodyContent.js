import React from 'react'
import Jquery from 'jquery'

class QueryInternet extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
        this.state = {message:"nothing"} 
    }

    handleClick(){

        const url = "http://120.76.205.241:8000/news/qihoo"

        Jquery.ajax({
            url:url,
            data: {
                'kw': 'apple',
                'site': 'jiemian.com',
                'apikey': 'R1PqrmAMtsiKx9Mb4Tbdhyd9zs857ygICD6PZTmNCXDFcPno8c9DL5JXChON4shK'
            },
            contentType: "application/json",
            dataType: 'json',
            type: 'GET',
            async: 'false',
            crossDomain: true,
            success: function (data) {
                data = JSON.parse(data);
                let retcode = data.retcode
                if (retcode === '000000') {
                    this.handleMessage(data.data)
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown){
                console.log(XMLHttpRequest.status)
                console.log(XMLHttpRequest.readyState)
                console.log(textStatus)
                console.log(errorThrown)
            }
        });
    }

    handleMessage(data){

        //处理返回后的信息
        if(data.length>0){
            let news = [];
            news = data;
            return(
                <div>
                    <ul>
                    {news.map((newItem,index)=>
                        <li key={index}><a href={newItem.url}>{newItem.title}</a></li>
                    )}
                    </ul>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick} >search</button>
            </div>
        )
    }


}

export default QueryInternet