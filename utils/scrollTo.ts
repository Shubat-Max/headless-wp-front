const scrollTo = (element, to, duration) => {
  const start = element.scrollTop
  const change = to - start

  const increment = 20
  let currentTime = 0

  const animateScroll = () => {
    currentTime += increment;
    element.scrollTop = easeInOutQuad( currentTime, start, change, duration )
    if( currentTime < duration ){ setTimeout(animateScroll, increment) }
  }
  animateScroll()
}

/**
 * easeInOutQuad - quadratic equation for smooth animation
 *
 * @param t current time
 * @param b start value
 * @param c change in value
 * @param d duration
 */
export const easeInOutQuad = ( t, b, c, d ) => {
  t /= d/2;
  if( t < 1 ) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
}

export default scrollTo;

