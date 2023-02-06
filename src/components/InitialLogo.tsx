import { useState } from "react";

function InitialLogo() {
  const [isHovering, setHovering] = useState(false);

  const toggleHovering = () => {
    setHovering(!isHovering)
  } 

  return (
    <svg
      width="559"
      height="558"
      viewBox="0 0 559 558"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 active:scale-90 transition ease-in-out"
      onMouseEnter={toggleHovering}
      onMouseLeave={toggleHovering}
    >
      <path
        d="M0 0L104.429 141.465V558H0V0Z"
        fill="url(#paint0_linear_405_39)"
      />
      <path
        d="M559 0L454.063 141.465L454.571 558H559V0Z"
        fill="url(#paint1_linear_405_39)"
      />
      <path
        d="M123.881 125.746L199.642 225.95H278.476V125.746H123.881Z"
        fill="url(#paint2_linear_405_39)"
      />
      <path
        d="M433.071 125.746L357.309 225.95H278.476V125.746H433.071Z"
        fill="url(#paint3_linear_405_39)"
      />
      <path
        d="M104.429 285.392L104.184 141.465L280.016 376.257V535.262L104.429 285.392Z"
        fill="url(#paint4_linear_405_39)"
      />
      <path
        d="M454.571 315.12L454.063 141.465L278.232 376.257V535.262L454.571 315.12Z"
        fill="url(#paint5_linear_405_39)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_405_39"
          x1="279.5"
          y1="0"
          x2="279.5"
          y2="558"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="logo-transition" stop-color={`${isHovering ? '#0342E5' : '#03CAE5'}`} />
          <stop className="logo-transition" offset="1" stop-color={`${isHovering ? '#03CAE5' : '#0342E5'}`}/>
        </linearGradient>
        <linearGradient
          id="paint1_linear_405_39"
          x1="279.5"
          y1="0"
          x2="279.5"
          y2="558"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="logo-transition" stop-color={`${isHovering ? '#0342E5' : '#03CAE5'}`} />
          <stop className="logo-transition" offset="1" stop-color={`${isHovering ? '#03CAE5' : '#0342E5'}`}/>
        </linearGradient>
        <linearGradient
          id="paint2_linear_405_39"
          x1="279.5"
          y1="0"
          x2="279.5"
          y2="558"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="logo-transition" stop-color={`${isHovering ? '#0342E5' : '#03CAE5'}`} />
          <stop className="logo-transition" offset="1" stop-color={`${isHovering ? '#03CAE5' : '#0342E5'}`}/>
        </linearGradient>
        <linearGradient
          id="paint3_linear_405_39"
          x1="279.5"
          y1="0"
          x2="279.5"
          y2="558"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="logo-transition" stop-color={`${isHovering ? '#0342E5' : '#03CAE5'}`} />
          <stop className="logo-transition" offset="1" stop-color={`${isHovering ? '#03CAE5' : '#0342E5'}`}/>
        </linearGradient>
        <linearGradient
          id="paint4_linear_405_39"
          x1="279.5"
          y1="0"
          x2="279.5"
          y2="558"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="logo-transition" stop-color={`${isHovering ? '#0342E5' : '#03CAE5'}`} />
          <stop className="logo-transition" offset="1" stop-color={`${isHovering ? '#03CAE5' : '#0342E5'}`}/>
        </linearGradient>
        <linearGradient
          id="paint5_linear_405_39"
          x1="279.5"
          y1="0"
          x2="279.5"
          y2="558"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="logo-transition" stop-color={`${isHovering ? '#0342E5' : '#03CAE5'}`} />
          <stop className="logo-transition" offset="1" stop-color={`${isHovering ? '#03CAE5' : '#0342E5'}`}/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default InitialLogo;
