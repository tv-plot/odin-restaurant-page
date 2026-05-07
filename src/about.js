let isActive = false;

function renderAbout() {
    if (!isActive) {
        const content = document.getElementById("content");

        content.replaceChildren();

        const whoWeAreContainer = document.createElement("div");
        const whoWeAreHeader = document.createElement("h1");
        whoWeAreHeader.textContent = "Who We Are";
        const whoWeAreText = document.createElement("p");
        whoWeAreText.textContent = `We started with a simple belief — that food should heal, energize, and bring joy all at once. Born out of a passion for wholesome living and a love for bold, natural flavors, our restaurant was founded to challenge the idea that healthy eating is bland, boring, or out of reach.
            Our team of nutritionists, chefs, and food enthusiasts work hand in hand to craft a menu that’s as nourishing as it is delicious. Every recipe is thoughtfully developed, every ingredient carefully sourced, and every plate prepared with the kind of care you’d expect from a home kitchen — just with a little more culinary magic.`;
        whoWeAreContainer.appendChild(whoWeAreHeader);
        whoWeAreContainer.appendChild(whoWeAreText);
        
        const visitUsContainer = document.createElement("div");
        const visitUsHeader = document.createElement("h1");
        visitUsHeader.textContent = "Visit Us";

        const addressContainer = document.createElement("div");
        const addressHeader = document.createElement("h2");
        addressHeader.textContent = "📍 Address";
        const addressInfo = document.createElement("p");
        addressInfo.textContent = "42 Greenleaf Avenue, Wellness District, New York, NY 10011";
        addressContainer.appendChild(addressHeader);
        addressContainer.appendChild(addressInfo);
        visitUsContainer.appendChild(addressContainer);

        const openingHoursContainer = document.createElement("div");
        const openingHoursHeader = document.createElement("h2");
        openingHoursHeader.textContent = "🕐 Opening Hours";
        const openingHoursInfo = document.createElement("p");
        openingHoursInfo.setAttribute("style", "white-space: pre;")
        openingHoursInfo.textContent = "Mon - Fri: 8:00 AM - 10:00 PM\nSat - Sun: 9:00 AM - 11:00 PM";
        openingHoursContainer.appendChild(openingHoursHeader);
        openingHoursContainer.appendChild(openingHoursInfo);
        visitUsContainer.appendChild(openingHoursContainer);
        
        const phoneContainer = document.createElement("div");
        const phoneHeader = document.createElement("h2");
        phoneHeader.textContent = "📞 Phone";
        const phoneInfo = document.createElement("p");
        phoneInfo.textContent = `+1 (212) 555-0192`;
        phoneContainer.appendChild(phoneHeader);
        phoneContainer.appendChild(phoneInfo);
        visitUsContainer.appendChild(phoneContainer);

        content.appendChild(whoWeAreContainer);
        content.appendChild(visitUsContainer);
        isActive = true;
    }
}

function deactivate() {
    isActive = false;
}

export { renderAbout, deactivate };