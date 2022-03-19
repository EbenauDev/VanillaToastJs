const configuration = { position: "top-right", delay: 3000 };
let toastContainerElement;


const toast = {
    success: (message, title) => {


    },
    error: (message, tittle) => {

    }
}


const _createToasterContainer = () => {
    toastContainerElement = document.createElement("div");
    toastContainerElement.setAttribute("data-postion", configuration.position);
    document.body.appendChild(toastContainerElement);
    console.log(toastContainerElement);
}

const toastProvider = {
    setPosition: (value) => {
        configuration["position"] = value;
        window.localStorage.setItem("ToastConfig", JSON.stringify(configuration));
    },
    setDelay: (value) => {
        configuration["delay"] = value;
        window.localStorage.setItem("ToastConfig", JSON.stringify(configuration));
    },
    init() {
        _createToasterContainer();
    }
}

export {
    toastProvider,
    toast,
}