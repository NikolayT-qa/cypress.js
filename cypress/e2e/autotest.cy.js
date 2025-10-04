describe('Автотест авторизация', function () {
    it('Позитивная авторизация', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('qa_one_love1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');})

   it ('Востановление пароля', function (){
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('tester@yandex.ru');
        cy.get('#restoreEmailButton').click();;
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
        cy.get('#message').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');})

   it ('Авторизация с неверным паролем', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('qa_one_love7');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');})

   it ('Авторизация с неверным логином', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('tester@dolnikov.ru');
       cy.get('#pass').type('qa_one_love1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');})

   it('Проверка валидации логина', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('germandolnikov.ru');
       cy.get('#pass').type('qa_one_love1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
       cy.get('#messageHeader').should('be.visible');})

   it('Проверка не важности регистра в логине', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type('qa_one_love1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');})
   
    it('Тест пукупки авататара', function () {
       cy.visit('https://pokemonbattle.ru/');   //заходим на сайт
       cy.get('#k_email').type('LOGIN');   //вводим верный логин
       cy.get('#k_password').type('PASSWORD');      //вводим верный пароль
       cy.get('.MuiButton-root').click();       //нажимаем кнопку войти
       cy.get('.header_card_trainer').click();  //заходим на страницу тренера
       cy.get('[data-qa="shop"]').click();      //Переходим в магазин аватаров
       cy.get('li.shop__item.available').contains('Купить').click();    //находим не купленный аватар и нажимаем Купить
       cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111 1111 1111 1111'); //вводим карту
       cy.get(':nth-child(1) > .style_1_base_input').type('11/26'); //вводим срок
       cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');  //вводим код
       cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('German');   // вводим имя хозяина карты
       cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажимаем оплатить
       cy.get('.style_1_base_input').type('56456'); //вводим код подтверждения
       cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  //нажимаем отправить
       cy.get('.payment_status_top_title').contains('Покупка прошла успешно');  // окно успеха
       cy.get('.payment_status_top_title').should('be.visible');    // окно успеха видимое
       cy.get('.style_1_base_link_blue').click();}) //возвращаемся в магазин
    
      

})