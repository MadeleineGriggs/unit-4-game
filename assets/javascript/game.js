var ingredientsArray = [
    {"name": "Ground Fairy Wings", "img":"potions1.png"},
    {"name": "Soul of Lavender", "img":"potions2.png"},
    {"name": "Snake Skin", "img":"potions3.png"},
    {"name": "Wormwood", "img":"potions4.png"},
    {"name": "Dead Man's Blood", "img":"potions5.png"},
    {"name": "Billing's Root", "img":"potions6.png"},
    {"name": "Hemlock Root", "img":"potions7.png"},
    {"name": "Soul Snake", "img":"potions8.png"},
]


// When the page is loaded.
$(document).ready(function() {

    var randomPotion = 0;
    var item1Value = 0;
    var item2Value = 0;
    var item3Value = 0;
    var item4Value = 0;
    var currentUserValue = 0;
    var wins = 0;
    var losses = 0;

// Fill in the initial game state
//Generate a random number for the potion 


//runs a Fisher-Yates shuffle on the ingredients array to randomly 
//reorder the array.
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


    function startGame() {
        randomPotion = 0;
        currentUserValue = 0;
        var ingredients = shuffle(ingredientsArray);
        randomPotion = Math.floor((Math.random() * 100) + 1);
        $("#random-potion").empty();
        $("#random-potion").html("The Potion I want is # " + randomPotion);
        console.log(randomPotion);
        //Generate a random potion ingredient 1, assign it a random number value. 
        var item1Index = 0;
        item1Value = Math.floor((Math.random() * 25) + 1);
        var item1Img = "./assets/images/ingredientImages/" + ingredients[item1Index]["img"];
        var item1Name = ingredients[item1Index]["name"];
        $("#ingredient-1").empty();
        $("#ingredient-1").attr("src", item1Img);
        $("#ingredient-1-name").empty();
        $("#ingredient-1-name").html(item1Name + " " + item1Value);
        //Generate a random potion ingredient 2
        var item2Index = 1;
        item2Value = Math.floor((Math.random() * 25) + 1);
        var item2Img = "./assets/images/ingredientImages/" + ingredients[item2Index]["img"];
        var item2Name = ingredients[item2Index]["name"];
        $("#ingredient-2").attr("src", item2Img);
        $("#ingredient-2-name").html(item2Name + " " + item2Value);
        //Generate a random potion ingredient 3
        var item3Index = 2;
        item3Value = Math.floor((Math.random() * 25) + 1);
        var item3Img = "./assets/images/ingredientImages/" + ingredients[item3Index]["img"];
        var item3Name = ingredients[item3Index]["name"];
        $("#ingredient-3").attr("src", item3Img);
        $("#ingredient-3-name").html(item3Name + " " + item3Value);
        //Generate a random potion ingredient 4
        var item4Index = 3;
        item4Value = Math.floor((Math.random() * 25) + 1);
        var item4Img = "./assets/images/ingredientImages/" + ingredients[item4Index]["img"];
        var item4Name = ingredients[item4Index]["name"];
        $("#ingredient-4").attr("src", item4Img);
        $("#ingredient-4-name").html(item4Name + " " + item4Value);

    };

    //Upon Clicking the potion ingredient
    $("#ingredient-1").on("click", function() {
        var ingredientValue = item1Value;
        addIngredients(ingredientValue);
    });

    $("#ingredient-2").on("click", function() {
        var ingredientValue = item2Value;
        addIngredients(ingredientValue);
    });

    $("#ingredient-3").on("click", function() {
        var ingredientValue = item3Value;
        addIngredients(ingredientValue);
    });

    $("#ingredient-4").on("click", function() {
        var ingredientValue = item4Value;
        addIngredients(ingredientValue);
    });

    //adds the value of the ingredient the user clicked to the current value.
    function addIngredients (value) {
        var newValue = value + currentUserValue;
        currentUserValue = newValue;
        console.log(currentUserValue);
        checkWin();
    }

    //after the user has clicked on an item, check if they have won or lost.
    function checkWin() {
        if (currentUserValue > randomPotion) {
            console.log("You lost!");
            potionLost = randomPotion;
            wins++;
            $("#loss-container").append("Potion " + potionLost +" has been ruined!");
            startGame();
        } else if (currentUserValue === randomPotion) {
            console.log("You Won!");
            potionWon = randomPotion;
            losses++;
            $("#wins-container").append("I can hand in Potion " + potionWon);
            startGame();
        }
    }

    startGame();
});