const food = Deno.args[0]


if (food === 'love') {
    console.info('...Deno is born!');
} else {
    console.info('...this egg needs some love');
}
setTimeout(() => {
    console.info('check');
}, 1000)
console.table(Deno.metrics());
