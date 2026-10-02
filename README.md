# Make It Print API

Node + TypeScript + Express + MongoDB (Mongoose).

## Setup
```bash
npm install
cp .env.example .env     # then fill in MONGODB_URI and the two JWT secrets
npm run dev
```
Check: http://localhost:5000/health and http://localhost:5000/api/v1/ping

## Scripts
- `npm run dev` - watch mode (tsx)
- `npm run build` - compile to `dist/`
- `npm start` - run compiled build
- `npm run typecheck` - type-check only
