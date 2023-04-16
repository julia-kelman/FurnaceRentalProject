/// <reference types="cypress" />



describe('Sanity ', {defaultCommandTimeout:10000}, () => {

    let provinces= ["Alberta", "Quebec", "Manitoba", "Ontario", "Saskatechewan", "Newfoundland", "NorthwestTerritory", "NovaScotia", "British Columbia" , "NewBrunswick"];


    beforeEach(() => {
        cy.visit('/savings-calculator/')
    });

    // it('calculator page opened', ()=>{
    //     cy.url().should('eq', "https://consumersenergymanagement.ca/savings-calculator/");
    // })

    // it('Provinces test', ()=>{
    //     for(let i=0; i<provinces.length; i++){
    //         //QUESTION: why I can select provinsec which name is one word? and cant select provinces which name is 2 and more words?
    //         //I made a loop, so why when one selection fails all the test stops?
    //         cy.get('#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst').select(provinces[i]).should('contain', provinces[i]);
    //     }
    // })


    it('Cities test', ()=>{
        for(let i=0; i<provinces.length; i++){

        cy.get('#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst').select(provinces[i]);
        cy.get(':nth-child(1) > :nth-child(2) > .Slcst').invoke('val').should('be.above', 1);

                                                       //.invoke('val').should('be.at.least', '1');
                                                       ////.invoke('val').should('be.at.least', '1');
                                                       //.invoke('val').should('be.not.empty');
        
    }
    })


})
