using Microsoft.EntityFrameworkCore.Migrations;

namespace NestBackProject.Migrations
{
    public partial class AboutTableExpend : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Content2",
                table: "Abouts",
                maxLength: 1000,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Content2",
                table: "Abouts");
        }
    }
}
