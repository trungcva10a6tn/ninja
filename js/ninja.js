var dx=0;dy=0;
function naruto(x,y) {
    var c = document.getElementById("GameNinja");
    var ctx = c.getContext("2d");
    var img=new Image();
    img.src = 'img/ki.png';
    this.x=x;
    this.y=y;

    this.width= img.width/10;
    this.height= img.height/10;
    this.get_naruto= function () {
        ctx.drawImage(img,this.x,this.y,this.width,this.height);
    }
    this.down=function () {
        var sum=this.y+10;
        if (sum>=0&&sum<490){
            this.y=sum;
            console.log(this.x+"ádasdasd"+this.y);
        }
    }
    this.up= function () {
        var sum=this.y-10;
        if (sum>=0&&sum<490){
            this.y=sum;
        }
        console.log(this.x+"ádasdasd"+this.y);
    }

    this.left= function () {
        var sum=this.x-10;
        if (sum>=0&&sum<530){
            this.x=sum;
        }
        console.log(this.x+"ádasdasd"+this.y);
    }
    this.right=function () {
        var sum=this.x+10;
        if (sum>=0&&sum<530){
            this.x=sum;
        }
        console.log(this.x+"ádasdasd"+this.y);
    }
}
function evil(x,y) {
    var c = document.getElementById("GameNinja");
    var ctx = c.getContext("2d");
    var img=new Image();
    img.src = 'img/panda.png';
    this.x=x;
    this.y=y;
    this.width= img.width/10;
    this.height= img.height/10;
    this.get_evil= function () {
        ctx.clearRect(0,0,600,600);
        ctx.drawImage(img,this.x,this.y,this.width,this.height);

    }
    this.mov_ai= function () {
        if (this.x === dx){
            if (this.y===dy){
                random_dx_dy();
            }else {
                if(this.y>dy){
                    var sum=this.y-1;
                    if(sum >= 0&&sum < 550){
                        this.y=sum;
                    }
                }else {
                    var sum=this.y+1;
                    if(sum >= 0&&sum < 550){
                        this.y=sum;
                    }
                }
            }
           
        }else {
            if(this.x > dx){
                var sum=this.x-1;
                if(sum >= 0 && sum < 550){
                    this.x=sum;
                }
            }else {
                var sum=this.x+1;
                if(sum>=0&&sum<550){
                    this.x=sum;
                }
            } 
        }
    }
}
function random_dx_dy() {
    dx=Math.floor((Math.random() * 550));
    dy=Math.floor((Math.random() * 550));
}
var naruto = new naruto(0,0);
var evil =new evil(300,300);

function start() {
    naruto.get_naruto();
    evil.get_evil();
    ai();
}
function ai() {
    evil.mov_ai();
    evil.get_evil();
    naruto.get_naruto();
    // attack();
    setTimeout(ai,1);
}
function attack() {
    var x1=naruto.x;
    var x2=evil.x;
    var y1=naruto.y;
    var y2=evil.y;
    if(x1 < x2){
        if (x2-x1<evil.width){
            alert("Bạn đã thua");
        }
    }else {
        if (x1-x2<naruto.width){
            alert("Bạn đã thua");
        }
    }
    if(y1 < y2){
        if (y2-y1<evil.height){
            alert("Bạn đã thua");
        }
    }else {
        if (y1-y2<naruto.height){
            alert("Bạn đã thua");
        }
    }
}
function movi(event) {
    var key = event.keyCode;
    var down=40;
    var up=38;
    var left=37;
    var right=39;
    if (key==down){
        naruto.down();
    }
    if (key==up){
        naruto.up();
    }
    if (key==left){
        naruto.left();
    }
    if (key==right){
        naruto.right();
    }
}