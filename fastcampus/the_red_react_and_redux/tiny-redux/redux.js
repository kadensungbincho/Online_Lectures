export function createStore(updater) {
    let state;


    function doUpdate() {
        updater();
    }

    return {
        doUpdate,
    }
}