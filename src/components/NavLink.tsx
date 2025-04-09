"use client";

import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
  sectionId: string;
}

export default function NavLink({ href, onClick, children, sectionId }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Create a new Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Get the current section element
          const currentSection = document.getElementById(sectionId);
          if (!currentSection) return;
          
          // Calculate the visibility of the current section
          const currentRect = currentSection.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Determine if the section is in the viewport
          const isInViewport = 
            currentRect.top <= viewportHeight * 0.7 && 
            currentRect.bottom >= viewportHeight * 0.3;
          
          if (isInViewport) {
            // Check if this is the most visible section
            const allSections = document.querySelectorAll('section[id], div[id]');
            let isMostVisible = true;
            
            allSections.forEach((section) => {
              if (section.id !== sectionId) {
                const rect = section.getBoundingClientRect();
                
                // Calculate how much of each section is visible
                const currentVisibility = Math.min(
                  viewportHeight * 0.7 - currentRect.top,
                  currentRect.bottom - viewportHeight * 0.3
                );
                
                const otherVisibility = Math.min(
                  viewportHeight * 0.7 - rect.top,
                  rect.bottom - viewportHeight * 0.3
                );
                
                // If another section is more visible, this one is not the most visible
                if (otherVisibility > currentVisibility && otherVisibility > 0) {
                  isMostVisible = false;
                }
              }
            });
            
            setIsActive(isMostVisible);
          } else {
            setIsActive(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    // Start observing the target section
    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }

    // Also add a scroll event listener for more precise detection
    const handleScroll = () => {
      const currentSection = document.getElementById(sectionId);
      if (!currentSection) return;
      
      const currentRect = currentSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Determine if the section is in the viewport
      const isInViewport = 
        currentRect.top <= viewportHeight * 0.7 && 
        currentRect.bottom >= viewportHeight * 0.3;
      
      if (isInViewport) {
        // Check if this is the most visible section
        const allSections = document.querySelectorAll('section[id], div[id]');
        let isMostVisible = true;
        
        allSections.forEach((section) => {
          if (section.id !== sectionId) {
            const rect = section.getBoundingClientRect();
            
            // Calculate how much of each section is visible
            const currentVisibility = Math.min(
              viewportHeight * 0.7 - currentRect.top,
              currentRect.bottom - viewportHeight * 0.3
            );
            
            const otherVisibility = Math.min(
              viewportHeight * 0.7 - rect.top,
              rect.bottom - viewportHeight * 0.3
            );
            
            // If another section is more visible, this one is not the most visible
            if (otherVisibility > currentVisibility && otherVisibility > 0) {
              isMostVisible = false;
            }
          }
        });
        
        setIsActive(isMostVisible);
      } else {
        setIsActive(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup function
    return () => {
      if (section) {
        observer.unobserve(section);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionId]);

  return (
    <a
      href={href}
      onClick={onClick}
      className={`font-medium transition-colors ${
        isActive ? "text-[#27BCB9]" : "text-[#BDBDBD] hover:text-[#27BCB9]"
      }`}
    >
      {children}
    </a>
  );
} 