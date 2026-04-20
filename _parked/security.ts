import DOMPurify from 'dompurify';

/**
 * Echo Design Labs Standard Sanitizer
 * Prevents XSS when rendering dynamic content.
 */
export const sanitizeInput = (html: string): string => {
      return DOMPurify.sanitize(html, {
            ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
            ALLOWED_ATTR: ['href', 'target'],
      });
};

/**
 * Validates Environment Variables
 */
export const validateEnv = (key: string): string => {
      const value = import.meta.env[key];
      if (!value) {
            throw new Error(`[Echo Labs Security]: Missing environment variable ${key}`);
      }
      return value;
};