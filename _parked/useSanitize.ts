import DOMPurify from 'dompurify';
import { useCallback } from 'react';

export const useSanitize = () => {
      const clean = useCallback((dirty: string) => {
            return DOMPurify.sanitize(dirty, {
                  USE_PROFILES: { html: true },
                  // Specifically forbid certain tags that cause trouble
                  FORBID_TAGS: ['style', 'script', 'iframe'],
            });
      }, []);

      return { clean };
};