describe("Auth", function() {
  it("should successfully create a user, logout and login", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Login");

    // Cadastra um novo usuário
    cy.contains("Cadastre-se aqui").click();
    cy.contains("Novo usuário");
    cy.get("#name").type("Bruno Nardini");
    cy.get("#login").type("fake@email.com");
    cy.get("#password").type("123456789");
    cy.contains(/cadastrar/i).click();
    cy.contains("Cursos Online");

    // Logout
    cy.contains(/Bruno Nardini/i).click();
    cy.contains(/sair/i).click();

    // Login com o usuário criado
    cy.contains("Login");
    cy.get("#login").type("fake@email.com");
    cy.get("#password").type("123456789");
    cy.contains(/entrar/i).click();
    cy.contains("Cursos Online");
  });
});
