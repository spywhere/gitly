/* global UILabel */
/* global UIView */
const CUIKit = require("./CUIKit");
for(var key in CUIKit){
    global[key] = CUIKit[key];
}

module.exports = function (opts) {
    return new Gitly(opts | {});
}

function Gitly(opts){
    var self = this;
    self.view = new UIView();
    var label = new UILabel();

    self.view.addSubview(label);

    process.nextTick(function () {
        self.render();
    });
}

Gitly.prototype.render = function(){
    this.view.render();
};
