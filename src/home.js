import heroBanner from "./assets/hero-banner.jpg";

let isActive = false;

function renderHome() {
    if (!isActive) {
        const content = document.getElementById("content");

        content.replaceChildren();
        const headline = document.createElement("h1");
        headline.className = "headline";
        headline.textContent = "Wholesome Flavors, Endless Possibilities";
        const imageContainer = document.createElement("div");
        imageContainer.className = "hero-image-container";
        const heroImage = document.createElement("img");
        heroImage.src = heroBanner;
        imageContainer.appendChild(heroImage);
        const info = document.createElement("p");
        info.textContent = `
            Eating healthy is a journey, not a restriction. Out menu is a celebration of nature's finest ingridients -
                    vibrant vegetables, wholesome grains, and nourishing proteins - all brought together in bold satisfying
                    combinations that prove good-for-you food can be genuinely exciting. Every visit is a new discovery, every
                    dish is a reminder that the best flavors come from the earth itself.
        `;
        content.append(headline);
        content.append(imageContainer);
        content.append(info);
        isActive = true;
    }
}

function deactivate() {
    isActive = false;
}

export { renderHome, deactivate };