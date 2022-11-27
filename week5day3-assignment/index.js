var vm = new Vue({
    el : '#vue',
    data : {
        htmlcontent1: null,
        htmlcontent2: null,
        htmlcontent3: null,
        htmlcontent4: null,
        htmlcontent5: null,
        htmlcontent6: null,
        htmlcontent7: null,
        htmlcontent8: null,
        htmlcontent9: null,
        htmlcontent10: null,
        htmlcontent11: null,
        htmlcontent12: null,
        images : {
            image1: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg',
            image2: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg',
            image3: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg',
            image4: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg',
            image5: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg',
            image6: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg',
            image7: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg',
            image8: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg',
            image9: 'https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg',
            image10: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg',
            image11: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG',
            image12: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg',
        }
    },

    data() {
        return {
            image1: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg',
            image2: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg',
            image3: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg',
            image4: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg',
            image5: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg',
            image6: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg',
            image7: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg',
            image8: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg',
            image9: 'https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg',
            image10: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg',
            image11: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG',
            image12: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg',
        }
    },
    
    created() {
        this.htmlcontent1 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>Pasta</b></h4>
          <p style="font-style: italic;">Healthy Pasta</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent2 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg
        " class="recipe">
        <div class="container">
          <h4><b>Red Crab</b></h4>
          <p style="font-style: italic;">Fresh from Alaska</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent3 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>Breakfast Special</b></h4>
          <p style="font-style: italic;">Good for the soul</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent4 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>Sea Shells Mix</b></h4>
          <p style="font-style: italic;">For the shell lovers</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent5 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>Ultimate Kebab</b></h4>
          <p style="font-style: italic;">The best from Middle East</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent6 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>Chicken Steak</b></h4>
          <p style="font-style: italic;">Grilled to perfection</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent7 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>Filet Mignon</b></h4>
          <p style="font-style: italic;">Juicy steak served with potatoes and grain</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent8 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>Bistro Brunch</b></h4>
          <p style="font-style: italic;">A touch of Australia</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent9 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>California Crepe</b></h4>
          <p style="font-style: italic;">Stuffed with grilled shrimp</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent10 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>Top Burger</b></h4>
          <p style="font-style: italic;">The tallest hamburger from Peru</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent11 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>Chicken Garlic Pizza</b></h4>
          <p style="font-style: italic;">Our speciality pizza</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
      this.htmlcontent12 = `<div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg" alt="Avatar" class="recipe">
        <div class="container">
          <h4><b>Wok away healthy</b></h4>
          <p style="font-style: italic;">Healthy blend of noodles and vegies</p>
          <button style="cursor: pointer; background-color: white;">Add to Cart</button>
        </div>
      </div>`;
    }
    
})