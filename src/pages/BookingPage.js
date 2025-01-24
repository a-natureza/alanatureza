// // src/pages/BookingPage.jsx

// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const BookingPage = () => {
//   const { t } = useTranslation();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     date: '',
//     time: '',
//     message: '',
//   });
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess(false);

//     // Validation basique
//     if (!formData.name || !formData.email || !formData.date || !formData.time) {
//       setError(t('bookingPage.form.validation'));
//       return;
//     }

//     try {
//       const response = await fetch('/api/create-event', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess(true);
//         setFormData({
//           name: '',
//           email: '',
//           date: '',
//           time: '',
//           message: '',
//         });
//       } else {
//         setError(data.message || t('bookingPage.form.error'));
//       }
//     } catch (err) {
//       console.error(err);
//       setError(t('bookingPage.form.error'));
//     }
//   };

//   return (
//     <section className="bg-[#f5e6cc] text-black py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-[#3c9d9b] mb-4 text-center">
//           {t('bookingPage.title')}
//         </h2>
//         <p className="text-lg text-gray-700 mb-8 text-center">
//           {t('bookingPage.subtitle')}
//         </p>

//         <div className="max-w-md mx-auto">
//           {success && (
//             <div className="bg-green-100 text-green-700 p-4 mb-6 rounded">
//               {t('bookingPage.form.success')}
//             </div>
//           )}
//           {error && (
//             <div className="bg-red-100 text-red-700 p-4 mb-6 rounded">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-left text-gray-700">
//                 {t('bookingPage.form.name')}
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c9d9b]"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-left text-gray-700">
//                 {t('bookingPage.form.email')}
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c9d9b]"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="date" className="block text-left text-gray-700">
//                 {t('bookingPage.form.date')}
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c9d9b]"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="time" className="block text-left text-gray-700">
//                 {t('bookingPage.form.time')}
//               </label>
//               <input
//                 type="time"
//                 id="time"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c9d9b]"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-left text-gray-700">
//                 {t('bookingPage.form.message')}
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3c9d9b]"
//                 rows="4"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#3c9d9b] hover:bg-[#2b7a79] text-white py-2 px-4 rounded-md transition-colors duration-300"
//             >
//               {t('bookingPage.form.submit')}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookingPage;
