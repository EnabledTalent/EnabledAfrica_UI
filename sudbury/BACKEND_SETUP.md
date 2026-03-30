# Backend setup (Enabled Africa)

This guide outlines how to connect the UI to real APIs instead of mock data.

## API base URLs

Configure in a `.env` file at the project root (Create React App):

```bash
REACT_APP_AUTH_BASE_URL=https://your-auth-service.example.com
REACT_APP_BUSINESS_BASE_URL=https://your-business-service.example.com
```

If unset, the app falls back to the previous default Render hosts until you deploy Enabled Africa services.

## Suggested API structure

Expose REST (or GraphQL) endpoints for:

- Authentication (register, login, token refresh)
- Profiles (student, employer, service provider)
- Jobs, applications, and employer dashboards

Align route paths with the clients in `src/services/`.

## Data sources

Replace placeholder integrations with your Enabled Africa data providers (job boards, training partners, regional APIs, etc.) and document each source in your deployment runbook.
