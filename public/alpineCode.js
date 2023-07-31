function AlpineMainFunction() {
    return {
        sentence: "",
        nameUser: "",
        greetPhrase: "",
        selectedLanguage: "",
        strList: "",
        airStr: "",
        AT: 0,
        atStr: "",
        strList: "",
        returnString: "",
        daytime: "",
        price: "",
        str: "",
        long: "",
        short: "",
        sentenceLength: 0,

        wordGame() {
            axios
                .get(`/api/word_game?sentence=${this.str}`)
                .then((result) => {
                    this.long = result.data.longestWord;
                    this.short = result.data.shortestWord;
                    this.sentenceLength = result.data.length;
                })
        },

        bill() {
            axios
                .get(`/api/totalphonebill?sentence=${this.strList}`)
                .then((result) => {
                    this.returnString = result.data.totalphonebill
                })
        },

        enoughAT() {
            axios
                .get(`/api/enoughairtime?sentence=${this.atStr}&amount=${this.AT}`)
                .then((result) => {
                    this.airStr = result.data.enoughairtime
                })
        },

        fee() {
            axios
                .get(`/api/transportFee?day=${this.daytime}`)
                .then((result) => {
                    this.price = result.data.transport
                })
        },

        greet() {
            axios
                .get(`/api/greet?name=${this.nameUser}`)
                .then((result) => {
                    this. greetPhrase = result.data.greet
                })
        }

    };
}


document.addEventListener('alpine:init', () => {
    Alpine.data('mainFunction', AlpineMainFunction)
})