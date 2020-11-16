function easyLevelSprites(){
    player = createSprite(50,100,10,10);
    player.shapeColor = "red";
    normalEnemy1 = createSprite(250,100,10,10);
    normalEnemy1.velocityX = -7;
    normalEnemy2 = createSprite(450,300,10,10);
    normalEnemy2.velocityY = 7;
    normalEnemy3 = createSprite(800,600,10,10);
    normalEnemy3.velocityX = 7;
    wall1 = createSprite(100,height-250,200,40);

    wall2 = createSprite(300,height-400,50,200);
    wall3 = createSprite(400,250,50,17);
    wall4 = createSprite(750,300,20,75);
    wall5 = createSprite(100,550,50,17);
    wall6 = createSprite(870,600,20,75);
    wall7 = createSprite(500,750,50,17);
    wall8 = createSprite(650,550,20,75);
    wall9 = createSprite(380,600,50,17);
    wall10 = createSprite(350,800,20,75);
    treasure = createSprite(970,15,20,10);
    treasure.shapeColor = "yellow";
    invisibleWall1 = createSprite(210,100,10,10);
    invisibleWall1.visible = false;
    invisibleWall2 = createSprite(290,100,10,10);
    invisibleWall2.visible = false;
    invisibleWall3 = createSprite(450,260,10,10);
    invisibleWall3.visible = false;
    invisibleWall4 = createSprite(450,340,10,10);
    invisibleWall4.visible = false;
    invisibleWall5 = createSprite(760,600,10,10);
    invisibleWall5.visible = false;
    invisibleWall6 = createSprite(840,600,10,10);
    invisibleWall6.visible = false;

    easyLevelGroup.add(player);
    easyLevelGroup.add(normalEnemy1);
    easyLevelGroup.add(normalEnemy2);
    easyLevelGroup.add(normalEnemy3);
    easyLevelGroup.add(wall1);
    easyLevelGroup.add(wall2);
    easyLevelGroup.add(wall3);
    easyLevelGroup.add(wall4);
    easyLevelGroup.add(wall5);
    easyLevelGroup.add(wall6);
    easyLevelGroup.add(wall7);
    easyLevelGroup.add(wall8);
    easyLevelGroup.add(wall9);
    easyLevelGroup.add(wall10);
    easyLevelGroup.add(treasure);
    easyLevelGroup.add(invisibleWall1);
    easyLevelGroup.add(invisibleWall2);
    easyLevelGroup.add(invisibleWall3);
    easyLevelGroup.add(invisibleWall4);
    easyLevelGroup.add(invisibleWall5);
    easyLevelGroup.add(invisibleWall6);
}
function easyLevelMoves(){
    normalEnemy1.bounceOff(invisibleWall1);
    normalEnemy1.bounceOff(invisibleWall2);
    normalEnemy2.bounceOff(invisibleWall3);
    normalEnemy2.bounceOff(invisibleWall4);
    normalEnemy3.bounceOff(invisibleWall5);
    normalEnemy3.bounceOff(invisibleWall6);
    player.collide(edges);

    if(keyDown(UP_ARROW)){
        player.velocityY = -5;
        player.velocityX = 0;
    }
    if(keyWentUp(UP_ARROW)){
        player.velocityX = 0;
        player.velocityY = 0;
    }
    if(keyDown(DOWN_ARROW)){
        player.velocityY = 5;
        player.velocityX = 0;
    }
    if(keyWentUp(DOWN_ARROW)){
        player.velocityX = 0;
        player.velocityY = 0;
    }
    if(keyDown(RIGHT_ARROW)){
        player.velocityY = 0;
        player.velocityX = 5;
    }
    if(keyWentUp(RIGHT_ARROW)){
        player.velocityX = 0;
        player.velocityY = 0;
    }
    if(keyDown(LEFT_ARROW)){
        player.velocityY = 0;
        player.velocityX = -5;
    }
    if(keyWentUp(LEFT_ARROW)){
        player.velocityX = 0;
        player.velocityY = 0;
    }
 
}