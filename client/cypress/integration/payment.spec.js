describe("Payment", function() {
  it("should successfully make a payment", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Login");

    // Clica no link para mudar de tela
    cy.contains("Cadastre-se aqui").click();

    // Confirma que está na tela de cadastro
    cy.contains("Novo usuário");

    // Prenche os dados no formulário
    cy.get("#name").type("Bruno Nardini");
    cy.get("#login").type("fake@email.com");
    cy.get("#password").type("123456789");

    // Submete o formulário
    cy.contains(/cadastrar/i).click();

    // Confirma que está na tela principal
    cy.contains("Cursos Online");

    // Clica no botão de comprar
    cy.contains(/comprar/i).click();

    // Confirma que está na tela de pagamento
    cy.contains("Pagamento");

    // Clica no botão de concluir a compra
    cy.contains(/concluir compra/i).click();

    // Confirma que está na tela de sucesso
    cy.contains(/pagamento realizado com sucesso/i);
  });
});
