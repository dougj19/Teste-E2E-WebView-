// cypress/integration/authenticated_tests.js
describe('Testes com Autenticação', () => {  
    beforeEach( ()=> {
      cy.authBack();
      cy.authVisitsWebview();
      
    });
        
    it('Deve acessar a página autenticada', () => {
      
    });
    it('modulo Reembolsos-Solicitações', () => {
      
      cy.wait(3000)
      cy.get('#refunds > .label-wrapper').should('be.visible', 'Reembolsos').click();
      cy.contains('Solicitações').should('be.visible').click();
      cy.get('#button-0').should('be.visible', 'Semana');
      cy.contains('Mês').should('be.visible').click();
      cy.get('input').should('be.visible', 'Selecionar todos').click();
      cy.get('[id="button-2"]').click(); 
      cy.get('.card-refunds-all').should('be.visible', 'Selecionar todos').click();
      cy.get(':nth-child(1) > .visits-input-date-wrapper > .visits-input-date-input').click();
      cy.get('.calendar-picker-control-buttons > :nth-child(1)').click();
      cy.get('tbody > :nth-child(1) > :nth-child(4)').click();
      cy.get('#button-8').click();
      cy.get(':nth-child(1) > [data-v-56232fba=""] > .card-refunds').click();
      cy.get('[id="requests-button"]').contains('Solicitar').should('be.visible').click();
      cy.wait(1000);
      cy.get('#button-10').click({force: true});
      cy.wait(5000);
      cy.get('.ml-2').click();
      cy.get('#btn-send-request-details')//.click();
      
    })
    it('Historico de Reembolso', () => {
      cy.wait(3000);
      cy.get('#refunds > .label-wrapper').should('be.visible', 'Reembolsos').click();
      cy.contains('Histórico de reembolsos').should('be.visible', 'Histórico de reembolsos').click();
      cy.get('.visits-highlight-card-condition-button').click();
      cy.get('#button-0').click();
      cy.wait(2000);
      cy.contains('Total de KM reembolsáveis').should('be.visible');
      cy.get('.ml-2').click();
      cy.wait(2000);
      cy.get('.filter-panel > .flex > p').click();
      cy.get('.filter-dropdown-option-border > :nth-child(2)').click()
      cy.get('.filter-panel > .flex > p').click();
      cy.wait(2000)
      cy.get(':nth-child(3) > :nth-child(2) > p').click();
      cy.get('.filter-button').click();
      cy.get(':nth-child(1) > label > p').click();
      cy.get('#button-1').click();
      cy.get('.filter-button').click();
      cy.get(':nth-child(2) > label').click();
      cy.get('#button-2').click();
      cy.get('.filter-button').click();
      cy.get(':nth-child(3) > label > p').click();
      cy.get('#button-3').click();

    })
    it('Modulo Evolução de Checklist', () => {
      cy.wait(1000)
      cy.get('#checklist-evolution > .icon-wrapper').click();
      cy.get('.visits-select-checkbox-mask').click();
      cy.get(':nth-child(1) > label > p').click();
      cy.get('#vs1__combobox > .vs__actions').click();
      cy.contains('LOJA INTER SHOP GUARULHOS - GUARULHOS - ITAPEJICA').click();
      cy.get('#vs2__combobox > .vs__actions').click();
      cy.wait(7000);
      cy.contains('teste foto').should('be.visible').click();
      cy.get('#button-1').click();
      cy.wait(10000);
      cy.get(':nth-child(4) > strong').click();
      cy.get('.visits-checklist-evolution-detail__frame__title').click();
      cy.get(':nth-child(1) > .checklist-title-combobox > .checklist-icon-dropdown-frame').click();
      cy.get(':nth-child(3) > img').click();
      cy.wait(4000);
      cy.get('.visit-image-viewer-fullscreen > button > .component').click();
      cy.get(':nth-child(2) > .checklist-title-combobox > .checklist-icon-dropdown-frame').click();
      cy.get(':nth-child(1) > .checklist-content > :nth-child(2) > .component').click();
      cy.wait(2000);
      cy.get('.close').click();


    })

    it('Modulo Histórico', () => {
      cy.contains('Histórico').should('be.visible').click();
      cy.contains('Mês').should('be.visible').click();
      cy.get('.walldatapicker-controller > :nth-child(1)').click();
      cy.get('tbody > :nth-child(1) > :nth-child(5)').click();
      cy.get('#modal > .component > .icon_container > svg').click()
      cy.contains('Distância Prevista').should('be.visible');
      cy.get('.text-ui-grey-3').click();
      cy.contains('Visitas').should('be.visible').click();
      cy.get(':nth-child(6) > .datainput-panel > .datainput-content').click();
      cy.contains('Trade Up').should('be.visible');

    })

    it('Modulo Plano de Ação', () => {
      cy.contains('Planos de Ação').should('be.visible').click();
      cy.get('#vs1__combobox > .vs__actions > .vs__open-indicator').click();
      cy.contains('Vencidos').should('be.visible').click();
      cy.get('#button-5').click();
      cy.wait(2000);
      cy.get('#vs1__combobox > .vs__actions > .vs__open-indicator').click();
      cy.contains('Vence em 5 dias').should('be.visible').click();
      cy.get('#button-11').click();
      cy.wait(2000);
      cy.get('#vs1__combobox > .vs__actions > .vs__open-indicator').click();
      cy.contains('Vence em 10 dias').should('be.visible').click();
      cy.get('#button-17').click();
      cy.wait(2000);
      cy.get('#vs1__combobox > .vs__actions > .vs__open-indicator').click();
      cy.contains('Vence em 15 dias').should('be.visible').click();
      cy.get('#button-23').click();
      cy.wait(2000);
      cy.get('#vs1__combobox > .vs__actions > .vs__open-indicator').click();
      cy.contains('Vence em 30 dias').should('be.visible').click();
      cy.get('#button-29').click();
      cy.wait(2000);
      cy.get('#vs1__combobox > .vs__actions > .vs__open-indicator').click();
      cy.contains('Vence após 30 dias').should('be.visible').click();
      cy.get('#button-35').click();
      cy.wait(2000);
      cy.contains('Status').should('be.visible').click();
      cy.get('#vs3__combobox > .vs__actions').click();
      cy.contains('Vencidos').click();
      cy.get('#button-43').click();
      cy.wait(2000)
      cy.get('#vs3__combobox > .vs__actions').click();
      cy.contains('Pendentes').click();
      cy.get('#button-49').click();
      cy.get('#vs3__combobox > .vs__actions').click();
      cy.contains('Concluídos').click();
      cy.get('#button-55').click();
      cy.wait(2000);
      cy.get('#button-58').click();

    })

    it('Modulo Jornadas Favoritas', () => {
      cy.contains('Jornadas Favoritas').should('be.visible').click();
      cy.get('svg').click();
      cy.get('.filter-dropdown-option-border > :nth-child(2) > p').click();
      cy.get('svg').click();
      cy.get(':nth-child(3) > :nth-child(2) > p').click();
      cy.get(':nth-child(1) > .favoritecard-panel').click();
      cy.contains('JORNADAS FAVORITAS').should('be.visible');
      cy.get('.mt-4 > .ml-2').click();
      cy.get('#button-0').click();
      cy.get('.favoriteJourney-wrapper > :nth-child(2) > .modal-panel > .modal-slots-panel > .modal-frame-titleandmodal > .input-container > .modal-input')
      .click().type('Automação');
      cy.get('#button-4').click();
      cy.get('.favorite-journey-header > .local-selection-container').click();
      cy.contains('Teste').click();
      cy.contains('Destino Final?').should('be.visible');
      cy.get('#button-10').click();
      cy.wait(2000)
      cy.contains('ADICIONAR VISITAS').should('be.visible');
      cy.get('#button-13').click();

    })
    it('Modulo Meus Endereços', () => {
      cy.wait(1000);
      cy.contains('Meus Endereços').should('be.visible').click();
      cy.get('.vs__open-indicator').click();
      cy.contains('Escritório Parceiro').should('be.visible').click()
      cy.get('.vs__open-indicator').click();
      cy.contains('Regional').should('be.visible').click();
      cy.get('.vs__open-indicator').click();
      cy.contains('Residencial').should('be.visible');
      cy.get('.vs__open-indicator').click();
      cy.contains('Hotel').should('be.visible');
      cy.get('.vs__open-indicator').click();
      cy.contains('Outros').click();
      cy.get('#new-address-button').click();
      cy.get('.visits-search').click().type('Rua Cesar ladeira 435');
      cy.get(':nth-child(1) > :nth-child(1) > .mt-3').click()
      cy.contains('Por favor, insira um nome para o endereço').should('be.visible')
      cy.get('#nmero-1').click().type('435');
      cy.get('#complemento-1').click().type('casa da paula');
      cy.get('#nomedolocal-1').click().type('Automacao');
      cy.get('#button-0').click();
      cy.get('#button-57').click();
      cy.get('#button-1').click();
      cy.get('#button-60').click();
      cy.get('#button-67').click();      

    })
    it('Modulo Minhas Jornadas Semana e Mês', () => {
      cy.wait(2000);
      cy.contains('Minhas Jornadas').should('be.visible').click();
      cy.contains('Hoje').should('be.visible');
      cy.contains('Semana').should('be.visible');
      cy.contains('Mês').should('be.visible');
      cy.get(':nth-child(2) > .label-wrapper').click();
      cy.wait(1000);
      cy.get('.ml-2').click();
      cy.get(':nth-child(3) > .label-wrapper').click();
      cy.wait(1000);
      cy.get('[style="transform: scaleX(-1);"]').click();
      cy.contains('Criar Jornada').click()
      cy.wait(1000);
      cy.get('[name="journeyName"]').click({force:true}).clear().type('Automacao');
      cy.get('#button-10').click();
      cy.get('#button-12').contains('Não').should('be.visible').click();
      cy.wait(6000);
      cy.get('#button-15').click();
      cy.contains('Teste').click();
      cy.get('#button-18').click();
      cy.wait(6000);
      cy.get('#button-21').click();
      cy.wait(2000);
      cy.get('.datainput-panel').click();
      cy.get('.px-4 > :nth-child(5)').click();
      cy.wait(2000);
      cy.get('#add-visit').click();
      cy.wait(5000);
      cy.get('#button-28').click();
      cy.wait(1000);
      cy.get('#button-30').click();
      cy.get('.ml-2').click();
    })
    it.only('Adicionar uma visita', () => {
      cy.wait(2000);
      cy.contains('Minhas Jornadas').should('be.visible').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .label-wrapper').click();
      cy.get('[name="journeyName"]').click().clear().type('Automacao');
      cy.get('#button-11').click();
      cy.wait(9000);
      cy.get(':nth-child(3) > .icon_container > svg').click();
      cy.wait(1000);
      cy.get(':nth-child(3) > .icon_container > svg').click();
      cy.contains('DEFINA O PONTO DE PARTIDA').should('be.visible').click();
      cy.contains('Rua Bonnard, 980').click();
      cy.get('#button-18').click();
      cy.wait(3000)
      cy.get('#button-21').click();
      cy.wait(2000);
      cy.get('.datainput-buttonarrow').click();
      cy.get('#button-24').click();
      cy.wait(12000);
      cy.get(':nth-child(2) > .check-radio').click();
      cy.get(':nth-child(1) > .visits-select-controller').click();
      cy.get('#checkbox-35').click();
      cy.get(':nth-child(2) > .visits-select-controller').click();
      cy.get(':nth-child(2) > .visits-select-contents > :nth-child(5) > #checkbox-4').click();
      cy.wait(3000);
      cy.get(':nth-child(3) > .visits-select-controller').click();
      cy.get(':nth-child(3) > .visits-select-contents > :nth-child(1) > #checkbox-0').click();
      cy.get(':nth-child(4) > .visits-select-controller').click();
      cy.get('#checkbox-119').click();
      cy.get('#button-27').click();
      cy.get('.datainput-buttonarrow').click();
      cy.wait(3000);
      cy.get('#add-visit').click();


    })


  });