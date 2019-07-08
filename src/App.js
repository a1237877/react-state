import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list'
import CommentInput from './CommentList'
import CommentList from './CommentList'

let generateId = 1;
class App extends Component{
  state = {
     lists : [{name:'tom',age:19,school:'s1',id:0},
    {name:'tony',age:20,school:'s2',id:1},]
  }
  commentLists = []

  handleAddInfo = () => {
    const lists = this.state.lists.slice(0) //浅拷贝lists的数据
    generateId++;
    lists.push({name:'wzx',age:20,school:'caida',id:generateId})
    this.setState({
      lists
    })
  }
  handleListDelete = (id) => {
    console.log('父组件收到id',id);
    const lists = this.state.lists.slice(0)
    const index = lists.findIndex(list => list.id===id)
    lists.splice(index,1);//删除下标为index的一项
    this.setState({
      lists
    })
  }
  handlePublish(userName, commentContent){
    //push setState
    const commentLists = this.state.commentLists.slice(0)
    commentLists.push({userName,commentContent})
    this.setState({
      commentLists
    })

  }
  render(){
   const {lists,commentLists} = this.state
    // const lists = [{name:'tom',age:19,school:'s1'},
    // {name:'tony',age:20,school:'s2'},]
    return (
      <>
      <ul>
        <button onClick={this.handleAddInfo}>添加一条数据</button>
        {
          lists.map((list,i)=>{
            return (
              <List key={list.id} list={list} onDelete={this.handleListDelete} />
            )
          })
        }
      </ul>
      <div>
        <CommentList commentLists={commentLists} />
        <CommentInput onPublish={this.handlePublish} />
      </div>
      </>
    )
  }
}

export default App;
