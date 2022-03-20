import { toast, toastProvider } from "./Toast.js";

toastProvider.setDelay(3000);
toastProvider.init();


const typesOfToasts = {
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
    warning: (message) => toast.warning(message),
    info: (message) => toast.info(message),
}
const textMessage = document.querySelector("textarea");

const showToast = (type) => {
    typesOfToasts[type](textMessage.value);
}

if (!window.showToast) {
    window["$showToast"] = showToast;
}

console.log(window);