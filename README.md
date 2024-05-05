# FitForge

A workout planner that helps people develop customized workout routines based on their weight, height, and experience level.

Running FitForge Locally:

1. Clone the GitHub repository and run *npm install* with Node.js installed.
2. Install PostgreSQL. After installation, search for psql in the operating system. Launch the psql command line, and enter through the prompts until it gets to the password prompt (where you then enter the password you created during installation). Execute command *CREATE DATABASE* fitforgedb to create a new database for the application.
3. To link the repository with the newly created database, go to the local repository and follow the commented instructions in the .env.example file
4. Execute *npx prisma db push* to initialize the database tables. The database schema is already defined in the code itself.
5. Run *npx prisma studio* in order to get an interactive user interface for modifying the contents of the database.
6. Run *npm run dev* to start the development server.
