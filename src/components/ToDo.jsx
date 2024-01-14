import CardChildList from "./CardChildList";
import CardTopToDo from "./CardTopToDo";

const ToDo = () => {
  return (
    <>
      <div className="card_item">
        <div className="card_body">
          <CardTopToDo name="To Do" />
          <div className="card_all_content">
            <CardChildList />
            <CardChildList />
            <CardChildList />
            <CardChildList />
            <CardChildList />
            <CardChildList />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
