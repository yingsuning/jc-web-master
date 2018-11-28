import React,{Component} from 'react';
import {Tabs} from 'antd';
import BlockQuote from '../BlockQuote/blockquote';

const TabPane=Tabs.TabPane;
class RedListManage extends Component{
    callback=(key)=>{
       
    }
    render(){
        return(
         <div>
             <BlockQuote name='红单管理' menu='智能仓库'/>
             <Tabs defaultActiveKey='1' tabBarGutter='100px' onChange={this.callback} >
                 <TabPane tab={<span><i className='fa fa-tint'></i>&nbsp;原材料红单</span>} key='1'>
                     {/* <RawMaterialRedList /> */}
                 </TabPane>
                 <TabPane tab={<span><i className='fa fa-industry'></i></span>}>
                    {/* <ProductRedList /> */}
                 </TabPane>
             </Tabs>
         </div>
        );
    }
}