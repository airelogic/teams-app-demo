#requires -Version 7

param ()

$ErrorActionPreference = "Stop"

Push-Location "$PSScriptRoot/.."
try {
    $output = "dist/manifest.zip"
    Compress-Archive -Path "eng/manifest/*" -DestinationPath $output -Force
    Write-Host "Manifest created at $output"
}
Finally {
    Pop-Location
}
