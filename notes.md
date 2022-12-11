# Rules 

1. $5 \times 5$ grid,  each cell can be $1,\ 2,\ 3$ multiplier or a bomb.
2. Score is achieved  by $1Coins \times 2*2Coins \times 3*3Coins$ 

3. If a player flips less cards before finding a voltorb than $currentLevel$, $level$ is dropped to $cardsFlipped$ (if $cardsFlipped < 2$, $level \to 1$ )

4. Player can quit at any point during a round. Quitting counts as a loss (only exception see point below) and the level dropping rules still applies. Coins are kept. 

5. Level 8 can be **only** reached by winning 5 games in a row at **any** level and flipping **at least** 8 multiplier cards in each level. In the fifth, quitting with 8 multiplier cards, still reaches level 8.

6. Memo mode to flag values the player thinks the cell may hold.


# Implementing


## Randomness 

Each board needs a level of randomization. 

Following the table in [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Voltorb_Flip), at each level we can choose between 5 different configurations. 

So we have 2 degree of randomness: 

   1. First, a configuration must be picked at random. Just 
   hold a dict of configs 
   ```ts
    type config = {
            times2: int 
            times3: int 
            bombs: int 
            coins: int
    };

    type levels = {
        [key: int]: Config[]
    }
   ```
  Pick random index 
  ```js
  index = Math.floor(Math.random()*nConfigs);
  ```

  Then, the next config will be  
  ```js 
  levels[currLevel][index] 
  ```
  **Possible issue**: What probability does each config have? are some configs "rarer" than other or they must have same probability?

  2. After picking a config, we must create a random board 
   that follows the config. Harder part, efficient way to do it?