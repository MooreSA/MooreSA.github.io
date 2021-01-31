import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ProjectCard = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { projectInfo } = props;
  const { name, url, description } = projectInfo;
  const [active, setActive] = useState(false);

  const { scaleFactor } = useSpring({ scaleFactor: active ? 1.05 : 1 });
  const testProps = useSpring({
    from: { background: '#88A0A8' },
    to: { background: active ? '#EEE5AA' : '#88A0A8' },
  });

  return (
    <animated.a
      className="projects__link"
      href={url}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{
        transform: scaleFactor.interpolate((factor) => `scale(${factor})`),
      }}
    >
      <animated.div className="projects__card projects__card--upper" style={testProps}>{name}</animated.div>
      <div className="projects__card projects__card--lower">{description}</div>
    </animated.a>
  );
};

export default ProjectCard;
