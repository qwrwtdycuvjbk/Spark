# Spark

Internal outreach tool for **People Prime Worldwide**. It finds remote tech companies that are hiring, helps recruiters pick a decision-maker, drafts outreach, and only adds contacts to an Apollo sequence after human approval.

Built with JavaScript, REST job-board APIs, SQLite, and the Apollo API.

## What it does

1. **Jobs** — Loads remote tech openings from We Work Remotely, Himalayas, and Remote.io and groups them by company.
2. **Discovery** — Saves companies worth contacting and tracks hiring signals.
3. **Approval queue** — Recruiter reviews company fit, picks a contact (via Apollo), edits the message, and approves.
4. **Apollo campaign** — Approved contacts with verified emails can be added to an Apollo sequence and mailbox. Apollo sends the email; Spark never auto-sends without approval.
5. **Pipeline / Replies** — Tracks stage after approval.

## Stack

- Node.js (local HTTP server)
- Frontend: `src/index.html` + `src/app.js`
- Backend worker: `src/worker.js` (built into `dist/server`)
- SQLite via `node:sqlite` (data in `.data/`)
- Apollo.io API for company/people search and sequence enrollment
- Drizzle for SQL schema files under `drizzle/`

## Requirements

- Node.js 22+ (uses `node:sqlite`)
- An Apollo API key with permission for company search, people search, contact create, and sequence enrollment

## Setup

```bash
cd outreach-tool
npm install
cp .env.example .env   # optional for docs; local keys are entered in the UI
npm run dev
```

Open **http://127.0.0.1:3939/**

On first run the server creates `.data/outreach.sqlite` and an encryption key for storing the Apollo API key.

### Connect Apollo

1. Open **Team & connections**
2. Paste your Apollo API key (stored encrypted locally; never shown again after save)
3. Create/turn on a sequence in Apollo and connect a mailbox there
4. In Spark, load sequences, approve a contact, then add them to the sequence

### Monthly credit guard

Spark reserves up to **100 Apollo credits per month** (Chicago time) for paid company search / enrichment calls, so a runaway click cannot burn the whole plan.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Build worker + start local server on port 3939 |
| `npm run build` | Build `dist/server` only |
| `npm run db:generate` | Generate Drizzle migrations |

Override the port with `PORT=4173 npm run dev`.

## Project layout

```
src/
  index.html      # UI shell
  app.js          # Client app (Jobs, Discovery, Approval, Pipeline)
  worker.js       # API + Apollo + SQLite logic
  ats.js          # Job board / ATS helpers
  boards.json     # Board config
  role-boards.json
drizzle/          # SQL schema
dev.mjs           # Local server
build.mjs         # Bundle worker → dist/server
.data/            # Local DB + encryption key (gitignored)
```

## Safety / privacy

- Do **not** commit `.env`, `.data/`, or Apollo keys
- Apollo credentials are encrypted at rest with a local key in `.data/`
- Every first message and follow-up path is designed around **human approval** before sequence enrollment

## Related

- Live marketplace: [peopleremotely.com](https://peopleremotely.com)
- Marketplace codebase: [qwrwtdycuvjbk/primescale](https://github.com/qwrwtdycuvjbk/primescale)

## License

Private / internal use for People Prime unless you choose otherwise on GitHub.
