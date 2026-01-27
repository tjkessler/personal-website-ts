# Use official Node.js LTS image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
# Install dependencies (use package.json and package-lock.json if present)
COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Production image, copy only necessary files
FROM node:20-alpine AS prod

WORKDIR /app

# Copy node_modules and built app from previous stage
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/next.config.ts ./next.config.ts

# Expose port (default Next.js port)
EXPOSE 3000

# Set environment variables (override in deployment as needed)
ENV NODE_ENV=production

# Start the Next.js server
CMD ["npm", "start"]