# Script Variables

$WebApiProjectFolder = ".\Bookshop.WebApi"

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

task RunCIBuild CleanSolution, BuildSolution, RunIntegrationTests