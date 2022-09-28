// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import recipesString from './data.js'; 
// Import any additional modules you want to include below \/

const recipes = JSON.parse(recipesString);
Object.entries(recipes).forEach(cardGroup => {
    const sections = [...document.querySelectorAll('main section')];
    cardGroup[1].map(card => {
        sections.forEach(section => {
            if (card.type === section.id) {
                let cardHTML = `<div class="card m-3" style="width: 18rem;">
               <img src="${card.image}" class="card-img-top" alt="Baked Goods" height="200rem" />
               <div class="card-body">
                 <h4 class="card-title">${card.title}</h4>
                 <h6>${card.author}</h6>
                 <p class="border-top border-secondary pt-2">Ingredients: ${card.ingredients.join(", ")}</p>
               </div>
             </div>`
                section.innerHTML += cardHTML;
            }
        });
    });
});