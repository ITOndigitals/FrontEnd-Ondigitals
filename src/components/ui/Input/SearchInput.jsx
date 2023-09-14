// import React from "react";
// import classes from "./SearchInput.module.scss";
// import { useFormik } from "formik";
// import { CancelIcon, SearchIcon } from "../Icons/ListIcon";

// export default function SearchInput({closeForm}) {
//   const formik = useFormik({
//     initialValues: {
//       text: "",
//     },
//     onSubmit: handleSubmit,
//   });
//   function handleSubmit(values) {
//     console.log(values);
//     formik.resetForm();
//     closeForm();
//   }

//   return (
//     <form onSubmit={formik.handleSubmit} className={classes["search-input"]}>
//       <div className={classes["search-form-input"]}>
//         <input
//           placeholder="Search...."
//           id="text"
//           name="text"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.text}
//           required
//           autoComplete="off"
//           autoFocus
//         />
//         {formik.values.text && ( 
//           <div className={classes["icon-cancel-input"]} onClick={() => formik.setFieldValue("text", "")}>
//             <CancelIcon width={20} height={20} color={"black"} />
//           </div>
//         )}
//       </div>
//       <button type="submit" >
//         <SearchIcon width={24} height={24} color={"#FFF"} />
//       </button>
//     </form>
//   );
// }
