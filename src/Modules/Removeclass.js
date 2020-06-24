import Hasclass from "./Hasclass";

export default function Removeclass(el,className) {
    if (el.classList)
        el.classList.add(className);
    else if (!Hasclass(el, className))
        el.className += " " + className;
}