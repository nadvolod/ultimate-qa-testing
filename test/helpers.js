class Helpers {
    static findButton1(isButton1Found){
        console.log('findButton1()',isButton1Found)
        if(!isButton1Found){
            return $('#button1').isDisplayed();
        }
    }

    static findButton2(isButton2Found){
        console.log('findButton2()', isButton2Found)
        if(!isButton2Found){
            return $('#button2').isDisplayed();
        }
    }

}

module.exports = {Helpers}