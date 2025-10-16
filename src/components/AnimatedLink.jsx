// src/components/AnimatedLink.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { usePageTransition } from "../context/TransitionContext";

function AnimatedLink({ to, children, className }) {
  const navigate = useNavigate();
  const { playTransition } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    playTransition(() => navigate(to));
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default AnimatedLink;
