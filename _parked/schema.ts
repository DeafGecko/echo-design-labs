import { z } from 'zod';

// This acts as a firewall for your data
export const UserProfileSchema = z.object({
  id: z.string().uuid(),
  username: z.string().min(3).max(20),
  bio: z.string().max(500).optional(),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;