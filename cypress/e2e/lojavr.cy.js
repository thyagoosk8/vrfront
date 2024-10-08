    
    //Fluxo de adição de produtos no carrinho

    describe('Compra de produtos VR', () => {
      it('Deve inserir um produto "VR" ao carrinho com sucesso', () => {
      // 1. Acessar site VR
        cy.visit('https://www.vr.com.br');
    
      // 2. Acessar no botão "Compre online"
        cy.contains('Compre online').invoke('removeAttr', 'target').click();
    
      // 3. Acessar a opção "Cartões VR"
        cy.contains('Cartões VR').click();
    
      // 4. Inserir cartões do produto "VR"
        const quantidade = Math.floor(Math.random() * 20) + 1; // Aleatório entre 1 e 20
        cy.contains('VR').click();
        cy.get('input[name="quantidade"]').clear().type(quantidade);
    
      // 5. Inserir crédito para o produto "VR"
        const valorCredito = (Math.random() * 500).toFixed(2); // Valor aleatório entre 0.00 e 500.00
        cy.get('input[name="valorCredito"]').clear().type(valorCredito);
    
      // 6. Clicar no "Adicionar ao carrinho"
        cy.contains('Adicionar ao carrinho').click();
    
      // 7. Validação de produtos adicionados ao carrinho
        cy.get('.carrinho').should('contain', 'VR');
        cy.get('.carrinho').should('contain', `Quantidade: ${quantidade}`);
        cy.get('.carrinho').should('contain', `Crédito: R$ ${valorCredito}`);
      });
    });
    