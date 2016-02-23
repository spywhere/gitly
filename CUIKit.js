const inherits = require("inherits");

function CGRectMake(x, y, width, height){
    return {
        origin: {
            x: x,
            y: y
        },
        size: {
            width: width,
            height: height
        }
    };
}

function UIView(init, obj){
    var self = this;

    if(init === "withFrame"){
        self.frame = obj;
    }else{
        self.frame = CGRectMake(0, 0, 80, 25);
    }
}

function UILabel(init, obj){
    var self = this;
    UIView.call(self, init, obj);
}

inherits(UILabel, UIView);

UIView.prototype.addSubview = function(view){
    console.log("Add " + view.description() + " as subview");
}

UIView.prototype.description = function(){
    return "UIView";
}

UIView.prototype.render = function(){
    console.log("Render");
}

UILabel.prototype.description = function(){
    return "UILabel";
}

module.exports.UIView = UIView;
module.exports.UILabel = UILabel;
