task RestorePackages {
    exec { dotnet restore }
}

task RunWebApp {
    Set-Location .\Bookshop.WebApi
    exec { dotnet run } 
    Set-Location ..\..
}

task WatchWebApp {
    Set-Location .\Bookshop.WebApi
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

task RunCIBuild CleanSolution, BuildSolution, RunIntegrationTests