import Image from 'react-bootstrap/Image';

import image from '../assets/images/figures/line.svg';

const Line = () => (
  <Image
    width={250}
    height={6}
    alt="line"
    src={image}
    className="lineProps"
    style={{
      position: 'absolute',
      top: '58px',
      left: '-2px',
      zIndex: '100',
    }}
  />
);

export default Line;
