const lt = require("D:\\Documents\\作品集网站\\node_modules\\localtunnel");
const fs = require("fs");

async function start() {
  try {
    const tunnel = await lt({ port: 3000, subdomain: "zhousiyu" });
    const url = tunnel.url;
    fs.writeFileSync("D:\\Documents\\作品集网站\\tunnel_url.txt", url);
    console.log("PUBLIC_URL=" + url);
    
    tunnel.on("close", () => {
      console.log("Tunnel closed");
      fs.writeFileSync("D:\\Documents\\作品集网站\\tunnel_url.txt", "CLOSED at " + new Date().toISOString());
    });
  } catch(e) {
    console.error("TUNNEL_ERROR=" + e.message);
    fs.writeFileSync("D:\\Documents\\作品集网站\\tunnel_url.txt", "ERROR: " + e.message);
  }
}
start();
