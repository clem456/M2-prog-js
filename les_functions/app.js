class App
{
    runApplication()
    {
        var canvas = document.getElementById('canvasId');
        var g = canvas.getContext('2d');
        g.canvas.width  = window.innerWidth;
        g.canvas.height = window.innerHeight;
        this.House(0,0 ,g);
        this.House(300, 300, g)
        console.log("hello world");
        let result = this.laughfunction()
        this.mariofunction();
        this.faces('happy');
        this.calculator(5, 10);
        console.log(result);
    }

    mariofunction()
    {
        console.log("MARIO!!");
    }

    laughfunction()
    {
        return "BWAHAHA!!";
    }

    calculator(a, b)
    {
        let result = a + b;
        console.log(result);
    }
    
    faces(face)
    {
        if (face.toLowerCase() == "happy")
        {
            console.log(":)")
        } else if (face.toLowerCase() == "wink")
        {
            console.log(";)");
        }
    }

    House(x, y, g)
    {
        var black = "#735F32";
        var white = "#FFF";

        var scale = 4;

        g.beginPath();
        g.moveTo(x+300/scale,y+100/scale);
        g.lineTo(x+700/scale,y+200/scale);
        g.lineTo(x+600/scale,y+400/scale);
        g.lineTo(x+200/scale,y+300/scale);
        g.lineTo(x+300/scale,y+100/scale);
        g.fillStyle = black;
        g.fill();
        g.closePath();

        g.beginPath();
        g.moveTo(x+200/scale,y+300/scale);
        g.lineTo(x+200/scale,y+500/scale);
        g.lineTo(x+600/scale,y+600/scale);
        g.lineTo(x+600/scale,y+400/scale);
        g.lineTo(x+200/scale,y+300/scale);
        g.fillStyle = black;
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = black;
        g.moveTo(x+600/scale,y+400/scale);
        g.lineTo(x+600/scale,y+600/scale);
        g.lineTo(x+800/scale,y+500/scale);
        g.lineTo(x+800/scale,y+300/scale);
        g.lineTo(x+700/scale,y+200/scale);
        g.lineTo(x+600/scale,y+400/scale);
        g.closePath();
        g.stroke();
        g.fill();
        g.closePath()
    }
}

let app = new App();
app.runApplication();
