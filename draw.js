const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const scale = 10;

const rows = canvas.height / scale;
const cols = canvas.width / scale ;

var snek;

(function setup()
{
    snek = new Snek();
    fruit = new fruit();
    
    fruit.randomLoc();

    window.setInterval(() => {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        fruit.draw();
        snek.update();
        snek.draw();

        if(snek.eat(fruit))
        {
            fruit.randomLoc();
        }

        snek.collision();

        document.querySelector('.score')
            .innerText = "snake game bih! score: " + snek.total;
    }, 90);
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snek.changeDirection(direction);
    console.log(direction);
}))


