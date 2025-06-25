# TaskManager API

This is a simple ASP.NET Web API for managing tasks.

## Requirements
- .NET 7 SDK
- MSSQL or LocalDB

## Setup
1. Update `appsettings.json` with your SQL Server connection string.
2. Run database migrations (not included) or create the `TaskDb` database manually.
3. Build and run the API:
   ```bash
   dotnet run --project TaskManager.API
   ```
4. The API uses basic authentication. Use `admin:password` for testing.

## Endpoints
- `GET /api/tasks` – List tasks
- `GET /api/tasks/{id}` – Get task by id
- `POST /api/tasks` – Create a task
- `PUT /api/tasks/{id}` – Update a task
- `DELETE /api/tasks/{id}` – Delete a task
