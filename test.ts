const h = import.meta.resolve("./install.ps1").toString()
const tmp = Deno.makeTempFileSync()
Deno.writeTextFileSync(tmp, await fetch(h).then(x => x.text()))

new Deno.Command("powershell", {
    args: [
        "-NoProfile",
        "-NoLogo",
        tmp
    ],
    stderr: "inherit",
    stdout: "inherit"
}).spawn()