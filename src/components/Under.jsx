import CardChildList from "./CardChildList";
import CardTop from "./CardTop";

const Under = () => {
  return (
    <>
      <div className="card_item">
        <div className="card_body">
          <CardTop name="Under Review" />
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

export default Under;
