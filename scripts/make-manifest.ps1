#requires -Version 7

# Takes the manifest from ~/eng/manifest and creates it in ~/artifacts/manifest.zip
param ()

$ErrorActionPreference = "Stop"

Push-Location "$PSScriptRoot/.."
try {
  New-Item -ItemType Directory -Force artifacts/manifests | Out-Null

  Get-ChildItem -Directory "apps" | ForEach-Object {
    $appName = $_.BaseName

    $output = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath("artifacts/manifests/$appName.zip")
    Compress-Archive -Path "$($_.FullName)/*" -DestinationPath $output -Force
    Write-Host "$appName manifest created at $output"
  }
}
Finally {
    Pop-Location
}
