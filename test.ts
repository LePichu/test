const h = import.meta.resolve("./install.ps1").toString()
const tmp = Deno.makeTempDirSync()
const path = `${tmp}/install.ps1`
Deno.writeTextFileSync(path, await fetch(h).then(x => x.text()))

new Deno.Command("powershell", {
    args: [
        "-NoProfile",
        "-NoLogo",
        path
    ],
    stderr: "inherit",
    stdout: "inherit",
}).spawn()