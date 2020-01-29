const REGEX_TRIM = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
const trim = str => (str == null ? '' : (str + '').replace(REGEX_TRIM, ''));

function add(elem, classes) {
    // use current class with spaces each side for string checking
    const curValue = (elem.getAttribute && elem.getAttribute('class')) || '';
    const cur = ` ${curValue} `;
    let finalValue = '';

    // split at spaces for checking multiple classes to add
    for (let i = 0, cs = classes.split(' '), l = cs.length; i < l; i += 1) {
        if (cs[i] !== '' && cur.indexOf(` ${cs[i]} `) === -1) {
            finalValue += ` ${cs[i]}`;
        }
    }

    // trim final value for html validity
    finalValue = trim(curValue + finalValue);
    if (curValue !== finalValue) {
        elem.setAttribute('class', finalValue);
    }
}

/**
 * @description add class(es) to element - support pre `classList`
 * @param {Element|Element[]} elem
 * @param {String} classes - space delimitted class(es) to add
 */
export default function addClass(elem, classes) {
    if (elem && elem.nodeType === 1 && typeof classes === 'string') {
        // element handling
        add(elem, classes);
    } else if (elem && typeof elem.length === 'number') {
        // array(like) handling
        for (let i = 0, l = elem.length; i < l; i += 1) {
            addClass(elem[i], classes);
        }
    }
}
