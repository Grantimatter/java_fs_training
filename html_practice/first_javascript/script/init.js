class ScriptInclude{
    constructor(type, source, integrity, crossorigin){
        this.element = document.createElement("script");
        this.element.type = type;
        this.element.src = source;
        if(integrity){
            this.element.integrity = integrity;
        }
        if(crossorigin){
            this.element.crossOrigin = crossorigin;
        }
    }
}

let JQuery = new ScriptInclude("text/javascript", "https://code.jquery.com/jquery-3.5.1.slim.min.js", "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj", "anonymous");
let Bootstrap = new ScriptInclude("text/javascript", "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js", "sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx", "anonymous");
//document.body.appendChild(JQuery.element);
//document.body.appendChild(Bootstrap.element);