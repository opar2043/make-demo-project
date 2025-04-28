import React, { useState } from "react";
import useAxios from "../../hook/useAxios";
import Swal from "sweetalert2";

const AddProject = () => {
  const [features, setFeatures] = useState("Admin Panel");
  const [technologyUsed, setTechnologyUsed] = useState("SEO");

  const axiiosSexure = useAxios();

  function handleAdd(e) {
    e.preventDefault();
    const from = e.target;

    const name = from.name.value;
    const category = from.category.value;
    const details = from.details.value;
    const image = from.image.value;

    const project = {
      name,
      category,
      details,
      image,
      features,
      technologyUsed,
    };

    console.log(project);
    axiiosSexure
      .post("/project", project)
      .then((res) => {
        console.log(res.data);

        Swal.fire({
          title: "Succesfully Added The Project",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error",
          icon: "error",
          draggable: true,
        });
      });
  }

  return (
    <div className="flex justify-center">
      <div className="md:w-1/2">
        <form
          onSubmit={handleAdd}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Project Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Project Name</span>
            </label>
            <input
              type="text"
              placeholder="Project Name"
              className="input input-bordered w-full"
              required
              name="name"
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <input
              type="text"
              placeholder="E-commerce"
              className="input input-bordered w-full"
              required
              name="category"
            />
          </div>

          {/* Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Details</span>
            </label>
            <textarea
              placeholder="Project Details..."
              className="textarea textarea-bordered w-full"
              rows="4"
              required
              name="details"
            ></textarea>
          </div>

          {/* Technology Used (Array) */}
          <div className="form-control grid grid-cols-1 md:grid-cols-2">
            <select
              onChange={(e) => setTechnologyUsed(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                technologies
              </option>
              <option>Html</option>
              <option>CSS</option>
              <option>js</option>
              <option>photoshop</option>
              <option>Graphics design </option>
              <option>SEO</option>
            </select>
            <select
              onChange={(e) => setFeatures(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Features
              </option>
              <option>Admin Panel</option>
              <option>Fast Service</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Image URL</span>
            </label>
            <input
              type="url"
              placeholder="https://your-image-url.com"
              className="input input-bordered w-full"
              required
              name="image"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full mt-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
