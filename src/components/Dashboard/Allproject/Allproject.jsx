import { FaTrash } from "react-icons/fa6"
import useProject from "../../hook/useProject"
import useAxios from "../../hook/useAxios";
import Swal from "sweetalert2";



const Allproject = () => {
   const [projects , refetch] = useProject();
   const axiiosSexure = useAxios()

   function handleDelete(id){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiiosSexure.delete(`/project/${id}`)
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Deleted",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            })
            .catch(err => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Something happend Wrong",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
        }
      });
     
   }

  return (
    <div>
        <h2 className="text-center text-xl font-semibold">All Projects</h2>


        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
       projects && projects.map((pro , idx)=> <tr
        key={pro._id} 
       className="bg-base-200">
        <th>{idx + 1}</th>
        <td>{pro.name}</td>
        <td>{pro.category}</td>
        <td>
            <button
            onClick={()=>handleDelete(pro._id)}
            className="btn text-red-500">
            <FaTrash></FaTrash>
            </button>
        </td>
      </tr>)
    }
      


    </tbody>
  </table>
</div>
        </div>
    </div>
  )
}

export default Allproject