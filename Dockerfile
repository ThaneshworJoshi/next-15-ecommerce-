# ---------- Base ----------
    FROM node:20-bookworm-slim AS base
    WORKDIR /app
    # No apk here. (Debian already has glibc; Sharp works.)
    RUN corepack enable && corepack prepare pnpm@8.15.6 --activate
    
    # ---------- Deps ----------
    FROM base AS deps
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install --frozen-lockfile
    
    # ---------- Build ----------
    FROM base AS builder
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    # Ensure next.config.* includes: export default { output: 'standalone' }
    ENV NEXT_TELEMETRY_DISABLED=1
    RUN pnpm run build
    
    # ---------- Runner ----------
    FROM node:20-bookworm-slim AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    ENV PORT=3000
    
    # Copy standalone bundle + static + public
    COPY --from=builder /app/.next/standalone ./
    COPY --from=builder /app/.next/static ./.next/static
    COPY --from=builder /app/public ./public
    
    # Optional non-root user
    RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
    USER nextjs
    
    EXPOSE 3000
    CMD ["node", "server.js"]