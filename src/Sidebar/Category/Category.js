import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (

    <div className="flex flex-col ">
      <h2 className="mx-5 my-2">Categories</h2>

      <div className="flex flex-col my-2 mx-5">
        <label className="">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className=""></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;