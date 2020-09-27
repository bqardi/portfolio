function game() {
    class Monster {
        constructor(parent, topPos) {
            this.parent = parent;
            this.topPos = topPos;

            this.width = 0;
            this.speed = 50;

            this.create();
        }
        create() {
            this.element = document.createElement("DIV");
            this.element.classList.add("game__monsterContainer");

            let monster = document.createElement("DIV");
            monster.classList.add("game__monster");

            let monsterTrail = document.createElement("DIV");
            monsterTrail.classList.add("game__trail");

            this.element.appendChild(monster);
            this.element.appendChild(monsterTrail);
            this.parent.appendChild(this.element);
        }
        setSpeed(speed) {
            this.speed = speed;
        }
        setTopPos(topPos) {
            this.element.style.top = `${topPos}px`;
        }
        updateWidth(deltaTime) {
            if (this.width >= 200) {
                return;
            }
            this.width += deltaTime * this.speed;
            this.element.style.width = `${this.width}%`;
        }
    }

    let game = document.querySelector(".game");

    let lastFrame = 0;
    let monsterList = [];
    let maxMonsters = 100;
    let monsterCount = 0;

    start();

    function createMonster() {
        let monster = new Monster(game);
        monster.setTopPos(randomInteger(pageYOffset, pageYOffset + innerHeight - 100));
        monster.setSpeed(randomInteger(10, 20));
        monsterList.push(monster);
        let creationDelay = randomInteger(0, 5000);
        setTimeout(() => {
            monsterCount++;
            if (monsterCount >= maxMonsters) {
                return;
            }
            createMonster();
        }, creationDelay);
    }

    function update(deltaTime) {
        monsterList.forEach(monster => {
            monster.updateWidth(deltaTime);
        });
    }

    function start() {
        setTimeout(() => {
            createMonster();
            lastFrame = new Date().getTime();
            animationFrame();
        }, 1000);
    }

    function animationFrame() {
        if (lastFrame === 0) {
            return;
        }
        let currentFrame = new Date().getTime();
        let deltaTime = (currentFrame - lastFrame) / 1000;
        lastFrame = currentFrame;
        requestAnimationFrame(animationFrame);
        update(deltaTime);
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function randomInteger(min, max) {
        return Math.floor(random(min, max));
    }
}
export default game;