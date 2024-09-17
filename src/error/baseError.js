class baseError extends Error{
    constructor(name,statusCode,description,detail){
        super(description);
           this.name=name;
           this.statusCode=statusCode;
            this.description=description;
            this.detail=detail;
           
    }
}
module.exports={
    baseError:baseError
}
