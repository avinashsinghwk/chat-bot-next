interface UpArrowSvgType{
  color: string,
  height: string,
  width: string
}


export function UpArrowSvg({width, height, color}: UpArrowSvgType){
    return <svg
    width={width}
    height={height}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    className="iconify iconify--emojione-monotone"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm5.143 28.305V49H26.857V30.305H16L32 15l16 15.305H37.143z"
      fill={color}
    ></path>
  </svg>
}