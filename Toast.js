const configuration = { position: "top-right", delay: 3000 };
let toastContainerElement;

const _createToasterContainer = () => {
    toastContainerElement = document.createElement("div");
    toastContainerElement.classList.add("toast-container");
    toastContainerElement.setAttribute("data-position", configuration.position);
    document.body.appendChild(toastContainerElement);
}

const _createToaster = (message, type) => {
    const toaster = document.createElement("div");
    toaster.classList.add("toast");
    toaster.classList.add(type);
    toaster.innerText = message;
    toaster.onclick = () => { toaster.remove() };
    toastContainerElement.appendChild(toaster);
    setTimeout(() => {
        toaster.remove();
    }, configuration.delay);
}

const toast = {
    success: (message) => {
        _createToaster(message, "toast-success");
    },
    error: (message) => {
        _createToaster(message, "toast-error");
    }
}

const toastProvider = {
    setPosition: (value) => {
        configuration["position"] = value;
    },
    setDelay: (value) => {
        configuration["delay"] = value;
    },
    init() {
        _createToasterContainer();
    }
}

export {
    toastProvider,
    toast,
}