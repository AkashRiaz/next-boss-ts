const Colors = {
    Primary: "RED",
    Secondary: "BLUE"
} as const;

type ValidColor =typeof Colors [keyof typeof Colors]

const setColor = (c: ValidColor) =>{
    console.log(`This selected color is: ${c}`)
}

setColor("RED")
setColor("BLUE")