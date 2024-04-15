describe ("Traveloka test cases", () => {
    it("Flow traveloka action", () => {
        cy.visit("https://www.traveloka.com/en-id");
        cy.wait(4000);
        const buttonCarRental = cy.get(".css-1dbjc4n.r-1pi2tsx.r-bnwqim.r-184en5c").contains("Car Rental");
        buttonCarRental.click({ multiple: true, force: true });

        const buttonWithoutDriver = cy.get(".css-1dbjc4n.r-1h84pjw.r-jwli3a.r-1e081e0.r-5njf8e").contains("Without Driver");
        buttonWithoutDriver.click({ multiple: true, force: true });

        const city = cy.get("input[data-testid='rental-search-form-location-input']");
        city.type("Jakarta{enter}", {force: true});
        cy.wait(4000);
        const selectJakarta = cy.get("h3[data-testid='rental-search-form-location-item-title']").contains("Jakarta");
        selectJakarta.click({force: true});

        const startDate = new Date();
        // Get the year, month, and day components of the new date

        startDate.setDate(startDate.getDate() + 2);

        const startYear = startDate.getFullYear();
        const startMonth = (startDate.getMonth() + 1).toString(); // Month is 0-based, so we add 1
        const startDay = startDate.getDate().toString();
        
        const startRentalDate = `${startDay}-${startMonth}-${startYear}`;

        const getStartDate = "div[data-testid='date-cell-"+`${startRentalDate}`+"']"
        const rentalDateFirst = cy.get(getStartDate, {force: true}).eq(0);
        rentalDateFirst.click({ multiple: true, force: true });

        const startTime = new Date();
        const startHour = startTime.getHours().toString();
        const getStartButton = cy.get("input[data-testid='rental-search-form-time-input-start']");
        getStartButton.click({ multiple: true, force: true });
        cy.wait(4000);
        const getStartValue = cy.get(".css-1dbjc4n.r-1l31rp8.r-kdyh1x.r-rs99b7.r-key0ze.r-1udh08x").eq(0).contains(startHour);
        getStartValue.click({ multiple: true, force: true });
        const buttonStartDone = cy.get("div[aria-live='polite']").eq(1);
        buttonStartDone.click({ multiple: true, force: true });

        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 5);

        const endYear = endDate.getFullYear();
        const endMonth = (endDate.getMonth() + 1).toString(); // Month is 0-based, so we add 1
        const endDay = endDate.getDate().toString();

        const endRentalDate = `${endDay}-${endMonth}-${endYear}`;

        const getEndDate = "div[data-testid='date-cell-"+`${endRentalDate}`+"']"
        const rentalDateSecond = cy.get(getEndDate, {force: true}).eq(1);
        rentalDateSecond.click({ multiple: true, force: true });
        cy.wait(4000);

        const buttonSearch = cy.get("div[data-testid='rental-search-form-cta'");
        buttonSearch.click({force: true});
        cy.wait(4000);

        const buttonContinue = cy.get(".css-1dbjc4n.r-1awozwy.r-13awgt0.r-18u37iz.r-1777fci").eq(9).contains("Continue");
        buttonContinue.click({ multiple: true, force: true });
        const buttonContinueProvider = cy.get(".css-1dbjc4n.r-1awozwy.r-13awgt0.r-18u37iz.r-1777fci").eq(4).contains("Continue");
        buttonContinueProvider.click({ multiple: true, force: true });

        cy.wait(4000);

        const rentalOffice = cy.get(".css-901oao.r-t1w4ow.r-ubezar.r-majxgm.r-135wba7.r-fdjqy7").contains("Rental Office");
        rentalOffice.click({ multiple: true, force: true });
        const selectPickupLocation = cy.get(".css-1dbjc4n.r-13awgt0.r-18u37iz.r-edyy15");
        selectPickupLocation.click({ multiple: true, force: true });
        const pickupLocationDetails = cy.get(".css-901oao.r-t1w4ow.r-1b43r93.r-majxgm.r-rjixqe.r-15zivkp.r-fdjqy7").eq(0);
        pickupLocationDetails.click({ multiple: true, force: true });

        cy.wait(4000);

        const dropoffLocation = cy.get(".css-1dbjc4n.r-1awozwy.r-18u37iz.r-1777fci.r-ymttw5.r-1yzf0co").eq(5);
        dropoffLocation.click({ multiple: true, force: true });
        const typeDropoff = cy.get("input[type='text']").eq(6);
        const dropoff = "Gambir";
        typeDropoff.type(dropoff+"{enter}", { multiple: true, force: true });
        cy.wait(4000);
        const gambirSelected = cy.get("h3[data-testid='undefined-title']").contains(dropoff);
        gambirSelected.click();
        const buttonBookNow = cy.get(".css-18t94o4.css-1dbjc4n.r-kdyh1x.r-1loqt21.r-10paoce.r-5wp0in.r-5njf8e.r-1otgn73.r-lrvibr").contains("Continue");
        buttonBookNow.click({ multiple: true, force: true });
    })
})