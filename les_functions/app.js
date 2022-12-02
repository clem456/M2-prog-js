class App
{
    runApplication()
    {
        console.log("hello world");
    }

    mariofunction()
    {
        console.log("MARIO!!");
    }

    laughfunction()
    {
        console.log("BWAHAHA!!");
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
            console.log(";)")
        }
    }
}

let app = new App()
app.runApplication()