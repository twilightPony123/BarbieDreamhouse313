/**
 *  DO SOME JQUERY TO PULL FROM THE SERVER AND POPULATE THE DIV 
 *  TAG!!!
 */


$(function() {
    var data = [
"Dark Chocolate","Milk Chocolate","Crackers","Pepperoni","Salami","Cocoa Powder","Almond Milk","Frosted Flakes","Hotdog","Beef Franks","Roast Beef","Chicken Breast","Chicken","Tuna","Bagel","White Bread","Olives","Wheat Bread","Abalone","Achee","Alcohol","All-Purpose Flour","Allspice","Almond","Almond Extract","Amaretto","Anchovies","Anchovy","Angel Hair","Anise" ,"Apple" ,"Apple Juice" ,"Apricot" ,"Artichoke" ,"Arugula" ,"Asiago Cheese" ,"Asparagus" ,"Avocado" ,"Baby Spinach" ,"Bacon" ,"Bagel" ,"Baking Powder" ,"Baking Soda" ,"Balsamic Vinegar" ,"Banana" ,"Barbecue Sauce" ,"Barley" ,"Basil" ,"Bay Leaves" ,"Bean Sprouts" ,"Beans" ,"Beef" ,"Beer" ,"Beet" ,"Beets" ,"Bell Pepper" ,"Bisquick" ,"Black Bean" ,"Black Beans" ,"Black Pepper" ,"Blackberries" ,"Black-Eyed Peas" ,"Blanch" ,"Blender" ,"Blue Cheese" ,"Blueberries" ,"Bok Choy" ,"Bosc Pear" ,"Bouillon" ,"Brandy" ,"Bread Crumbs" ,"Bread Machine" ,"Brie" ,"Broccoli" ,"Broccoli Rabe" ,"Brown Rice" ,"Brown Sugar" ,"Brussels Sprouts" ,"Bucatini" ,"Butter" ,"Buttermilk" ,"Butternut Squash" ,"Cabbage" ,"Calamari" ,"Candy Corn" ,"Cannellini Bean" ,"Canola Oil" ,"Cantaloupe" ,"Caper" ,"Caraway Seed" ,"Cardamom" ,"Carrot" ,"Carrots" ,"Cashew" ,"Cauliflower" ,"Caviar" ,"Cayenne" ,"Celeriac" ,"Celery" ,"Celery Seed" ,"Chai" ,"Champagne" ,"Chayote" ,"Cheddar Cheese" ,"Cherries" ,"Chervil" ,"Chestnut" ,"Chick peas" ,"Chicken" ,"Chile" ,"Chili Oil" ,"Chili Paste" ,"Chili Powder" ,"Chives" ,"Chutney" ,"Cider Vinegar" ,"Cilantro" ,"Cloves" ,"Cocoa" ,"Coconut" ,"Coconut Milk" ,"Cod" ,"Coffee" ,"Cooking Oil" ,"Cooking Spray" ,"Coriander" ,"Corn" ,"Corn Starch" ,"Corned Beef" ,"Cornmeal" ,"Cornstarch" ,"Cottage Cheese" ,"Couscous" ,"Crab" ,"Cranberries" ,"Cranberry" ,"Crayfish" ,"Cream" ,"Cream Cheese" ,"Cream of Mushroom" ,"Cream of Tartar" ,"Creme fraiche" ,"Crouton" ,"Cucumber" ,"Cumin" ,"Curry" ,"Daikon" ,"Dal" ,"Dates" ,"Diet Cola" ,"Dijon Mustard" ,"Dill" ,"Duck" ,"Dukka" ,"Egg" ,"Eggplant" ,"Eggs" ,"Endive" ,"Escargot" ,"Evaporated Milk" ,"Extra Virgin Olive Oil" ,"Farfalle" ,"Fava Bean" ,"Fennel" ,"Feta" ,"Fig" ,"Figs" ,"Fish Sauce" ,"Flour" ,"Food Coloring" ,"Food Processor" ,"Fruit" ,"Garlic" ,"Gelatin" ,"Ginger" ,"Ginger Powder" ,"Ginger Root" ,"Gluten" ,"Goat Cheese" ,"Goose" ,"Gorgonzola" ,"Gouda" ,"Graham Cracker" ,"Grand Marnier" ,"Granny Smith" ,"Grape Leaves" ,"Grapefruit" ,"Grapes" ,"Green Bell Pepper" ,"Green Onion" ,"Greens" ,"Grill" ,"Grits" ,"Ground Beef" ,"Ground Pepper" ,"Ground Turkey" ,"Habanero Pepper" ,"Half and Half" ,"Ham" ,"Hazelnut" ,"Herb" ,"Herbes de Provence" ,"Hoisin Sauce" ,"Honey" ,"Horseradish" ,"Italian Parsley" ,"Italian Seasoning" ,"Jalapeno" ,"Jerk Spice" ,"Jerusalem Artichoke" ,"Jicama" ,"Kale" ,"Karo Syrup" ,"Ketchup" ,"Kiwi" ,"Kosher Salt" ,"Ladyfingers" ,"Lamb" ,"Lard" ,"Leek" ,"Leeks" ,"Lemon" ,"Lemon Grass" ,"Lentil" ,"Lettuce" ,"Lima Bean" ,"Lime" ,"Lime Juice" ,"Liver" ,"Lobster" ,"Mace" ,"Mahi Mahi" ,"Mango" ,"Mangos" ,"Manicotti" ,"Maple Syrup" ,"Margarine" ,"Marinade" ,"Marjoram" ,"Marsala" ,"Marshmallow" ,"Marzipan" ,"Masa" ,"Mascarpone" ,"Mayo" ,"Mayonnaise" ,"Melon" ,"Mesclun" ,"Milk" ,"Mint" ,"Mirin" ,"Miso" ,"Mizuna" ,"Molasses" ,"Mother Sauces" ,"Mozzarella" ,"Mushroom" ,"Mushrooms" ,"Mussels" ,"Mustard" ,"Nectarine" ,"Neufchatel Cheese" ,"Nonreactive" ,"Nori" ,"Nutmeg" ,"Oats" ,"Okra" ,"Olive" ,"Olive Oil" ,"Onion" ,"Onion Powder" ,"Orange" ,"Orange Juice" ,"Oranges" ,"Oregano" ,"Organic" ,"Orzo" ,"Oyster" ,"Oyster Sauce" ,"Pancetta" ,"Papaya" ,"Paprika" ,"Parmesan" ,"Parmigiano-Reggiano" ,"Parsley" ,"Parsnips" ,"Pasta" ,"Pawpaw" ,"Peach" ,"Peanut Butter" ,"Pear" ,"Peas" ,"Pecan" ,"Pecans" ,"Penne" ,"Peppercorn" ,"Persimmons" ,"Phyllo" ,"Pimento" ,"Pine Nut" ,"Pineapple" ,"Pistachio" ,"Pita" ,"Plum" ,"Plum Tomatoes" ,"Polenta" ,"Pomegranate" ,"Poppy Seed" ,"Pork" ,"Pork Tenderloin" ,"Port" ,"Potato" ,"Powdered Sugar" ,"Prosciutto" ,"Provolone" ,"Prune" ,"Puff Pastry" ,"Pumpkin" ,"Queso Fresco" ,"Rabbit" ,"Raclette Cheese" ,"Radicchio" ,"Radish" ,"Raisins" ,"Raspberry" ,"Red Bell Pepper" ,"Red Onion" ,"Red Pepper Flakes" ,"Red Wine" ,"Red Wine Vinegar" ,"Rhubarb" ,"Rice" ,"Rice Wine Vinegar" ,"Ricotta" ,"Risotto" ,"Romaine" ,"Roquefort" ,"Rosemary" ,"Rotini" ,"Roux" ,"Saffron" ,"Sage" ,"Sake" ,"Salmon" ,"Salt" ,"Sangria" ,"Sashimi" ,"Sauerkraut" ,"Sausage" ,"Savory" ,"Scallion" ,"Scallop" ,"Scallops" ,"Scotch Bonnet Chilies" ,"Season" ,"Seasonings" ,"Sesame Oil" ,"Sesame Seed" ,"Shallot" ,"Shellfish" ,"Sherry" ,"Shiso" ,"Shortening" ,"Shrimp" ,"Simple Syrup" ,"Snap Peas" ,"Snow Pea" ,"Soba" ,"Sorbet" ,"Sour Cream" ,"Soy Sauce" ,"Soybeans" ,"Spaghetti Sauce" ,"Spice" ,"Spinach" ,"Splenda" ,"Sprouts" ,"Squash" ,"Star Anise" ,"Steak" ,"Stilton" ,"Stone Fruits" ,"Strawberries" ,"Strawberry" ,"Sugar" ,"Sun-Dried Tomato" ,"Sunflower Seeds" ,"Sushi" ,"Sweet Peppers" ,"Sweet Potato" ,"Swiss Chard" ,"Swiss Cheese" ,"Tabasco" ,"Taco Seasoning" ,"Tahini" ,"Tamarind" ,"Tangelo" ,"Tapioca" ,"Tarragon" ,"Tart" ,"Tartar Sauce" ,"Tartlet" ,"Tea" ,"Tenderloin" ,"Tequila" ,"Teriyaki Sauce" ,"Thyme" ,"Tilapia" ,"Tofu" ,"Tomatillo" ,"Tomato" ,"Tomato Paste" ,"Tomatoes" ,"Tortilla" ,"Triple Sec" ,"Trout" ,"Tuna" ,"Turkey" ,"Turmeric" ,"Turnip" ,"Udon" ,"Vadalia" ,"Vanilla" ,"Veal" ,"Vegetable oil" ,"Velveeta" ,"Venison" ,"Vermouth" ,"Vinaigrette" ,"Vinegar" ,"Vodka" ,"Waffle" ,"Walla Walla Onion" ,"Walnut" ,"Wasabi" ,"Water Chestnut" ,"Watercress" ,"Watermelon" ,"Wheat" ,"White Chocolate" ,"White Pepper" ,"White Vinegar" ,"White Wine" ,"Wild Rice" ,"Worcestershire sauce" ,"Yam" ,"Yeast","Yellow Bell Pepper" ,"Yogurt","Zucchini"
    ];
    $("#ingredient").autocomplete({
        source: data
    });
});


function fillList() {
   if(document.getElementById("ingredient").value != "")
   {
	  var storage = document.getElementById("list").value + ":" + document.getElementById("ingredient").value;
      document.getElementById("list").value = storage;
	   
      var prevInnerHtml = new String();
      prevInnerHtml = document.getElementById("textdiv").innerHTML;
      prevInnerHtml = prevInnerHtml.concat(document.getElementById("ingredient").value + "<br />");
      document.getElementById("textdiv").innerHTML = prevInnerHtml;
      document.getElementById("ingredient").value = "";
   }
}
 function clearlist() {
   document.getElementById("textdiv").innerHTML = "";
   document.getElementById("list").value = "";
 }
