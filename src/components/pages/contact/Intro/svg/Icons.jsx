/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const path = {
  form: `M36.59 40.84h51.6a1 1 0 100-1.91h-51.6a1 1 0 100 1.91zM36.59 67.58h51.6a1 1 0 100-1.91h-51.6a1 1 0 100 1.91zM73 92.41H36.59a1 1 0 000 1.92H73a1 1 0 000-1.92zM79.69 79h-43.1a1 1 0 100 1.91h43.1a1 1 0 100-1.91zM86.15 52.3H36.59a1 1 0 100 1.91h49.56a1 1 0 000-1.91z`,
  email: `M58.57 40.84h7.64a1 1 0 000-1.91h-7.64a1 1 0 100 1.91zM66.21 92.41h-7.64a1 1 0 000 1.92h7.64a1 1 0 000-1.92zM33.41 84.5a1 1 0 01-1-1V49.92a1.62 1.62 0 000-.4v-.07l.08-.08v-.16l.13-.14h.06l.06-.05.16-.11.23-.06a1.36 1.36 0 00.27 0h57.8a1.64 1.64 0 00.41 0l.15.07.16.1L92 49l.12.1v.06l.07.07a.89.89 0 00.09.16V83.51a1 1 0 01-1 1zm1-2h56v-31L63.05 69.83a1.25 1.25 0 01-.61.18.92.92 0 01-.56-.19L34.45 51.53zm28-14.68l25.75-17.13H36.71z`,
  phone: {
    p1: `M81.49 93.37V39.88a4.78 4.78 0 00-4.77-4.77H48.06a4.78 4.78 0 00-4.77 4.77v53.49a4.78 4.78 0 004.77 4.78h28.66a4.78 4.78 0 004.77-4.78zM45.2 39.88A2.86 2.86 0 0148.06 37h28.66a2.86 2.86 0 012.86 2.86v3.84a4.81 4.81 0 00-2.86-1H48.06a4.78 4.78 0 00-2.86 1zm0 7.64a2.86 2.86 0 012.86-2.86h28.66a2.86 2.86 0 012.86 2.86v38.21a2.86 2.86 0 01-2.86 2.86H48.06a2.86 2.86 0 01-2.86-2.86zm0 45.85v-3.84a4.66 4.66 0 002.86 1h28.66a4.81 4.81 0 002.86-1v3.84a2.86 2.86 0 01-2.86 2.87H48.06a2.86 2.86 0 01-2.86-2.87z`,
    p2: `M58.57 40.84h7.64a1 1 0 000-1.91h-7.64a1 1 0 100 1.91zM66.21 92.41h-7.64a1 1 0 000 1.92h7.64a1 1 0 000-1.92z`,
  },
};

const Icons = ({ form = false, email = false, phone = false, ...props }) => {
  const icon = form ? 'form' : email ? 'email' : 'phone';
  return (
    <svg viewBox="0 0 124.78 133.25" {...props}>
      <defs>
        <linearGradient
          id={`iconGradient-${icon}`}
          y1={66.63}
          x2={124.78}
          y2={66.63}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" stopOpacity={0.7} />
          <stop offset={0.01} stopColor="#fff" stopOpacity={0.7} />
          <stop offset={0.56} stopColor="#fff" stopOpacity={0.7} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.7} />
        </linearGradient>
      </defs>
      <path
        id="backShape"
        fill={`url(#iconGradient-${icon})`}
        d="M124.78 82.44V50.81a35 35 0 00-17.5-30.31L79.89 4.69a35 35 0 00-35 0L17.5 20.5A35 35 0 000 50.81v31.63a35 35 0 0017.5 30.31l27.39 15.81a35 35 0 0035 0l27.39-15.81a35 35 0 0017.5-30.31z"
      />
      {form ? (
        <path className="icon" fill="#184c7f" d={path.form} />
      ) : email ? (
        <path className="icon" fill="#184c7f" d={path.email} />
      ) : phone ? (
        <>
          <path className="icon" fill="#184c7f" d={path.phone.p1} />
          <path className="icon" fill="#184c7f" d={path.phone.p2} />
        </>
      ) : null}
    </svg>
  );
};

export default Icons;
