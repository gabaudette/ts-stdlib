$root = Join-Path $PSScriptRoot "packages"
$packageDirs = Get-ChildItem -Path $root -Directory | Where-Object {
    Test-Path (Join-Path $_.FullName "package.json")
}

$packageDirs | ForEach-Object { Write-Host "Found package: $($_.FullName)" }

foreach ($dir in $packageDirs) {
    Write-Host "Running typedoc in $($dir.FullName)"
    Push-Location $dir.FullName
    npx typedoc
    Pop-Location
}