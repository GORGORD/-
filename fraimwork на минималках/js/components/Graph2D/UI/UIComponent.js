class UIComponent extends Component {
    constructor(options) {
        super(options);
        this.num = 0;
    }

    _addEventListeners() {
        document.getElementById('addFunction')
            .addEventListener('click', () => this.addFunction());
    }

    addFunction() {
        let button = document.createElement('button');
        button.setAttribute('id', 'delete')
        button.innerHTML = 'Delete';
        button.addEventListener('click', () => {
            this.callbacks.delFunction(input.dataset.num);
            div.removeChild(input);
            div.removeChild(width);
            div.removeChild(color);
            div.removeChild(startLine);
            div.removeChild(endLine);
            div.removeChild(button);
        });
    
    
        

        let width = document.createElement('input');
        width.setAttribute('placeholder', 'width');
        width.setAttribute('id', 'width' + this.num);
        width.dataset.num = this.num;
        width.addEventListener('keyup', () => this.getValue(width));

        let color = document.createElement('input');
        color.setAttribute('placeholder', 'color');
        color.setAttribute('id', 'color' + this.num);
        color.dataset.num = this.num;
        color.addEventListener('keyup', () => this.getValue(color));

        let startLine = document.createElement('input');
        startLine.setAttribute('placeholder', 'startLine');
        startLine.setAttribute('id', 'startLine' + this.num);
        startLine.dataset.num = this.num;
        startLine.addEventListener('keyup', () => this.getValue(startLine));

        let endLine = document.createElement('input');
        endLine.setAttribute('placeholder', 'endLine');
        endLine.setAttribute('id', 'endLine' + this.num);
        endLine.dataset.num = this.num;
        endLine.addEventListener('keyup', () => this.getValue(endLine));

        let input = document.createElement('input');
        input.setAttribute('placeholder', `function №${this.num}`);
        input.setAttribute('id', 'inp' + this.num);
        input.dataset.num = this.num;
        input.addEventListener('keyup', () => this.keyup(input));

        let div = document.createElement('div');

        let funcsInputs = document.getElementById('funcsInputs');
        funcsInputs.appendChild(div);
        div.appendChild(input);
        div.appendChild(width);
        div.appendChild(color);
        div.appendChild(startLine);
        div.appendChild(endLine);
        div.appendChild(button);

        this.num++;
    }

    keyup(elem) {
        try {
            let f;
            eval(`f = function (x) {return ${elem.value};}`);
            let width = document.getElementById(`width${elem.dataset.num}`)
            let color = document.getElementById(`color${elem.dataset.num}`);
            let startLine = document.getElementById(`startLine${elem.dataset.num}`);  
            let endLine = document.getElementById(`endLine${elem.dataset.num}`);
            this.callbacks.addFunction(f, elem.dataset.num, width.value, color.value,startLine.value, endLine.value);
            
        } catch (e) {
            console.log(e);
        }
    }

    getValue(elem) {
        let f;
        let graph = document.getElementById(`inp${elem.dataset.num}`);
        let color = document.getElementById(`color${elem.dataset.num}`);
        let startLine = document.getElementById(`startLine${elem.dataset.num}`); 
        let endLine = document.getElementById(`endLine${elem.dataset.num}`);
        let width = document.getElementById(`width${elem.dataset.num}`);
        eval(`f = function (x) {return ${graph.value};}`);
        this.callbacks.addFunction(f, elem.dataset.num, width.value, color.value,startLine.value, endLine.value);
        
    }
}