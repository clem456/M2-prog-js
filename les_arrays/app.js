class App
{
    runApplication(array, names)
    {
        for(let i = 0; i < array.length; i++)
        {
            array[i].innerHTML = names[i]
            
            console.log(array[i].innerHTML)
        }
    }

    drawcircle(g, x, y)
    {
        g.beginpath()
    }
}

let groeten = document.getElementsByClassName("groeten")
let names = ["eerste", "tweede", "derde", "vierde", "vijfde"]

let app = new App();
app.runApplication(groeten, names);

g = document.getElementById("canvasid")

for(let i = 0; i < 200; i++)
{
    let radx = math.random(20, 980)
    let rady = math.random(20, 980)
    
    drawcircle(g, radx, rady)
}
