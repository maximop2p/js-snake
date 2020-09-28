window.onload = function() {
    canv = document.getElementById("display");
    cont = canv.getContext("2d");
    score = document.getElementById("score");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 50);  //refresh every 50ms
}


snake_x = snake_y = 10;
grid_size_x = 60;
grid_size_y = 30;
square = 20;
apple_x = apple_y = 15;
x_vel = y_vel = 0;
trail = [];
tail = 5;
function game() {
    snake_x += x_vel;
    snake_y += y_vel;
    if(snake_x < 0) {
        snake_x = grid_size_x - 1;
    }
    if(snake_x > grid_size_x - 1) {
        snake_x = 0;
    }
    if(snake_y < 0) {
        snake_y = grid_size_y - 1;
    }
    if(snake_y > grid_size_y - 1) {
        snake_y = 0;
    }
    cont.fillStyle = "black";
    cont.fillRect(0, 0, canv.width, canv.height);
 
    cont.fillStyle = "white";
    for (var i = 0; i < trail.length; i++) {
        cont.fillRect(trail[i].x * square, trail[i].y  * square, square - 2, square - 2);
        if (trail[i].x == snake_x && trail[i].y == snake_y) {
            tail = 5;
        }
    }
    trail.push({x:snake_x, y:snake_y});
    while (trail.length > tail) {
        trail.shift();
    }
 
    if (apple_x == snake_x && apple_y == snake_y) {
        tail++;
        apple_x = Math.floor(Math.random() * grid_size_x);
        apple_y = Math.floor(Math.random() * grid_size_y);
    }

    cont.fillStyle = "grey";
    cont.fillRect(apple_x * square, apple_y * square, square - 2, square - 2);
    score.innerHTML = "SCORE: " + (tail - 5);
}
function keyPush(eve) {
    switch (eve.keyCode) {
        case 37:
            x_vel = -1;
            y_vel = 0;
            break;
        case 38:
            x_vel = 0;
            y_vel = -1;
            break;
        case 39:
            x_vel = 1;
            y_vel = 0;
            break;
        case 40:
            x_vel = 0;
            y_vel = 1;
            break;
    }
}