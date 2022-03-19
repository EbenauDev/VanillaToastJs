import { toast, toastProvider } from "./Toast.js";


toastProvider.setDelay(50000);
toastProvider.init();

// setTimeout(() => {
//     toast.success("Sou o primeiro toast");
// }, 1000);

// setTimeout(() => {
//     toast.success("Sou o segundo toast");
// }, 2000);

// setTimeout(() => {
//     toast.success("Sou o terceiro toast");
// }, 3000);

