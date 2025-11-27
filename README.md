# Perps Trading Leaderboard

A Next.js application that tracks and displays a daily trading volume leaderboard for a specific OneKey builder address using the Hydromancer API.

## Setup

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Setup Environment Variables:**
    Create a `.env` file based on the example in the plan (or modify the existing one if accessible):
    ```env
    DATABASE_URL="file:./dev.db"
    HYDROMANCER_API_KEY="your-hydromancer-api-key"
    ONEKEY_BUILDER_ADDRESS="0x..."
    CRON_SECRET="your-secret-key"
    ```

3.  **Initialize Database:**
    ```bash
    npx prisma db push
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## Running the Cron Job

To populate the leaderboard, you need to trigger the cron endpoint. You can do this via `curl`:

```bash
curl -X GET http://localhost:3000/api/cron \
  -H "Authorization: Bearer your-secret-key"
```

(Replace `your-secret-key` with the value of `CRON_SECRET` in your `.env` file).

## Deployment (Vercel)

1.  Push to GitHub.
2.  Import into Vercel.
3.  Set the Environment Variables in Vercel Project Settings.
4.  Set up a Vercel Cron Job by adding a `vercel.json` (optional, or use an external cron service like GitHub Actions or EasyCron to hit the endpoint).
