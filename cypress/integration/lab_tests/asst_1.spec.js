function checkClassname($el) {
  const className = $el.attr('class');
  expect(className).to.exist;
  expect(className.includes('.')).to.be.false;
  expect(className).to.have.length.greaterThan(0);
}

function checkImageSize($img, max) {
  expect($img[0].naturalWidth).to.be.greaterThan(0);
  expect($img[0].width).to.be.lessThan(max);
}

describe('Assignment 1', () => {
  it('Successfully loads with valid HTML', () => {
    cy.fixture('test_values').then((json) => {
      const labUrl = `${json.test_context || ''}/answer_key/private/asst-1/`;
      cy.visit(labUrl); // change URL to match your dev URL
      cy.htmlvalidate();
    });
  });

  it('Has a correctly crafted header', () => {
    cy.get('div.header h1');
  });

  it('Has a header image smaller than 355px', () => {
    // cy.get('div.header img')
    //   .invoke('width')
    //   .should('be.lt', 355);

    cy.get('div.header img')
      .should('be.visible')
      .and(($img) => { checkImageSize($img, 355); });
  });

  it('Has a content wrapper div for positioning elements', () => {
    cy.get('div.wrapper');
  });

  it('Has a content container div', () => {
    cy.get('.wrapper .container');
  });

  it('Has two content columns', () => {
    cy.get('.wrapper .container > div')
      .should('have.length', 2)
      .each(checkClassname);
  });

  it('Has an image column with caption', () => {
    cy.get('div img + p');
  });

  it('Has a descriptive passage block and an ordered list, with a header', () => {
    cy.get('div > h2 + p + ol');
  });

  it('Each list element contains a text header with content', () => {
    cy.get('div > ol > li > h2')
      .then(($el) => {
        expect($el).to.have.length(3);
      });
  });

  it('Each list entry has a sub-list with text', () => {
    cy.get('div > ol').within(($el) => {
      cy.get('ul')
        .should('have.length', 3);
      cy.get('ul')
        .each(checkClassname);
      cy.get('ul li')
        .should('have.length', 9);

      cy.get('div')
        .should('have.length', 3);
      cy.get('div')
        .each(checkClassname);
    });
  });
});