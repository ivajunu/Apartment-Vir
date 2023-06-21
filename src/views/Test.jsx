// // Källor:
// // https://formik.org/docs/tutorial
// // https://www.youtube.com/watch?v=7Ophfq0lEAY

// import {  useFormik } from "formik";
// import * as Yup from 'yup'

// import "../css/booking.css";

// function onSubmit() {
//   console.log('Det gick bra')
// }

// function Booking() {

//   const {values, handleBlur, handleChange, handleSubmit, errors} = useFormik({
//     initialValues: {
//       firstname: "",
//       lastname: "",
//       birthdate: '',
//       adress: "",
//       city: "",
//       postcode: "",
//       email: "",
//       phone: "",
//       arrival: "",
//       departure: "",
//       adults: "",
//       kids: "",
//     },
//     validationSchema: Yup.object({
//       firstname: Yup.string().required('Required'),
//       lastname: Yup.string().required('Required'),
//       birthdate: Yup.number('Must be a number').min(6).integer().required('Required'),
//       adress: Yup.string().required('Required'),
//       city: Yup.string().required('Required'),
//       postcode: Yup.number('Must be a number').min(5).integer().required('Required'),
//       email: Yup.string().email('Please enter a valid email.').required('Required'),
//       phone: Yup.number('Must be a number').min(8).integer().required('Required'),
//       arrival: Yup.date().required('Required'),
//       departure: Yup.date().required('Required'),
//       adults: Yup.number('Must be a number').min(1).max(8).integer().required('Required'),
//       kids: Yup.number('Must be a number').max(8).integer().required('Required'),
//     }),
//     onSubmit,
//   });

//   console.log(errors)

//   return (
//     <>
//       <h1 className="headlinebooking">Want to book the apartment?</h1>
//       <div>
//         <form onSubmit={handleSubmit} action="_blank" className="completebookingform">
//           <label htmlFor="firstname">
//             Firstname:
//             <input value={values.firstname} onChange={handleChange} onBlur={handleBlur} type="text" id="firstname" />
//           </label>
//           <label htmlFor="lastname">
//             Lastname:
//             <input value={values.lastname} onChange={handleChange} onBlur={handleBlur} type="text" id="lastname" />
//           </label>
//           <label htmlFor="birthdate">
//             Birth Date:
//             <input value={values.birthdate} onChange={handleChange} onBlur={handleBlur} type="text" id="birthdate" />
//           </label>
//           <label htmlFor="adress">
//             Adress:
//             <input value={values.adress} onChange={handleChange} onBlur={handleBlur} type="text" id="adress" />
//           </label>
//           <label htmlFor="city">
//             City:
//             <input value={values.city} onChange={handleChange} onBlur={handleBlur} type="text" id="city" />
//           </label>
//           <label htmlFor="postcode">
//             Postcode:
//             <input value={values.postcode} onChange={handleChange} onBlur={handleBlur} type="text" id="postcode" />
//           </label>
//           <label htmlFor="email">
//             Email:
//             <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" id="email" />
//           </label>
//           <label htmlFor="phone">
//             Phone number:
//             <input value={values.phone} onChange={handleChange} onBlur={handleBlur} type="text" id="phone" />
//           </label>
//           <label htmlFor="arrival">
//             Arrival:
//             <input value={values.arrival} onChange={handleChange} onBlur={handleBlur} type="date" id="arrival" />
//           </label>
//           <label htmlFor="departure">
//             Departure:
//             <input value={values.departure} onChange={handleChange} onBlur={handleBlur} type="date" id="departure" />
//           </label>
//           <label htmlFor="adults">
//             Number of adults:
//             <input value={values.adults} onChange={handleChange} onBlur={handleBlur} type="text" id="adults" />
//           </label>
//           <label htmlFor="kids">
//             Number of kids:
//             <input value={values.kids} onChange={handleChange} onBlur={handleBlur} type="text" id="kids" />
//           </label>
//           <label htmlFor="terms">
//             I understand that my data is only used for the sake of booking this
//             apartment and will be deleted whitin a year:
//             <input type="checkbox" id="terms" />
//           </label>
//           <button type="submit">Continue to payment</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Booking;
