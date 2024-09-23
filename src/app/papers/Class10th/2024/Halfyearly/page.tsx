// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React from 'react';

// const subjects = ["Maths", "Physics", "Chemistry", "Biology"];

// export default function TestTypeClass10Papers() {
//   const router = useRouter();
//   const { year, testType } = router.query;

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">{testType} Papers - Class 10 - {year}</h1>
//       <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
//         {subjects.map((subject) => (
//           <Link href={`/Notes/Class10th/${year}/${testType}/${subject}`} key={subject}>
//             <div
//               style={{
//                 padding: "10px",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 transition: "background-color 0.3s",
//                 backgroundColor: "#f5f5f5",
//                 textAlign: "center",
//                 width: "200px",
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = "#e0f7fa";
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = "#f5f5f5";
//               }}
//             >
//               {subject}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
