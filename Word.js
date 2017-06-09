// Sõna objekt, millele paneme külge ka funktsioonid
function Word(word, canvas, ctx){

    this.word = word;


    // lisaks mis on sõnast järel, mida alguses hakkame hakkima ja pärast joonistame
    // esialgne sõna säilib, nt saab kasutada pärast skoori arvutamisel
	this.left = this.word;

    this.canvas = canvas;
    this.ctx = ctx;
    this.wordx = this.canvas.width/2;
    this.wordy = this.canvas.height/2;
}

Word.prototype = {
	Draw: function(){

		//Tühjendame canvase
		this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height);
    if (flashBackground == true) {this.ctx.fillStyle = "red"; flashBackground = false;} else
    {
    this.ctx.fillStyle = "darkslategray";}
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fontColor = "white";
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Open Sans";
    this.ctx.textAlign = "left";
    this.ctx.fillText(typerGame.player.score,10,30);
		// Canvasele joonistamine
		this.ctx.textAlign = 'center';
		this.ctx.font = '70px Open Sans';

		// Joonistame sõna, mis on järel / tekst, x, y
    //this.word.x = this.word.x + Math.random(2);
		this.ctx.fillText(this.left, this.wordx, this.wordy);
	},

	// Võtame sõnast esimese tähe maha
	removeFirstLetter: function(){

		// Võtame esimese tähe sõnast maha
		this.left = this.left.slice(1);
		//console.log(this.left);
	}
};
