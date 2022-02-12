import "./write.css";
import { useContext } from "react";
import { Context } from "./../../context/Context";
import axios from "axios";
import { useState } from "react";

// HANDLE form data
const FormData = require("form-data");

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategory] = useState("");

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // NEW post upload
    const newPost = {
      username: user.username,
      title,
      categories,
      desc,
    };
    console.log(newPost)
    //PHOTO file upload
    if (file) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      formData.append("name", filename);
      formData.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("/upload", formData);
      } catch (err) {}

      try {
        const response = await axios.post("/posts", newPost);
        window.location.replace("/post/" + response.data._id);
      } catch (err) {}
    }
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="write" />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        {/* FORM group 1 */}
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon  fas fa-cloud-upload-alt"></i>
          </label>
          {/* TITLE form input */}
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title..."
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Add a Catergory....Europa or Laliga or Premier or Afcon or Local...."
            className="writeInput cat"
            autoFocus={true}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        {/* FORM group 2 */}
        <div className="writeFormGroup">
          <textarea
            placeholder="What's on your Sports Desk!!!... Tell your Story..."
            name=""
            id=""
            cols="30"
            rows="10"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
