const animateRAFInterval = {
    id: null,
    start: null,
    canceled: false,

    cancel()
    {
        if (!this.cancel)
            return false;

        cancelAnimationFrame(this.id);
        this.id = null;
        this.canceled = true;
    }
};

function startRAFInterval(callback)
{
    if (!callback)
        throw new Error('callback is undefined');

    if (typeof callback !== 'function')
        throw new TypeError('callback is not a function');

    animateRAFInterval.canceled = false;

    function animate()
    {
        callback();

        if (!animateRAFInterval.canceled)
            animateRAFInterval.id = requestAnimationFrame(animate);
    }

    if (!animateRAFInterval.canceled)
        animateRAFInterval.id = requestAnimationFrame(animate);
}

animateRAFInterval.start = startRAFInterval;