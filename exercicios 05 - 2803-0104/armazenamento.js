export function save(x,y) {
    const position = {
        "x" : x,
        "y" : y
    }

    localStorage.setItem("position", JSON.stringify(position));
}

export const position = JSON.parse(localStorage.getItem("position")) || {"x":0, "y":0};

