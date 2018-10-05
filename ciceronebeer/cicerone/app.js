// ===========================
// OBJECTS HERE
// IDEAL: add BJCP beers and origins, consider the varying colors, ABV and IBUs for all beers
// ===========================
console.log('so much beer')
$('#answer').hide();
$('#gamerules').hide();
$('#next-level').hide();
$('#timeout').hide();
const beer = {
belgian: [{
        name: 'Gueuze',
        color: 'straw',
        abv: 5,
        fermentation: 'wild',
      },
      {
        name: 'Fruit Lambic',
        color: 'varies',
        abv: 5,
        fermentation: 'wild',
      },
      {
        name: 'Flanders Red Ale',
        color: 'red',
        abv: 4.6,
        fermentation: 'top',
      },
      {
        name: 'Belgian Dubbel',
        color: 'light amber',
        abv: 6,
        fermentation: 'top',
      },
      {
        name: 'Belgian Tripel',
        color: 'light gold',
        abv: 6.5,
        fermentation: 'top',
      },
      {
        name: 'Belgian Blond Ale',
        color: 'light gold',
        abv: 6,
        fermentation: 'top',
      },
      {
        name: 'Belgian Golden Strong Ale',
        color: 'straw',
        abv: 7.5,
        fermentation: 'top',
      },
      {
        name: 'Saison',
        color: 'light gold',
        abv: 5,
        fermentation: 'top',
      },
      {
        name: 'Witbier',
        color: 'straw',
        abv: 4.5,
        fermentation: 'top',
      }],
unitedKingdom: [{
      name: 'Best Bitter',
      color: 'gold',
      abv: 3.8,
      fermentation: 'top',
    },
    {
        name: 'English IPA',
        color: 'gold',
        abv: 5,
        fermentation: 'top',
      },
      {
        name: 'Brittish Brown Ale',
        color: 'amber',
        abv: 4.2,
        fermentation: 'top',
      },
      {
        name: 'Sweet Stout',
        color: 'dark brown',
        abv: 4,
        fermentation: 'top',
      },
      {
        name: 'Oatmeal Stout',
        color: 'brown',
        abv: 4.2,
        fermentation: 'top',
      },
      {
        name: 'Wee Heavy',
        color: 'amber',
        abv: 6.5,
        fermentation: 'top',
      },
      {
        name: 'Irish Stout',
        color: 'brown',
        abv: 4,
        fermentation: 'top',
      }],
germanCzech: [{
        name: 'German Pils',
        color: 'straw',
        abv: 4.4,
        fermentation: 'bottom',
      },
      {
        name: 'Munich Helles',
        color: 'straw',
        abv: 4.7,
        fermentation: 'bottom',
      },
      {
        name: 'Czech Premium Pale Lager',
        color: 'straw',
        abv: 4.2,
        fermentation: 'bottom',
      },
      {
        name: 'Marzen',
        color: 'gold',
        abv: 5.8,
        fermentation: 'bottom',
      },
      {
        name: 'Helles Bock',
        color: 'gold',
        abv: 6.3,
        fermentation: 'bottom',
      },
      {
        name: 'Doppelbock',
        color: 'gold',
        abv: 7,
        fermentation: 'bottom',
      },
      {
        name: 'Weissbier',
        color: 'straw',
        abv: 4.3,
        fermentation: 'top',
      },
      {
        name: 'Berliner Weisse',
        color: 'straw',
        abv: 2.8,
        fermentation: 'top',
      },
      {
        name: 'Gose',
        color: 'straw',
        abv: 4.2,
        fermentation: 'top',
      },
      {
        name: 'Kolsch',
        color: 'straw',
        abv: 4.4,
        fermentation: 'top',
      }],
american: [{
        name: 'American Light Lager',
        color: 'straw',
        abv: 2.8,
        fermentation: 'bottom',
      },
      {
        name: 'American Wheat Beer',
        color: 'straw',
        abv: 4,
        fermentation: 'any',
      },
      {
        name: 'American Blonde Ale',
        color: 'straw',
        abv: 3.8,
        fermentation: 'any',
      },
      {
        name: 'American Pale Ale',
        color: 'light gold',
        abv: 4.5,
        fermentation: 'top',
      },
      {
        name: 'American Amber Ale',
        color: 'light amber',
        abv: 4.5,
        fermentation: 'top',
      },
      {
        name: 'American IPA',
        color: 'gold',
        abv: 5.5,
        fermentation: 'top',
      },
      {
        name: 'Double IPA',
        color: 'gold',
        abv: 7.5,
        fermentation: 'top',
      },
      {
        name: 'American Brown Ale',
        color: 'dark amber',
        abv: 4.3,
        fermentation: 'top',
      },
      {
        name: 'American Porter',
        color: 'brown',
        abv: 4.8,
        fermentation: 'top',
      },
      {
        name: 'American Stout',
        color: 'dark brown',
        abv: 5,
        fermentation: 'top',
      },
      {
        name: 'Imperial Stout',
        color: 'dark brown',
        abv: 8,
        fermentation: 'top',
      },
      {
        name: 'American Barleywine',
        color: 'light amber',
        abv: 8,
        fermentation: 'top',
      },
      {
        name: 'California Common',
        color: 'light amber',
        abv: 4.5,
        fermentation: 'bottom',
      }],
other: [{
        name: 'International Pale Lager',
        color: 'straw',
        abv: 4.6,
        fermentation: 'bottom',
    }],
};
// ===========================
// TIMERS & GAME LOGIC HERE  
// Level 1 is which beer has the higher ABV
// IDEAL: HAVE 2 QUESTIONS FOR LEVEL 1 - HIGHER AND LOWER ABV
// IDEAL: 10 SECOND TIMER PER TURN - IF TIMER REACHES 0 (COUNTING DOWN), THE GAME IS OVER
// IDEAL: EASY, INTERMEDIATE AND ADVANCED OPTIONS. 90 SEC PER LEVEL OF INTERMEDIATE. 45 SEC FOR ADVANCED
// ============================
const audio = new Audio('sounds/beerpour.mp3');
const analyzeGuess =(e) => {
  let userChoice = $(e.target).attr('id')
  let otherChoice = {}
  if(userChoice === "option1"){
    userChoice = beer1
    otherChoice = beer2
    console.log(userChoice.name)
  } else {
    userChoice = beer2
    otherChoice = beer1
    console.log(userChoice.name)
  }
  if(userChoice.abv > otherChoice.abv){
        points++
        $('#score').text('Score: ' + points)
        $('#option1, #option2').off()
        $('#answer').show()
        $('.option_response').text(`You chose ${userChoice.name}. You're such a beer nerd!`);
    } else {
        $('#option1, #option2').off()
        $('#answer').show()
        $('.option_response').text('Keep drinking') 
    }
};
const game = {
    levelTimer: 0,
    start() {
        const gameTimer = setInterval (() => {
            this.levelTimer++
            $('#game-timer').text('Timer: ' + this.levelTimer);
                if(this.levelTimer === 120) {
                $('#timeout').show();
                clearInterval(gameTimer)
            } 
        }, 1000);
    }
    // CODE BELOW IS NOT WORKING
    // stop() {
    //   const gameTimer = stopInterval (() => {
    //     this.levelTimer
    //     $('#cutoff').on('click')
    //     clearInterval(gameTimer)
    //   }
    // })
}
const beersArray = []
let beer1 = '';
let beer2 = '';
points = 0;
level = 1;
turnTimer = 10;
for(key in beer) {
    let ciceroneList = beer[key]
    for(let i = 0; i < ciceroneList.length; i++) {
        beersArray.push(ciceroneList[i])
        }
    }
$('#start').on('click', function() {
    game.start();
    audio.play()
    $('#start').off()
    $('#gamerules').hide();
    $('.question_box').text('Which ABV is higher?');
    $('#options').append($('<input type="button" value="test" class="btn btn-outline-light" aria-pressed="true" id="option1">'));
    $('#options').append($('<input type="button" value="test" class="btn btn-outline-light" aria-pressed="true" id="option2">'));
    beer1 = beersArray.splice(Math.floor(Math.random() * beersArray.length), 1)[0];
    beer2 = beersArray.splice(Math.floor(Math.random() * beersArray.length), 1)[0];
    $('#option1').val(beer1.name)
    $('#option2').val(beer2.name)
    $('#option1, #option2').on('click', analyzeGuess)
    $('#beerme').on('click', function () {
      $('#option1, #option2').on('click', analyzeGuess)
      $('#answer').hide()
      if(beersArray.length < 2) {
        $('#next-level').show()
      } else {
      beer1 = beersArray.splice(Math.floor(Math.random() * beersArray.length), 1)[0];
      beer2 = beersArray.splice(Math.floor(Math.random() * beersArray.length), 1)[0];
      $('#option1').val(beer1.name)
      $('#option2').val(beer2.name)
      }
    })
  $('#cutoff').on('click', function() {
    $('#answer').hide()
    $('#option1').val(beer1.name).empty()
    $('#option2').val(beer2.name).empty()
    // game.stop()
  })  
});

$('#rulesbutton').on('click', function() {
    $('#gamerules').show();
});

$('#ackrules').on('click', function() {
  $('#gamerules').hide();
});

$('#newlevel').on('click', function () {
  $('#next-level').hide();
});

$('#timeouttab').on('click', function() {
  $('#timeout').hide();
});

$('#reset').on('click', function() {
  document.location.reload();
});
console.log('the end')

// ===========================
// ADDITIONAL LEVELS HERE
// ===========================
// 3. Allow user to either click Reset, A or B button -> reset could refresh page (easiest) or stop timer, hide timer, hide question, 
//    and answer buttons and show start button (harder)
// abvQuestions = ["Which beer has a higher ABV?"]; // keep this for use when things get really random
// colorQuestions = [{question: "What color is most commonly associated with this beer?",
//                   choices: ["straw", "light gold", "gold", "light amber", "amber", "dark amber", "brown", "dark brown", "black", "varies"],
//                   }]; // loop through the beer object and pick 1 beer. loop through the colorQuestions array and pick 2 random different 
                // choices. One of the choices will match the beer given

// fermentationQuestions = [{question: "What style of fermentation does this beer use?",
//                          choices: ["top", "bottom", "wild", "any"],
                        // }]; // loop through the beer object and pick 1 beer. Loop through the fermentationQuestions array and pick 2
                        // random different choices. One of the choices will match the beer given