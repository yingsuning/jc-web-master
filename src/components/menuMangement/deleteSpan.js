import React from 'react';
import {Popconfirm,message} from "antd";
import axios from "axios";

/**这是个令牌，每次调用接口都将其放在header里 */
const Authorization = localStorage.getItem('Authorization');

class DeletaSpan extends React.Component {
    render() {
        return (
            <span>
                <Popconfirm title="确认删除?" onConfirm={() => this.handleDelete(this.props.record.id)} okText="确定" cancelText="取消" >
                    <a href="#">删除</a>
                </Popconfirm>
            </span>
        )
    }
    handleDelete = (id) => {
        axios({
            url:'http://192.168.1.105:8081/jc/menu/'+parseInt(id),
            method:'Delete',
            headers:{
                'Authorization':Authorization
            },
        }).then((data)=>{
            console.log(data);
            message.info(data.data.message);
        }).catch((error)=>{
            console.log(error);
            message.info(error.data)
        });
        setTimeout(() => {
            this.props.getFetch();
        }, 1000);
    }
}

export default DeletaSpan;