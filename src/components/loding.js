import React from 'react';

// export function Spinner({ size = 10, className }) {
//   return (
//     <svg
//       style={{ height: '35px', width: '35px' }}
//       className='animate-spin'
//       xmlns='http://www.w3.org/2000/svg'
//       fill='none'
//       viewBox='0 0 24 24'
//     >
//       <circle
//         className='opacity-25'
//         cx='12'
//         cy='12'
//         r='10'
//         stroke='currentColor'
//         strokeWidth='4'
//       ></circle>
//       <path
//         fill='currentColor'
//         d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
//       ></path>
//     </svg>
//   );
// }

const Loading = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        height: '100vh',
        backdropFilter: 'blur(4px)',
        width: '-webkit-fill-available',
        zIndex: '9999',
      }}
    >
      <div
        style={{
          height: '-webkit-fill-available',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '999',
        }}
      >
        <span className='loader'></span>
      </div>
    </div>
  );
};

export default Loading;
