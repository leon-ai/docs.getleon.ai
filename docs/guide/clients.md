---
slug: /clients
sidebar_position: 7
---

# Clients

Clients are what the end users see and explicitly use. This is thanks to the clients you can interact with Leon.

## Web App

![Leon's Web App](/img/guide/web-app_client_en.png "Leon's Web App")

The web app is the only client today. It allows you to interact with Leon via your browser.

:::tip Tip
From the `.env` file, you can edit the `LEON_HOST` environment variable with your machine IP address to access Leon from the outside.
:::

Once Leon is installed, you can access to this client by following one of the next sections.

### Development

```bash
# Run the server in development
npm run dev:server

# Run the web app in development
npm run dev:app

# Go to http://localhost:4242
# Hooray! Leon is running
```

### Production

```bash
# Build
npm run build

# Run
npm start

# Go to http://localhost:1337
# Hooray! Leon is running
```
