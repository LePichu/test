const h = `import.meta.resolve("./install.ps1").toString().replace("file:///", "")`
const tmp = Deno.makeTempFileSync()
Deno.writeTextFileSync(tmp, await fetch(h).then(x => x.text()))

new Deno.Command("powershell", {
    args: [
        "-NoProfile",
        "-NoLogo",
        h
    ],
    stderr: "inherit",
    stdout: "inherit"
}).spawn()