import { memo, SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={33} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M23.891 19.59a1.467 1.467 0 0 0-.425 1.292l1.185 6.56a1.44 1.44 0 0 1-.6 1.44 1.468 1.468 0 0 1-1.56.107l-5.905-3.08a1.508 1.508 0 0 0-.667-.175h-.361a1.084 1.084 0 0 0-.36.12L9.29 28.95a1.558 1.558 0 0 1-.946.147A1.482 1.482 0 0 1 7.158 27.4l1.187-6.56a1.492 1.492 0 0 0-.426-1.305l-4.814-4.667a1.44 1.44 0 0 1-.36-1.507 1.497 1.497 0 0 1 1.186-1l6.627-.96a1.483 1.483 0 0 0 1.173-.813l2.92-5.987a1.41 1.41 0 0 1 .267-.36l.12-.093a.896.896 0 0 1 .214-.173l.146-.054.226-.093h.562c.501.052.942.352 1.173.8l2.959 5.96a1.48 1.48 0 0 0 1.106.812l6.627.961c.56.08 1.028.467 1.214 1a1.448 1.448 0 0 1-.387 1.507l-4.987 4.72Z"
      fill={props.color ?? '#FCC229'}
    />
  </svg>
);

const StarIcon = memo(SVGComponent);
export default StarIcon;