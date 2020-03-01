import './date-element.js';

 function custonStart(){
    const startDate=  document.getElementsByName("startDate")[0].value;
    const endDate=   document.getElementsByName("endDate")[0].value;
    var daylist = getDaysArray(new Date(startDate), new Date(endDate));
    const body= document.querySelector('main');

    daylist.forEach((elem)=>{
       const el=  document.createElement('date-element');
            var newElem=  elem.toISOString().slice(0,10);
            console.log(elem);
            el.append(newElem);
            el.style.border='1px solid grey';
            el.style.margin='10px';
            el.style.width='max-content';
            body.appendChild(el);
            
    })

    // var daylist= [];
    // daylist
  
  
  }
  var getDaysArray = function(start, end) {
      for(var arr=[],dt=start; dt<=end; dt.setDate(dt.getDate()+1)){
          arr.push(new Date(dt));
      }
      return arr;
  };
  