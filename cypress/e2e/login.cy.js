describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
          cy.visit('https://login.qa.studio/'); //зашли на сайт
          cy.get('#mail').type('german@dolnikov.ru'); // нашли поле логин и ввели логин
          cy.get('#pass').type('iLoveqastudio1'); //нашли поле пароль и ввели пароль
          cy.get('#loginButton').click(); //нашли кнопку войти и нажали на нее
          cy.get('#messageHeader').contains('Авторизация прошла успешно'); // вижу текст об успешной авторизации
          cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
          cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден
     })
     it('Восстановить пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //нашли кнопку забыли пароль и проверили цвет
        cy.get('#forgotEmailButton').click(); //нашли кнопку и нажали на нее
        cy.get('#mailForgot').type('mmrkmmrk@yandex.ru'); //нашли поле логин и ввели почту
        cy.get('#restoreEmailButton').click(); //нашли кнопку отпроавить код и нажали на нее
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');  //вижу текст что пароль отправили
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден
    })
    it('Правильный логин и НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // нашли поле логин и ввели логин
        cy.get('#pass').type('iLoveqastudio3'); //нашли поле пароль и ввели НЕверный пароль
        cy.get('#loginButton').click(); //нашли кнопку войти и нажали на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // вижу текст что такого логина и пароля нет
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден
    })
    it('НЕправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('germaan@dolnikov.ru'); // нашли поле логин и ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); //нашли кнопку войти и нажали на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // вижу текст что такого логина и пароля нет
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден
    })
    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // нашли поле логин и ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); //нашли кнопку войти и нажали на нее
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // вижу текст проблема валидации
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден
    })
    it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // нашли поле логин и ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); //нашли кнопку войти и нажали на нее
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // вижу текст об успешной авторизации
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден
    })
    describe('Покупка аватара', function () {                                // название набора тестов
        it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
             cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
             cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
             cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
             cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
             cy.wait(2000);
             cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
             cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
             cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
             cy.get('.credit').type('4620869113632996');                     // вводим номер карты
             cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
             cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
             cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
             cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
             cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
             cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
             cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
         });
     });
    
 })
 


