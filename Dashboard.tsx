import React, { Component } from 'react'

type StateType={
    items:{title:string,price:number}[]
}
const data=[{title:'Product1',price:180},{title:'Product2',price:380},{title:'Product3',price:280},{title:'Product4',price:80}];
export default class Dashboard extends Component<{},StateType>{
    state={
        items:[{title:"f",price:2}] 
    }
    componentDidMount(): void {
        this.setState({items:data});
    }
    
    removeItem=(idx:number)=>{
        console.log(this.state);
        const nData=this.state.items.filter((item,index)=>(idx!=index));
        this.setState({items:nData});
    }
    render() {
        return (
            <>
            <div>Dashboard</div>
            <div>
                {
                    this.state.items.map((item,idx)=><div>
                        <span>Item Name - {item.title} and Item</span>
                        <button onClick={()=>this.removeItem(idx)}>Remove It</button>
                    </div>)
                }
            </div>
            </>

        )
    }
}
