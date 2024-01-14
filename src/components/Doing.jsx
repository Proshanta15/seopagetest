import CardChildList from "./CardChildList";
import CardTopDoing from "./CardTopDoing";

const Doing = () => {
  return (
    <div className="card_item">
      <div className="card_body">
        <CardTopDoing name="Doing" />
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
  );
};

export default Doing;
