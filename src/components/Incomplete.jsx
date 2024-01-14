import CardChildList from "./CardChildList";
import CardTopIncomplete from "./CardTopIncomplete";

const Incomplete = () => {
  return (
    <>
      <div className="card_item">
        <div className="card_body">
          <CardTopIncomplete name="Incomplete" />
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

export default Incomplete;
