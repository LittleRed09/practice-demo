//line=readline()
//print(line)
class Event {
    constructor(){
        this.events = {}
        this.eventsOnce = {}
    }
    
    on (eventName, cb){
        if(!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(cb)
    }
    
    trigger (eventName, ...args){
        this.events[eventName]?.forEach(fn=>{
            fn.apply(this,args)
        })
        this.eventsOnce[eventName]?.forEach(fn=>{
            fn.apply(this,args)
        })
        this.eventsOnce = {}
    }
    
    off (eventName,cb){
        if(cb) {
            let index = this.events[eventName].indexOf(cb)
            if(index !== -1){
                this.events[eventName].splice(index, 1)
            } else {
                index = this.eventsOnce[eventName].indexOf(cb)
                if(index !== -1){
                    this.eventsOnce[eventName].splice(index, 1)
                }
            }
            return;
        } 
        delete this.events[eventName];
    }
    
    once (eventName, cb){
        if(!this.eventsOnce[eventName]) {
            this.eventsOnce[eventName] = {}
        }
        this.eventsOnce[eventName][cb] = {callback: cb, once: true}    
    }
}

const evt = new Event();
const cb = e => console.log(e);
evt.on('myevent', cb);
evt.trigger('myevent', { key: 'value' });  // 打印 { key ... }
evt.off('myevent', cb);