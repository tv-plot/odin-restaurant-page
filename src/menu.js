let isActive = false;

function renderMenu() {
    if (!isActive) {
        const content = document.getElementById("content");
        
        content.replaceChildren();
        renderStarters(content);
        renderMainCourses(content);
        renderDesserts(content);
        isActive = true;
    }
}

function renderStarters(content) {
    const startersContainer = createMenuSection();
    startersContainer.className = "starters-container";
    const starterHeading = document.createElement("h2");
    starterHeading.textContent = "🥗 Starters";
    const starter1 = createMenuItem("Avocado & Herb Bruschetta", `Toasted sourdough topped with smashed avocado, fresh herbs, cherry tomatoes, and a drizzle of cold-pressed olive oil`);
    const starter2 = createMenuItem("Golden Turmeric Soup", `Creamy butternut squash blended with turmeric, ginger, and coconut milk, served with a sprinkle of toasted seeds`);
    const starter3 = createMenuItem("Quinoa Stuffed Mushrooms", `Portobello mushrooms filled with herbed quinoa, spinach, and sun-dried tomatoes, lightly baked to perfection`);

    startersContainer.appendChild(starterHeading);
    startersContainer.appendChild(starter1);
    startersContainer.appendChild(starter2);
    startersContainer.appendChild(starter3);

    content.appendChild(startersContainer);
}

function renderMainCourses(content) {
    const mainCourseContainer = createMenuSection();
    const mainCourseHeading = document.createElement("h2");
    mainCourseHeading.textContent = "🍽️ Main Course";
    const mainCourse1 = createMenuItem("Grilled Salmon & Green Bowl", `Atlantic salmon fillet served over a bed of kale, edamame, cucumber ribbons, and sesame-ginger dressing`);
    const mainCourse2 = createMenuItem("Harvest Grain Plate", `Warm farro, roasted seasonal vegetables, chickpeas, and tahini drizzle with fresh lemon zest`);
    const mainCourse3 = createMenuItem("Zucchini Noodle Primavera", `Spiralized zucchini tossed in a light basil pesto with heirloom tomatoes, pine nuts, and shaved parmesan`);

    mainCourseContainer.appendChild(mainCourseHeading);
    mainCourseContainer.appendChild(mainCourse1);
    mainCourseContainer.appendChild(mainCourse2);
    mainCourseContainer.appendChild(mainCourse3);

    content.appendChild(mainCourseContainer);
}

function renderDesserts(content) {
    const dessertsContainer = createMenuSection();
    const dessertsHeading = document.createElement("h2");
    dessertsHeading.textContent = "🍓 Desserts";
    const dessert1 = createMenuItem("Raw Cacao Bliss Balls", `Date and almond energy bites rolled in raw cacao and shredded coconut — naturally sweet, no refined sugar`);
    const dessert2 = createMenuItem("Chia Berry Parfait", `Layers of vanilla chia pudding, mixed berries, and house-made granola`);
    const dessert3 = createMenuItem("Baked Cinnamon Pears", `Warm roasted pears with a drizzle of raw honey, crushed walnuts, and a dollop of coconut yogurt`);
    
    dessertsContainer.appendChild(dessertsHeading);
    dessertsContainer.appendChild(dessert1);
    dessertsContainer.appendChild(dessert2);
    dessertsContainer.appendChild(dessert3);

    content.appendChild(dessertsContainer);
}

function createMenuItem(title, description) {
    const item = document.createElement("div");
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    const descrElement = document.createElement("p");
    descrElement.textContent = description;
    item.appendChild(titleElement);
    item.appendChild(descrElement);

    return item;
}

function createMenuSection() {
    const menuSection = document.createElement("div");
    menuSection.className = "menu-section";
    return menuSection;
}

function deactivate() {
    isActive = false;
}

export { renderMenu, deactivate };