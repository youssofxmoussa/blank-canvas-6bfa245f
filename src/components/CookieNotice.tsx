import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookieNotice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-notice-accepted');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-notice-accepted', 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 md:left-auto md:right-6 md:max-w-md z-50 p-4 sm:p-5 rounded-2xl border border-white/10 bg-card/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        >
          <button
            onClick={handleAccept}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-muted-foreground leading-relaxed pr-6">
            This website uses essential cookies only for basic functionality. No tracking or advertising cookies are used.{' '}
            <a href="/privacy" className="text-foreground underline hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </p>
          <button
            onClick={handleAccept}
            className="mt-3 px-5 py-2 bg-foreground text-background rounded-full text-xs font-medium hover:opacity-90 transition-opacity"
          >
            Got it
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieNotice;
