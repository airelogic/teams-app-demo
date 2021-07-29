# teams-app-demo

This is a demo of a teams app pointing at a Forms4Health form.

# Local development

## Running the app

- In VSCode run the "Install npm" task and then "Watch javascript" task, or in a terminal use `npm i && npm run dev`

## Building the app

- In VSCode run the "build" task, or in a terminal run `npm run build`

## Deploying the app locally

- In VSCode run the "Run NGrok" task, or in a terminal use `npm run ngrok`
- In `~/eng/manifest.json`, change the following (but don't commit since its temporary):
  - Add the URL from NGrok to `validDomains`
  - Add the URL from NGrok to the `configurationUrl` of the only `configurableTab`
  - Increase the version number in the manifest
- In VSCode run the "Make manifest" task, or in a terminal use `./scripts/make-manifest.ps1`
- In MS Teams, upload the manifest from `dist/manifest.zip`

## Deploying the app in production
