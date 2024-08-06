import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="mx-5 my-2">Price</h2>
        <div className="flex flex-col my-2 mx-5">
          <label className="">
            <input onChange={handleChange} type="radio" value="" name="test2" />
            <span className=""></span>All
          </label>
         
          <Input
            handleChange={handleChange}
            value={50}
            title="$0 - 50"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={100}
            title="$50 - $100"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={150}
            title="$100 - $150"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={200}
            title="Over $150"
            name="test2"
          />
        </div>
      </div>
    </>
  );
};

export default Price;