describe ("Traveloka test cases", () => {
    it("Flow traveloka action", () => {
        cy.visit("https://zzzscore.com/1to50/en/");
        for(let i=1 ; i<50; i++){
            cy.get('[style*="opacity: 1"]').eq(i).its('length').should('eq', 1);
            // findElementor.click();
        }
    })
})