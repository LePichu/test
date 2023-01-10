const h = `${import.meta.resolve("./install.ps1").toString().replace("file:///", "")}`

new Deno.Command("powershell", {
    args: [
        "-NoProfile",
        "-NoLogo",
        h
    ],
    stderr: "inherit",
    stdout: "inherit"
}).spawn()