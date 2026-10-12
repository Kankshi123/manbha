import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const isDesktop = !useMediaQuery('(hover: none)');
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (!isDesktop) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      dot.classList.add('is-hovering');
      ring.classList.add('is-hovering');
    };
    const onLeaveLink = () => {
      dot.classList.remove('is-hovering');
      ring.classList.remove('is-hovering');
    };
    const onEnterImage = () => {
      dot.classList.add('is-view');
      ring.classList.add('is-view');
      setLabel('View');
    };
    const onLeaveImage = () => {
      dot.classList.remove('is-view');
      ring.classList.remove('is-view');
      setLabel('');
    };

    document.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animate);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    const images = document.querySelectorAll('[data-cursor="view"]');
    images.forEach((el) => {
      el.addEventListener('mouseenter', onEnterImage);
      el.addEventListener('mouseleave', onLeaveImage);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
      });
      images.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterImage);
        el.removeEventListener('mouseleave', onLeaveImage);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        {label && (
          <span
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-ivory)',
              fontSize: '0.5rem',
              fontFamily: 'var(--font-ui)',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </span>
        )}
      </div>
    </>
  );
}
