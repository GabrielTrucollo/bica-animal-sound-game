export default class Game{
    constructor(animals){
        // Controls
        this.animals = animals;
        this.lastAnimalSoundPlayed = null;

        // Create table
        this.tableGame = document.createElement("TABLE");

        // Game container
        this.container = document.getElementById("game");

        // Add table in to game container
        this.container.appendChild(this.tableGame);
    }

    startGame(){
        if(this.animals == null){
            throw new Error('For start the game please insert animals in to animals list');
        }

        const maxCountColumGame = this.animals.length > 3 ?  3 : this.animals.length;
        let countAnimais = 0;
        for(var tableLine = 0; tableLine < this.animals.length / maxCountColumGame; tableLine++){
            // Create tableLine
            const row = this.newRow(tableLine);

            for(var tabColumn = 0; tabColumn < maxCountColumGame; tabColumn++){
                this.newColumn(row, countAnimais, this.animals[countAnimais]);
                countAnimais++;
            }
        }
    }

    newRow(idRow){
        // Create new row
        let row = document.createElement("TR");
        
        // Verify if the row as created
        if(row == null){
            return;
        }

        // Update idRow
        row.setAttribute("id", idRow);

        // Add row in table
        this.tableGame.appendChild(row);

        // Return
        return row;
    }

    newColumn(row, animalId, animal){
        if(animal == null){
            return;
        }

        // Create new column
        let column = document.createElement("TD");

        // Update column
        column.setAttribute("id", animalId);

        // Create buttom
        let button = document.createElement("BUTTON");
        
        // Set text-button
        button.innerHTML = animal.name;
        button.addEventListener("click", () => { this.playAnimalSound(animalId) });
        button.setAttribute("id", animal.name);

        // Add button im column
        column.appendChild(button);

        // Add column to row
        row.appendChild(column);
    }

    playAnimalSound(animalId){
        let animal = this.animals[animalId];
        if(animal == null){
            return;
        }

        // Stop current sound
        this.stopAnimalSound(animalId);

        this.lastAnimalSoundPlayed = new Audio(animal.sound);
        this.lastAnimalSoundPlayed.volume = 0.2;
        this.lastAnimalSoundPlayed.play();

        let button =  document.getElementById(animal.name);
        if(button === null){
            return;
        }

        button.addEventListener("click", () => { this.stopAnimalSound(animalId) });
    }

    stopAnimalSound(animalId){
        let animal = this.animals[animalId];
        if(animal == null){
            return;
        }

        if(this.lastAnimalSoundPlayed === null){
            return;
        }

        // Stop audio
        this.lastAnimalSoundPlayed.pause();

        let button =  document.getElementById(animal.name);
        if(button == null){
            return;
        }
       
        button.addEventListener("click", () => { this.playAnimalSound(animalId) });
    }
}