const FirstMiddleware = (req, ev) => {
    const checkNothing = true;
    if (!checkNothing) {
        return new Response("Hello World");
    }

    return console.log("hi");
};

export default FirstMiddleware;
