# --- 1. Base Stage: Install Dependencies and Build ---
# Use a specific Node version suitable for Next.js 15
FROM node:20-slim AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
# Install both dev and prod dependencies needed for the build step
RUN npm install

# Copy application source code
COPY . .

# Build the Next.js application
# This command runs the production build that Next.js will serve
RUN npm run build

# --- 2. Production Runtime Stage: Lean Image ---
# Use a separate, minimal Node image for the final runtime image
FROM node:20-slim AS runner

# Set the environment to production and ensure Node modules are in PATH
ENV NODE_ENV=production
WORKDIR /app

# Copy only the necessary files from the builder stage
# This includes .next directory, public files, and node_modules (production only)
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js will listen on (Cloud Run defaults to 8080)
EXPOSE 3000 

# Cloud Run deployment will inject necessary environment variables (like FIREBASE_API_KEY).
# The entrypoint runs the production start script.
CMD ["npm", "start"]