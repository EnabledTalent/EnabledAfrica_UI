# EnabledAfrica_UI

React application for **Enabled Africa** lives in [`enabled-africa-ui/`](./enabled-africa-ui/). From that folder run `npm install` and `npm start`.

## Deploy `enabled-africa-ui`

Your repo root stays here; hosts run install + build inside **`enabled-africa-ui`**.

### Netlify

1. **Add new site** → Import from Git → pick this repo.
2. Netlify reads [`netlify.toml`](./netlify.toml): build command and `publish` folder are already set.
3. Deploy. Client-side routes work via the SPA redirect in that file.

### Vercel

1. **New Project** → import this repo.
2. Leave **Root Directory** as **`.`** (repository root). [`vercel.json`](./vercel.json) points install/build/output at `enabled-africa-ui`.
3. Deploy.

### Render (Static Site)

- **Build command:** `cd enabled-africa-ui && npm install && npm run build`
- **Publish directory:** `enabled-africa-ui/build`

### If GitHub still shows `sudbury/`

Sync your branch: `git pull origin main`. The app folder was renamed to **`enabled-africa-ui/`**; deployment configs assume that name.
