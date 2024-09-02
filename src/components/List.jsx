const List=({item,onDeleteItem,handleDoneItem})=>{
    return(
        <div className="itemwrapper">
<h1>{item.quantity}</h1>
<h1 style={item.packed ? {textDecoration :"line-through"}:{}}>{item.product}</h1>
<div className="btnwrapper">
        <button onClick= {()=>handleDoneItem(item.id)}  className="doneBtn">Done</button>
            <button onClick={()=>onDeleteItem(item.id)} className="deleteBtn">Delete</button>
      </div> 

    </div>
    
    )
}
export default List;