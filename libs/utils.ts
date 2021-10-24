import * as path from 'path'
import * as fs from 'fs'
import * as dirs from './directories'

init()

function init() {
    for (const dirname in dirs) {
        fs.mkdirSync(dirs[dirname], { recursive: true })
    }
}

export function root(...paths: string[]) {
    return path.join(dirs.ROOT_DIR, ...paths)
}

export function dist(...paths: string[]) {
    return path.join(dirs.DIST_DIR, ...paths)
}

export function uniqueMerge<T>(key: string, ...arrs: T[][]) {
    const before = Array<T>().concat(...arrs)
    const next = Array<T>()

    before.forEach((row) => {
        const id = row[key]

        if (id) {
            const index = next.findIndex((nextRow) => nextRow[key] === id)

            if (index !== -1) {
                next.splice(index, 1)
            }
        }

        next.push(row)
    })

    return next
}
