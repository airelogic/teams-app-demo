#requires -Version 7

# Takes the manifest from ~/eng/manifest and creates it in ~/artifacts/manifest.zip
param ()

$ErrorActionPreference = "Stop"

Push-Location "$PSScriptRoot/.."
try {
    $output = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath("artifacts/manifest.zip")
    New-Item -ItemType Directory -Force artifacts | Out-Null
    Compress-Archive -Path "eng/manifest/*" -DestinationPath $output -Force
    Write-Host "Manifest created at $output"
}
Finally {
    Pop-Location
}
