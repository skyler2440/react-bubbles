// import axios from "axios";
// import React from "react";
// import { Route, Redirect } from "react-route";

// export const axiosWithAuth = () => {
//   const token = localStorage.getItem("token");

//   return axios.create({
//     baseURL: "http://localhost:5000/api",
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': token
//     }
//   });
// };

// export const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (localStorage.getItem("token")) {
//           return <Component {...props} />;
//         }
//         return <Redirect to="/login" />;
//       }}
//     />
//   );
// };
