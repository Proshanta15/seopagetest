import CardChildList from "./CardChildList";
import CardTop from "./CardTop";

const Completed = () => {
  return (
    <>
      <div className="card_item">
        <div className="card_body">
          <CardTop name="Completed" />
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

export default Completed;
