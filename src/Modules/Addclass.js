import Hasclass from "./Hasclass";

export default function Addclass(el,className) {
    if (el.classList)
        el.classList.add(className)
    else if (!Hasclass(el, className))
        el.className += " " + className;
}