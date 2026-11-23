# Mt. Rainier Trail Site: Accessibility Lab (INFO 442)

A small React app for the INFO 442 accessibility lab. It looks fine, but it has **7 accessibility problems**. Your job is to find them using what you've learned, and fix them.

## Run it

You need [Node.js](https://nodejs.org) version 20 or newer. Check with `node -v`.

```
git clone <REPO-URL>
cd rainier-a11y
npm install
npm run dev
```

Open the link it prints (usually http://localhost:5173) in **Chrome**.

## Step 1: Run Lighthouse

1. Right-click the page → **Inspect** (or press Cmd+Option+I / Ctrl+Shift+I).
2. Open the **Lighthouse** tab (click **»** if you don't see it).
3. Check only **Accessibility**. Device: **Desktop**.
4. Click **Analyze page load**.

Write down your score and what Lighthouse flagged.

## Step 2: Find what Lighthouse missed

Lighthouse doesn't catch everything. Try these, and compare what you find to what you learned:

- **Tab through the whole page** using only the keyboard. Does every link make sense on its own?
- **Read the links out of context.** If you only heard the link text, would you know where it goes?
- **Look at the colors.** Is any information shown *only* by color?
- **Submit the form empty.** Then click into a field. Would a screen reader user know there's an error?
- **Read the code** in `src/App.jsx` and `src/App.css`.

## Step 3: Fix them

We'll fix them together in lab. Re-run Lighthouse when you're done.
