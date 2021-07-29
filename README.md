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
- In MS Teams, upload the manifest from `artifacts/manifest.zip`

## Deploying the app in production

The process is automated in AzureDevOps, to run whenever the `main` branch is pushed to.

The process can be summarized as:

1. Run the build
1. Take everything in the ~/dist folder and store it in a branch called "gh-pages"
1. GitHub will then publish that branch at https://airelogic.github.io/teams-app-demo/
1. Upload the manifest as an artifact to AzureDevOps
