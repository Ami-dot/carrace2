class Form{
constructor(){
    this.title = createElement("h2")
    this.imput = createInput("name")
    this.button = createButton("play")
    this.greeting = createElement("h3")
}
hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}
display(){
    
    this.title.html("Car Racing Game")
    this.title.position(130,0)
    
    this.button.mousePressed(()=>{
        this.imput.hide()
        this.button.hide()
        player.name = this.imput.value()
        playerCount = playerCount+1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("hello "+player.name)
        this.greeting.position(130,160)
    })
}
}