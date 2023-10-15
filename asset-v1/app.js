/* Finally, some good fucking json */
var app = new function() {
    this.name = "Pushing Life", this.version = "Pushing Life V1", this.date = "2023", this.folder = "asset-v1/", this.looptime = 8000, this.bpm = 100, this.totalframe = 384, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 96, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepolotshirt = "polo-sprite-tshirt.png", this.spritepicto = "game-picto.png", this.colBck = "#0f1521", this.col0 = "#828da0", this.col1 = "#596988", this.col2 = "#384863", this.col3 = "#202a3c", this.col4 = "#131a2a", this.animearray = [{
        name: "beat",
        color: "000000",
        uniqsnd: !0
    }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
		var a = this.animearray[n].name;
		this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
	}
};
