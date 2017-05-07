/**
 * Created by msi on 07/05/2017.
 */
function drawManyDiamond(N, H) {
    if (N < 1 || H < 1 || H % 2 == 0) {
        console.log("Can't draw any Diamond")
        return
    }

    let h = Math.floor(H / 2) + 1
    let width = H - 1
    let length = N * H - 2

    for (let i = 0; i < H; i++) {
        let shape = ''
        if (i < h) {
            for (let j = 0; j < length; j++) {
                let j2 = j % width
                if ((j2 == h - 1 - i) || (j2 == h - 1 + i)) {
                    shape += '*'
                } else {
                    shape += ' '
                }
            }
        } else {
            for (let j = 0; j < length; j++) {
                let j2 = j % width
                if ((j2 == i - h + 1) || (j2 == h - (i - h) + 1)) {
                    shape += '*'
                }
                else {
                    shape += ' '
                }
            }
        }
        console.log(shape)
    }
}

drawManyDiamond(3, 7)