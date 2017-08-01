# Script Variables

$WebApiProjectFolder = ".\Bookshop.WebApi\"
$IntegrationTestProjectFolder = ".\Bookshop.IntegrationTests\"

task RestorePackages {
    exec { dotnet restore }
}

task RunWebApp {
    Set-Location $WebApiProjectFolder
    exec { dotnet run } 
    Set-Location ..\..
}

task WatchWebApp {
    Set-Location $WebApiProjectFolder
    exec { dotnet watch run } 
    Set-Location ..\..
}

task BuildSolution {
    SetConnectionStringForAppVeyorTestDb -Password ""

    If ($env:APPVEYOR -eq $True) {
        SetConnectionStringForAppVeyorTestDb -Password "Password12!"
    }

    exec { dotnet build "Bookshop.sln" }
}

task CleanSolution {
    exec { dotnet clean }
}

task RunIntegrationTests {
    exec { dotnet test "Bookshop.IntegrationTests\Bookshop.IntegrationTests.csproj" }
}

task CreateApiRelease RunCIBuild, {
    Set-Location $WebApiProjectFolder
    exec {dotnet publish }
    Set-Location ..\..
}

Function SetConnectionStringForAppVeyorTestDb {
    param([string]$Password)

    $a = Get-Content "$IntegrationTestProjectFolder\appSettings.json" -raw | ConvertFrom-Json
    $a.ConnectionStrings | % {$_.AppVeyorPassword="$Password"}
    $a | ConvertTo-Json  | set-content "$IntegrationTestProjectFolder\appSettings.json"
}

task RunCIBuild CleanSolution, RestorePackages, BuildSolution, RunIntegrationTests