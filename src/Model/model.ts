export class model{
user;
items;

constructor(){
    this.user= "NKM";
    this.items=[
        {action:"Buy Flowers", done:false},
        {action:"Get Shoes", done:false},
        {action:"Collect Tickets", done:true},
        {action:"Do workout", done:false}
    ]
}
}
export class TodoItem
{
    action;
    done;
    constructor(action: any , done: any){
        this.action=action;
        this.done=done;
    }
}