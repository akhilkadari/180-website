import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top when pathname changes - multiple methods for maximum compatibility
    const scrollToTop = () => {
      // Method 1: Direct scroll to top
      window.scrollTo(0, 0);
      
      // Method 2: Scroll the document element
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      
      // Method 3: Scroll the body element
      if (document.body) {
        document.body.scrollTop = 0;
      }
      
      // Method 4: Force scroll after a small delay to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, 0);
        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
        }
        if (document.body) {
          document.body.scrollTop = 0;
        }
      }, 100);
    };

    // Execute immediately
    scrollToTop();
    
    // Also execute after a longer delay to catch any late DOM updates
    const timeoutId = setTimeout(scrollToTop, 300);
    
    // Cleanup timeout
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
