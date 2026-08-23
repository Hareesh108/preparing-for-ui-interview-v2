// bun test src/problems/02-debounce/test/debounce.test.ts

export function debounce(func: any, delay: number) {

    let time: any = null

    return function inner(this: any, ...arg: any[]) {

        if (time) {
            clearTimeout(time)
        }

        time = setTimeout(() => {

            func.apply(this, arg)

        }, delay)

    }
}


// --- Examples ---
// Uncomment to test your implementation:

const log = debounce((msg: string) => console.log(msg), 300)
log('a')  // cancelled by next call
log('b')  // cancelled by next call
log('c')  // only this one fires after 300ms → "c"
