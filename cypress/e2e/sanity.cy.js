/// <reference types="cypress" />

describe('Sanity ', {defaultCommandTimeout:10000}, () => {

  
  const home= '#menu-item-31';
  const about='#menu-item-36';
  const products='#menu-item-32';
  const services='#menu-item-34';
  const tools='#menu-item-35';
  const promotions='#menu-item-673';
  const careers='#menu-item-1589';
  const blog='#menu-item-1725';
  const faqs='#menu-item-1727';
  const contact='#menu-item-1726';


  beforeEach(() => {
        cy.visit('/')
    });


  it('right url opened', () => {
    cy.url().should("eq", "https://consumersenergymanagement.ca/");
  })

  it('Home btn', ()=>{
    cy.get(home).click();
    cy.contains('About').should('be.visible');
  })

  it('About btn', ()=>{
    cy.get(about).click();
    cy.contains('About').should('be.visible');
  })

  it('Products btn', ()=>{
    cy.get(products).click();
    cy.get('[class="about_midd2"]').should('be.visible');
  })

  it('Services btn', ()=>{
    cy.get(services).click();
    cy.contains('Services').should('be.visible');
  })

  it('Tools btn', ()=>{
    cy.get(tools).click();
    cy.get('[class="inn-tital"]').should('be.visible');
  })

  it('Promotions btn', ()=>{
    cy.get(promotions).click();
    cy.get('[class="default_css"]').should('be.visible');
  })

  it('Careers btn', ()=>{
    cy.get(careers).click();
    cy.get('h1').contains('Careers').should('be.visible');
  })

  it('Blog btn', ()=>{
    cy.get(blog).click();
    cy.get('[class="blog_set clearfix"]').should('be.visible');
  })

  it('FAQs btn', ()=>{
    cy.get(faqs).click();
    cy.get('h1').contains('Frequently Asked Questions').should('be.visible');
  })

  it('Contact btn', ()=>{
    cy.get(contact).click();
    cy.get('[class="contact_d clearfix"]').should('be.visible');
  })

  afterEach(() =>{
    //how to make a loop so the name of the test will get updates? eg: test ss1, test ss 2...
    cy.viewport(800, 600);
    cy.screenshot("test ss");

  })


})