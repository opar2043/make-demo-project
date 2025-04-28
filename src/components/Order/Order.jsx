import Title from "../Shared/Title"

const Order = () => {
  return (
    <div id="order" className="px-4 py-8 max-w-7xl mx-auto">
      <Title text={'Order'} />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Other Components */}
        <div className="md:w-1/2">
          <p className="text-lg font-semibold text-gray-600">Other components</p>
        </div>

        {/* Form */}
        <div className="md:w-1/2">
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            {/* Project Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Project Name</span>
              </label>
              <input type="text" placeholder="eShopping.com" className="input input-bordered w-full" required />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <input type="text" placeholder="E-commerce" className="input input-bordered w-full" required />
            </div>

            {/* Details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Details</span>
              </label>
              <textarea placeholder="A full-stack e-commerce platform with cart and payment system." className="textarea textarea-bordered w-full" rows="4" required></textarea>
            </div>

            {/* Technology Used */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Technology Used</span>
              </label>
              <input type="text" placeholder="React, Redux, Stripe API, Express" className="input input-bordered w-full" required />
            </div>

            {/* Features */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Features</span>
              </label>
              <input type="text" placeholder="Product Search, Add to Cart, Online Payment" className="input input-bordered w-full" required />
            </div>

            {/* Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Image URL</span>
              </label>
              <input type="url" placeholder="https://i.ibb.co.com/n3bZkSj/mac-2.jpg" className="input input-bordered w-full" required />
            </div>

            {/* Submit Button */}
            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full mt-4">Submit</button>
            </div>
          </form>
        </div>
      </div> 
    </div>
  )
}

export default Order
