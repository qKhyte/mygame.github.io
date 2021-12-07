let defended = false;
let health = 100;
let enemyHealth = 500;
let healthElement = document.getElementById("health")
let testHP = document.getElementById("losehp")
let attacking = false;

function fullGame() {

    setInterval(() => {
        if (enemyHealth <= 0) {
            document.getElementById("fighter").style.display = "none";
            health = 100;
            document.getElementById("text").style.color = "green";
            document.getElementById("text").style.border = "2px solid green";
            document.getElementById("text").innerHTML = "You won!"
            setTimeout(() => {
                location.reload(true)
            }, 2500);
            document.getElementById("enemyhealth").innerHTML = 0 + ' ♥';
        }

        if (health <= 0) {
            document.getElementById("weapon").style.display = "none";
            enemyHealth = 500;
            document.getElementById("text").style.color = "red";
            document.getElementById("text").style.border = "2px solid red";
            document.getElementById("text").innerHTML = "You lost! Get better next time."
            setTimeout(() => {
                location.reload(true)
            }, 2500);
            document.getElementById("health").innerHTML = 0 + ' ♥';
        }
    }, 100);

    document.getElementById("attack").onclick = () => {
        if (defended == true) return;
        if(document.getElementById("character").classList == "animate" || attacking == true){return}

        document.getElementById("weapon").src = "sword.png";
        document.getElementById("character").classList.add("animate");
        setTimeout(() => {
            document.getElementById("character").classList.remove("animate")
            document.getElementById("weapon").src = "character.png";
        }, 1000);

        let damage = Math.floor(Math.random() * (125 - 50) + 50);
        
        if (damage < 50) {
            document.getElementById("text").innerHTML = "Weak hit: Dealt " + damage + " Damage!"
        }

        else if (damage < 100) {
            document.getElementById("text").innerHTML = "Average hit: Dealt " + damage + " Damage!"
        }

        else {
            document.getElementById("text").innerHTML = "Critical: Dealt " + damage + " Damage!"
        }

        enemyHealth -= damage;
        document.getElementById("enemyhealth").innerHTML = enemyHealth + ' ♥';

        setTimeout(() => {
            attacking = false;
        }, 2500);
        attacking = true;
        
    }

    document.getElementById("defend").onclick = () => {

        document.getElementById("weapon").src="shield.png"
        defended = true;
        setTimeout(() => {
            document.getElementById("weapon").src = "character.png"
            defended = false;   
        }, 2500);
    }

    setInterval(() => {
        if(document.getElementById("enemy").classList == "evilAnimate"){return};

        document.getElementById("enemy").classList.add("evilAnimate");
        setTimeout(() => {
                document.getElementById("enemy").classList.remove("evilAnimate");
            }, 1000);
            
            if (defended != true) {
                let damage = Math.floor(Math.random() * (40 - 10) + 10);
                if (damage < 50) {
                document.getElementById("text").innerHTML = "Weak hit: Took " + damage + " Damage!"
            }

            else if (damage < 100) {
                document.getElementById("text").innerHTML = "Average hit: Took " + damage + " Damage!"
            }

            else {
                document.getElementById("text").innerHTML = "Critical: Took " + damage + " Damage!"
            }

            health -= damage;
            document.getElementById("health").innerHTML = health + ' ♥';

        } else {
            let damage = Math.floor(Math.random() * (20 - 5) + 5);
            if (damage < 50) {
                document.getElementById("text").innerHTML = "DEFENDED hit Took: " + damage + " Damage!"
            }

            else if (damage < 100) {
                document.getElementById("text").innerHTML = "DEFENDED hit Took: " + damage + " Damage!"
            }

            else {
                document.getElementById("text").innerHTML = "DEFENDED hit Took: " + damage + " Damage!"
            }
            health -= damage;
            document.getElementById("health").innerHTML = health + ' ♥';
        }


    }, 5000);

};
fullGame();