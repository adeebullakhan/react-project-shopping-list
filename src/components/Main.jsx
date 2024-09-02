import Form from "./Form";
import List from "./List";

const Main = ({items,handleAddItems,onDeleteItem , handleDoneItem}) => {
  return (
    <div className="mainwarpper">
      <Form handleAddItems={handleAddItems}/>
      <ul className="itemm" >
        {items.map((item) => (
          <List item={item} key={item.id } onDeleteItem={onDeleteItem} handleDoneItem={handleDoneItem}/>
        ))}
        
      </ul>

    </div>
  );
};
export default Main;
