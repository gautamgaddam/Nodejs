class NewDateComp extends HTMLElement{
    set article(article){
        this.innerHTML=`
            <button>Convet to mm-dd-yyyy</button>
            <button>Convet to dd-mm-yyyy</button>
            <button>Convet to dd-mm-yyyy</button>
        `;
        
    }
}
customElements.define('date-element', NewDateComp);