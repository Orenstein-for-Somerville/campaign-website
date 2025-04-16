# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/becadf3f-7109-4589-8340-b8fab4cada4d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/becadf3f-7109-4589-8340-b8fab4cada4d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy with Lovable

Simply open [Lovable](https://lovable.dev/projects/becadf3f-7109-4589-8340-b8fab4cada4d) and click on Share -> Publish.

### Deploy to Netlify

This project uses Netlify Functions for secure backend operations (like Airtable integration).

1. Connect your GitHub repository to Netlify

2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

3. Set the following environment variables in the Netlify dashboard:
   - `AIRTABLE_API_KEY` - Your Airtable API key for subscriber form
   
4. Deploy your site

### Testing Netlify Functions Locally

To test the serverless functions locally before deploying:

1. Install the Netlify CLI dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with your API keys:
   ```
   AIRTABLE_API_KEY=your_api_key_here
   ```

3. Run the Netlify dev server:
   ```bash
   npm run netlify-dev
   ```

This will start a local development server that includes both your frontend and the Netlify Functions.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
