import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-animate]');
    const animationClass = 'anime';

    const animeScroll = () => {
      const windowTop = window.scrollY + window.innerHeight * 0.75;
      targets.forEach(element => {
        if (windowTop > element.offsetTop) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
      });
    };

    animeScroll();

    window.addEventListener('scroll', animeScroll);
    return () => {
      window.removeEventListener('scroll', animeScroll);
    };
  }, []);
};

export default useScrollAnimation;
