import Image from 'react-bootstrap/Image';

import image from '../assets/images/figures/line.svg';

const Line = () => (
  <Image
    width={250}
    height={6}
    alt="line"
    src={image}
    style={{
      position: 'absolute',
      top: '60px',
      left: '0',
      zIndex: '100',
    }}
  />
);

export default Line;
