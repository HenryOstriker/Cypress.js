describe('Магазин QA Studio', function () {

    it('Тестирование функций магазина', function () {
       cy.visit('https://testqastudio.me/');
       cy.get('.post-11342 > .product-inner > .product-summary').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
       cy.get('#menu-top > .menu-item-home > a').click();
       cy.get('.post-11337 > .product-inner > .product-summary').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.checkout').click({force: true});
       cy.get('#billing_first_name').type('Геннадий');
       cy.get('#billing_last_name').type('Унгурян');
       cy.get('#select2-billing_country-container').filter(':contains("Россия")');
       cy.get('#billing_address_1').type('улица Алёши Поповича дом 3');
       cy.get('#billing_city').type('Санкт-Петербург');
       cy.get('#billing_state').type('Приморский');
       cy.get('#billing_postcode').type('188544');
       cy.get('#billing_phone').type('+73521273');
       cy.get('#billing_email').type('goblin91@mail.ru');
       cy.get('#place_order').click();   
       cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
    })
})