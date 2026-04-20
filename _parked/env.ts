import { z } from 'zod';

const envSchema = z.object({
      VITE_API_URL: z.string().url(),
      VITE_APP_NAME: z.string().default('Echo Design Labs'),
});

// If VITE_API_URL is missing or wrong, the app will crash immediately 
// during dev/build rather than failing silently later.
export const ENV = envSchema.parse(import.meta.env);