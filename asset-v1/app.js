/* Finally, some good fucking json */
var app = new function() {
    this.name = "Pushing Life", this.version = "A", this.date = "2022", this.folder = "asset-v1/", this.looptime = 8000, this.bpm = 120, this.totalframe = 384, this.nbpolo = 7, this.nbloopbonus = 3, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 68, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepolotshirt = "polo-sprite-tshirt.png", this.spritepicto = "game-picto.png", this.colBck = "#121212", this.col0 = "#1b1851", this.col1 = "#1b1851", this.col2 = "#12103d", this.col3 = "#0d0b30", this.col4 = "#232323", this.animearray = [{
        name: "1_kick",
        color: "b816ad",
        uniqsnd: !0
    }, {
        name: "3_snap",
        color: "b816ad",
        uniqsnd: !0
    }, {
        name: "4_phsht",
        color: "b816ad",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "b816ad",
        uniqsnd: !0
    }, {
        name: "8_aeugh",
        color: "3a5af0",
        uniqsnd: !0
    }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
		var a = this.animearray[n].name;
		this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
	}
};
