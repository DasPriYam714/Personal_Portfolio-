// 'use client'
// import React from 'react';
// import { BackgroundGradient } from './ui/background-gradient';
// import Link from 'next/link';
// import { profileItems } from '@/data';
// import { BentoGridItem } from './ui/bento-grid';

// interface Items{
//     id: number;
//   img:string;
//   imgClassName: string;
//   titleClassName: string;
//   spareImg:string;
    
// }

// const Profile = () => {
    
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
//         {profileItems.map((course: Items) =>(
//             <div key={course.id} className="flex justify-center">
//                 <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
//                     <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
//                     <p  className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.id}</p>
//                     <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.titleClassName}</p>

//                     {/* <Link className="text-white" href={`/courses/${course.slug}`}>
//                     Learn More
//                     </Link> */}

//                     </div>
                   
//                 </BackgroundGradient>
//             </div>
//         )
//         )}

//     </div>
// );
// };

// // export default Profile;