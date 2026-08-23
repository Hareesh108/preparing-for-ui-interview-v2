// bun test src/problems/05-throttle/test/throttle.test.ts

export function throttle(fun: any, delay: number) {

    let lastTime: any = null

    return function inner(this: unknown, ...arg: any) {

        const now = Date.now()

        if (now - lastTime >= delay) {
            fun.apply(this, arg)
            lastTime = now
        }

    }

}
// --- Examples ---
// Uncomment to test your implementation:

const log = throttle((msg: string) => console.log(msg), 300)
log('a')  // fires immediately → "a"
log('b')  // ignored (within 300ms)
log('c')  // ignored (within 300ms)
setTimeout(() => log('d'), 400)  // fires → "d" (300ms passed)
