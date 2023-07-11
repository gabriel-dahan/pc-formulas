import { F } from './formulas.js';

const formulasContainer =  document.getElementById('formulas');

const addFormulaCard = (formulaObj, formulaNb) => {
    let units = ''
    formulaObj.units.forEach(unit => {
        units += `<li>${unit}</li>`
    });

    let sidenotes = formulaObj.sidenotes ? `<small class="sidenotes"><span class="notes">Notes</span> : ${formulaObj.sidenotes}</small>` : ''
    formulasContainer.innerHTML += `
        <div class="formula-card" data-category="${formulaObj.category}" data-modal="modal-${formulaNb}">
            <span class="theme">${formulaObj.theme} - ${formulaObj.category}</span>
            <span class="title">${formulaObj.title}</span>
            <div class="fcontainer">
                <span class="formula">${formulaObj.formula}</span>
            </div>
        </div>
        <div id="modal-${formulaNb}" class="modal">
            <span class="theme">${formulaObj.theme} - ${formulaObj.category}</span>
            <span class="title">${formulaObj.title}</span>
            <div class="fcontainer">
                <span class="formula">${formulaObj.formula}</span>
            </div>
            <span class="units">
                <label>Composants : </label>
                <ul>
                    ${units}
                </ul>
            </span>
            <hr/>
            <div class="fdesc"> 
                <span class="description">${formulaObj.description || 'Aucune description'}</span>
            </div>
            <hr/>
            ${sidenotes}
        </div>
    `;
}


let categories = [];

F.forEach((f, i) => {
    addFormulaCard(f, i + 1);
    if(!categories.includes(f.category)) {
        categories.push(f.category);
    }
});

const categoriesSelector = document.getElementById('categories');
categoriesSelector.value = categories.join(',');

const initModals = () => {
    const modalOverlay = document.getElementById('modal-overlay');
    document.querySelectorAll('[data-modal^="modal-"]').forEach(m => {
        const modalId = m.dataset.modal;
        const modal = document.getElementById(modalId);
        m.addEventListener('click', () => {
            modal.classList.add('active');
            modalOverlay.classList.add('active');
        });

        modalOverlay.addEventListener('click', () => {
            modal.classList.remove('active');
            modalOverlay.classList.remove('active');
        });
    });
}
initModals()

/* 
    LIBS INIT 
*/

// ------- TOM SELECT ------- //
const select = new TomSelect('#categories', {
    plugins: {
		remove_button: {
			title: 'Remove this item',
		}
	},
	persist: false,
	create: true
});

select.on('item_add', (value, item) => {
    F.forEach(f => {
        if(f.category === value) {
            addFormulaCard(f)
        }
    });
});

select.on('item_remove', (value, item) => {
    F.forEach(f => {
        if(f.category === value) {
            document.querySelectorAll(`[data-category=${value}]`).forEach(element => {
                element.remove();
            });
        }
    });
});
// ----------------------------- //

// ------- VANILLA TILT ------- //
VanillaTilt.init(document.querySelectorAll('.formula-card'), {
    max: 10,
    speed: 400
});
// ----------------------------- //

// ------- LATEX (KATEX) ------- //
document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
        ],
        throwOnError : false
    });
});
// ----------------------------- //