import React from 'react'
import '../css/CartIcon.css'

const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <svg 
      viewBox="0 0 129.88 129.88" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <style>
          {`
            .cls-1 { fill: url(#linear-gradient); }
            .cls-2, .cls-3 { fill: none; stroke-linejoin: round; stroke-width: 4.6px; }
            .cls-2, .cls-3, .cls-4 { stroke: #fff; }
            .cls-3 { stroke-linecap: round; }
            .cls-4 { stroke-miterlimit: 10; stroke-width: 4px; fill: url(#linear-gradient-2); }
          `}
        </style>
        <linearGradient 
          gradientUnits="userSpaceOnUse" 
          id="linear-gradient" 
          x1="21.08" 
          x2="108.88" 
          y1="90.47" 
          y2="39.78"
        >
          <stop offset="0.02" stopColor="red" />
          <stop offset="1" stopColor="#9e005d" />
        </linearGradient>
        <linearGradient 
          id="linear-gradient-2" 
          x1="46.14" 
          x2="88.56" 
          xlinkHref="#linear-gradient" 
          y1="57.75" 
          y2="57.75"
        />
      </defs>
      <title>Cart Icon</title>
      <g data-name="Layer 1" id="Layer_1">
        <path 
          className="cls-1" 
          d="M86.37,14.44H43.59a13.65,13.65,0,0,0-11.82,6.82L10.38,58.31a13.67,13.67,0,0,0,0,13.64L31.77,109a13.65,13.65,0,0,0,11.82,6.82H86.37A13.63,13.63,0,0,0,98.18,109l21.4-37a13.67,13.67,0,0,0,0-13.64l-21.4-37A13.63,13.63,0,0,0,86.37,14.44Z"
        />
        <path 
          className="cls-2" 
          d="M62.32,91.8a5.08,5.08,0,1,1-5.08-5.08A5.08,5.08,0,0,1,62.32,91.8Z"
        />
        <path 
          className="cls-2" 
          d="M82.53,91.8a5.08,5.08,0,1,1-5.08-5.08A5.08,5.08,0,0,1,82.53,91.8Z"
        />
        <polyline 
          className="cls-3" 
          points="34.12 40.87 44.55 40.87 52.15 75.69 48.62 80.81 87.92 80.81"
        />
        <polygon 
          className="cls-4" 
          points="88.56 68.62 51.62 71.62 46.14 43.87 88.56 43.87 88.56 68.62"
        />
        <line 
          className="cls-3" 
          x1="55.59" 
          x2="80.24" 
          y1="51.36" 
          y2="51.36"
        />
      </g>
    </svg>
    </div>
  )
}

export default CartIcon
