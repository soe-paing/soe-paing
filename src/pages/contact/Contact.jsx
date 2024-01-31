import React, { useContext } from 'react'
import useIntersectionObserver from '../../customHook/useInterSectionObserver';
import { ActiveContext } from '../../Container';

export default function Contact({id}) {
  const {activeItem, setActiveItem} = useContext(ActiveContext);
  const targetRef = useIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        yourFunction(id);
      }
    });
  }, { threshold: 0.5 });

  const yourFunction = (id) => {
    setActiveItem(id);
  };
  return (
    <div ref={targetRef}>Contact</div>
  )
}
