import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// For migrations and queries
const queryClient = postgres(process.env.DATABASE_URL!);
export const db = drizzle(queryClient, { schema });

// For one-off queries
export const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });