import CardChildList from "./CardChildList";
import CardTop from "./CardTop";

const OverdView = () => {
  return (
    <>
      <div className="card_item">
        <div className="card_body">
          <CardTop name="Overd View" />
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

export default OverdView;
