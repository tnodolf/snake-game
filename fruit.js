function fruit()
{
    this.randomLoc = function()
    {
        this.x = (Math.floor((Math.random() * rows - 1) + 1)) * scale;
        this.y = (Math.floor((Math.random() * cols - 1) + 1)) * scale;
    }

    this.draw = function()
    {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}