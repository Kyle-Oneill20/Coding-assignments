class Food{
constructor(name,type){
    this.name=name;
    this.type=type;
    
}
describe(){
    return `${this.name} is ${this.type}.`;
}
}

class Meal{
    constructor(name){
        this.name=name;
        this.food=[];
    }
    addFood(food){
        if (food instanceof Food){
            this.food.push(food);
        }else {
            throw new Error(`You must add an instance of Food. Argument is not a Food: ${food}`);
        }
    }
    describe(){
        return `The ${this.name} meal has ${this.food}`;
    }
}

    class Menu {
        constructor(){
            this.meals=[];
            this.selectedMeal=null;
        }

        start(){
            let selection= this.showMainMenuOptions();
            while (selection != 0){
                switch (selection){
                    case '1':
                        this.createMeal();
                        break;
                    case '2':
                        this.viewMeal();
                        break;
                    case '3':
                        this.deleteMeal();
                        break;
                    case'4':
                        this.displayMeals();
                        break;
                    default:
                        selection = 0;
                }
                selection = this.showMainMenuOptions();
            }

        alert('Goodbye!');
        }

        showMainMenuOptions(){
            return prompt(`
            0) exit
            1) create new meal
            2) view meal
            3) delete meal
            4) display all meals
            `);
        }

        showMealMenuOptions(description){
            return prompt(`
            0) back
            1) add food
            2) remove food
            ------------------
            ${description}
            `);
        }


        displayMeals(){
            let mealString= '';
            for (let i=0; i < this.meals.length; i++) {
                mealString += i + ') ' + this.meals[i].name + '\n';
            }
            alert(mealString);
        }

        createMeal(){
            let name = prompt(`What will you call this meal:`);
            this.meals.push(new Meal(name));
        }

        viewMeal(){
            let index = prompt('Enter the index of the meal you would like:');
            if (index > -1 && index < this.meals.length) {
                this.selectedMeal = this.meals[index];
                let description = 'Meal Name:' + this.selectedMeal.name + '\n';

                for(let i =0; i< this.selectedMeal.food.length; i++) {
                description += i + ')' + this.selectedMeal.food[i].name + ' - ' + this.selectedMeal.food[i].type+'\n';
                }
                
            let selection = this.showMealMenuOptions(description);
            switch(selection) {
                case '1':
                    this.newFood();
                    break;
                case  '2':
                    this.removeFood();
            }
        }
    }

    deleteMeal(){
        let index= prompt('Enter the index of the meal you wish to delete:');
        if(index>-1 && index < this.meals.length){
            this.meals.splice(index,1);
        }
    }

    newFood(){
        let name = prompt('Name of new food:');
        let type = prompt('What kind of food:');
        this.selectedMeal.food.push(new Food(name,type));
    }
    removeFood(){
        let index = prompt ('Enter the index of the food you wish to delete:')
        if (index> -1 && index < this.selectedMeal.food.length){
            this.selectedMeal.food.splice(index,1);
        }
    }
       
        
    
}    

    let menu = new Menu();
    menu.start();
